import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getUnit, getUnitPublications } from "@/services/units";

import { publication, unit } from "@/fields";

import { Publication } from "@/types/publication";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/publication";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-unit-publications")
export class UnitPublications extends Root {
  @property({ type: String, attribute: "unit-id" })
  id = "";

  private _getUnitPublications = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getUnit({ id, fields: unit({ locale }) }, { signal }),
        getUnitPublications(
          {
            id,
            fields: publication({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getUnitPublications.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([unit, publications]) =>
        html`<graph-widget-section>
          ${publications.items.length
            ? publications.items.map(
                (item: Publication) =>
                  html`<graph-widget-publication
                    exportparts="link, publication, publication__title, publication__abstract, publication__publisher, publication__year"
                    .publication=${item}
                    locale=${this.locale}
                  ></graph-widget-publication>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${unit._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-unit-publications": UnitPublications;
  }
}

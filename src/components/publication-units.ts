import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getPublication, getPublicationUnits } from "@/services/publications";

import { publication, unit } from "@/fields";

import { Unit } from "@/types/unit";

import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";
import "@/components/base/unit";

@localized()
@customElement("graph-widget-publication-units")
export class PublicationUnits extends Root {
  private _getPublicationUnits = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPublication({ id, fields: publication({ locale }) }, { signal }),
        getPublicationUnits(
          {
            id,
            fields: unit({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPublicationUnits.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([publication, units]) =>
        html`<graph-widget-section>
          <graph-widget-section-title
            slot="header"
            description=${msg("Units related to this publication")}
          >
            ${publication.title}
          </graph-widget-section-title>
          ${units.items.length
            ? units.items.map(
                (item: Unit) =>
                  html`<graph-widget-unit
                    .unit=${item}
                    locale=${this.locale}
                  ></graph-widget-unit>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}
          <graph-widget-section-link
            slot="footer"
            href=${publication._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication-units": PublicationUnits;
  }
}

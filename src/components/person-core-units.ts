import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getPerson, getPersonCoreUnits } from "@/services/persons";

import { unit, person } from "@/fields";

import "@/components/base/unit";
import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

import { Unit } from "@/types/unit";

@localized()
@customElement("graph-widget-person-core-units")
export class PersonCoreUnits extends Root {
  @property({ type: String })
  "person-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getPersonUnits = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPerson({ id, fields: person({ locale }) }, { signal }),
        getPersonCoreUnits(
          {
            id,
            fields: unit({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["person-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPersonUnits.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error: Error) =>
        html`<graph-widget-error>${error.message}</graph-widget-error>`,
      complete: ([person, units]) =>
        html`<graph-widget-section>
          ${msg(
            html`<graph-widget-section-title
              slot="header"
              description=${msg("Units for this person")}
            >
              ${person.name_display}
            </graph-widget-section-title> `
          )}
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
            href=${person._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person-core-units": PersonCoreUnits;
  }
}

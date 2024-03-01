import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getPerson, getPersonPersons } from "@/services/persons";

import { person } from "@/fields";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/person";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

import { Person } from "@/types/person";

@customElement("graph-widget-person-persons")
export class PersonPersons extends Root {
  @property({ type: String, attribute: "person-id" })
  id = "";

  private _getPersonPersons = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPerson({ id, fields: person({ locale }) }, { signal }),
        getPersonPersons(
          {
            id,
            fields: person({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPersonPersons.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([person, persons]) =>
        html`<graph-widget-section>
          ${persons.items.length
            ? persons.items.map(
                (item: Person) =>
                  html`<graph-widget-person
                    exportparts="link, person, person__name, person__biography"
                    .person=${item}
                    locale=${this.locale}
                  ></graph-widget-person>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${person._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-person-persons": PersonPersons;
  }
}

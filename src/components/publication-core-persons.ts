import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import {
  getPublication,
  getPublicationCorePersons,
} from "@/services/publications";

import { person, publication } from "@/fields";

import { Person } from "@/types/person";

import "@/components/base/loading";
import "@/components/base/no-results";
import "@/components/base/person";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-publication-core-persons")
export class PublicationCorePersons extends Root {
  @property({ type: String, attribute: "publication-id" })
  id = "";

  private _getPublicationPersons = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPublication({ id, fields: publication({ locale }) }, { signal }),
        getPublicationCorePersons(
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
    return this._getPublicationPersons.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([publication, persons]) =>
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
            href=${publication._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication-core-persons": PublicationCorePersons;
  }
}

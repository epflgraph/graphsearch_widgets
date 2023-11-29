import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";
import { Task } from "@lit/task";

import { getPublication, getPublicationPersons } from "@/services/publications";

import { person, publication } from "@/fields";

import { Person } from "@/types/person";

import "@/components/base/person";
import "@/components/base/error";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";
import "@/components/base/sectionTitle";

@localized()
@customElement("graph-widget-publication-persons")
export class PublicationPersons extends Root {
  @property({ type: String })
  "publication-id" = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  private _getPublicationPersons = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getPublication({ id, fields: publication({ locale }) }, { signal }),
        getPublicationPersons(
          {
            id,
            fields: person({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this["publication-id"], this.locale, this.limit, this.offset],
  });

  render() {
    return this._getPublicationPersons.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      error: (error) => html`<graph-widget-error>${error}</graph-widget-error>`,
      complete: ([publication, persons]) =>
        html`<graph-widget-section>
          ${html`<graph-widget-section-title
            slot="header"
            description=${msg("Persons related to this publication")}
          >
            ${publication.title}
          </graph-widget-section-title> `}
          ${persons.items.length
            ? persons.items.map(
                (item: Person) =>
                  html`<graph-widget-person
                    .person=${item}
                    locale=${this.locale}
                  ></graph-widget-person>`
              )
            : html`<graph-widget-no-results></graph-widget-no-results>`}

          <div slot="footer">
            <graph-widget-section-link
              href=${publication._url}
            ></graph-widget-section-link>
          </div>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-publication-persons": PublicationPersons;
  }
}

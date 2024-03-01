import { html } from "lit";
import { customElement, property } from "lit/decorators.js";

import { Task } from "@lit/task";

import { getLecture, getLectureConcepts } from "@/services/lectures";

import { concept, lecture } from "@/fields";

import { Concept } from "@/types/concept";

import "@/components/base/concept";
import "@/components/base/loading";
import "@/components/base/no-results";
import { Root } from "@/components/base/root";
import "@/components/base/section";
import "@/components/base/sectionLink";

@customElement("graph-widget-lecture-concepts")
export class LectureConcepts extends Root {
  @property({ type: String, attribute: "lecture-id" })
  id = "";

  private _getLectureConcepts = new Task(this, {
    task: async ([id, locale, limit, offset], { signal }) =>
      Promise.all([
        getLecture({ id, fields: lecture({ locale }) }, { signal }),
        getLectureConcepts(
          {
            id,
            fields: concept({ locale }),
            limit: Number(limit),
            offset: Number(offset),
          },
          { signal }
        ),
      ]),
    args: () => [this.id, this.locale, this.limit, this.offset],
  });

  render() {
    return this._getLectureConcepts.render({
      pending: () =>
        html`<graph-widget-loading limit=${this.limit}></graph-widget-loading>`,
      complete: ([lecture, concepts]) =>
        html`<graph-widget-section>
          ${concepts.items.length
            ? concepts.items.map(
                (item: Concept) =>
                  html`<graph-widget-concept
                    exportparts="link, unit, unit__name, breadcrumbs, breadcrumb"
                    .concept=${item}
                    locale=${this.locale}
                  ></graph-widget-concept>`
              )
            : html`<graph-widget-no-results
                exportparts="no-results"
              ></graph-widget-no-results>`}
          <graph-widget-section-link
            exportparts="button"
            slot="footer"
            href=${lecture._url}
          ></graph-widget-section-link>
        </graph-widget-section>`,
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-lecture-concepts": LectureConcepts;
  }
}

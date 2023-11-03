import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { BaseElement } from "@/shared/base-element";

@customElement("test-component")
export class TestComponent extends BaseElement {
  @property()
  name?: string = "World";

  render() {
    return html`
      <p class="p-6 bg-slate-600 text-white rounded-sm shadow-sm">
        Hello,
        <b>${this.name}</b>
        !
      </p>
    `;
  }
}

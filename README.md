# Graph Search Widgets

**This repository contains a set of public [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) build with [Lit](https://lit.dev/) that display a set of results from [EPFL Graph Search](https://graphsearch.epfl.ch/).**

## Installation

```html
<!-- include this somewhere on your page -->
<graph-widget-concepts id="18973446"></graph-widget-concepts>
<script src="https://cdn.jsdelivr.net/gh/epflgraph/graphsearch_widgets/dist/index.js"></script>
```

In production, it is recommended to use a specific version of the library instead of the latest version. You can lock onto a specific version of the library by using the following URL and replacing `<version>` with the version you want to use:

```
https://cdn.jsdelivr.net/gh/epflgraph/graphsearch_widgets@<version>/dist/index.js
```

For the available versions, please refer to [this overview](https://github.com/epflgraph/graphsearch_widgets/tags).

## Usage

The library exposes a set of Web Components showing results of a Graph Search query. A Web Component is a custom HTML element that can be used in the same way as a standard HTML element. Each element has a set of attributes to configure the component.

_id_: The ID of the element to display. This is the only required attribute. Example: `id="PHYS-420"`.

_limit_: The maximum number of results to display (defaults to 3). Example: `limit="10"`.

_offset_: The number of results to skip (defaults to 0). Example: `offset="10"`.

_locale_: The locale to use for the labels and content (defaults to en). Example: `locale="fr"`. Available values: en, fr. When the attribute is changed, the component will automatically update based on the new value. Be aware that the displayed items might differ based on the locale.

The component is full width and transparent by default. Font style is inherted so that the components blend in with the typography of your website. It is up to you to place it in a container with a readable width and on a white background. For convenience, you can use the following utility Web Component that will add padding and a white background:

```html
<graph-widget-container>
  <graph-widget-concepts id="18973446"></graph-widget-concepts>
</graph-widget-container>
```

## Available components

```html
<!-- Related to a Concept -->
<graph-widget-concepts id="18973446"></graph-widget-concepts>
<graph-widget-courses id="18973446"></graph-widget-courses>
<graph-widget-lectures id="18973446"></graph-widget-lectures>
<graph-widget-persons id="18973446"></graph-widget-persons>
<graph-widget-publications id="18973446"></graph-widget-publications>
<graph-widget-units id="18973446"></graph-widget-units>

<!-- Related to a Course -->
<graph-widget-concepts id="PHYS-420"></graph-widget-concepts>
<graph-widget-core-lectures id="PHYS-420"></graph-widget-core-lectures>
<graph-widget-core-persons id="PHYS-420"></graph-widget-core-persons>
<graph-widget-courses id="PHYS-420"></graph-widget-courses>
<graph-widget-lectures id="PHYS-420"></graph-widget-lectures>
<graph-widget-persons id="PHYS-420"></graph-widget-persons>
<graph-widget-publications id="PHYS-420"></graph-widget-publications>
<graph-widget-units id="PHYS-420"></graph-widget-units>

<!-- Related to a Lecture -->
<graph-widget-concepts id="009c32783TFQzZG6Wt"></graph-widget-concepts>
<graph-widget-core-courses id="009c32783TFQzZG6Wt"></graph-widget-core-courses>
<graph-widget-core-persons id="009c32783TFQzZG6Wt"></graph-widget-core-persons>
<graph-widget-courses id="009c32783TFQzZG6Wt"></graph-widget-courses>
<graph-widget-lectures id="009c32783TFQzZG6Wt"></graph-widget-lectures>
<graph-widget-persons id="009c32783TFQzZG6Wt"></graph-widget-persons>
<graph-widget-publications id="009c32783TFQzZG6Wt"></graph-widget-publications>
<graph-widget-units id="009c32783TFQzZG6Wt"></graph-widget-units>

<!-- Related to a Person -->
<graph-widget-concepts id="157873"></graph-widget-concepts>
<graph-widget-core-courses id="157873"></graph-widget-core-courses>
<graph-widget-core-lectures id="157873"></graph-widget-core-lectures>
<graph-widget-core-publications id="157873"></graph-widget-core-publications>
<graph-widget-core-units id="157873"></graph-widget-core-units>
<graph-widget-courses id="157873"></graph-widget-courses>
<graph-widget-lectures id="157873"></graph-widget-lectures>
<graph-widget-persons id="157873"></graph-widget-persons>
<graph-widget-publications id="157873"></graph-widget-publications>
<graph-widget-units id="157873"></graph-widget-units>

<!-- Related to a Publication -->
<graph-widget-concepts id="290078"></graph-widget-concepts>
<graph-widget-core-persons id="290078"></graph-widget-core-persons>
<graph-widget-courses id="290078"></graph-widget-courses>
<graph-widget-lectures id="290078"></graph-widget-lectures>
<graph-widget-persons id="290078"></graph-widget-persons>
<graph-widget-publications id="290078"></graph-widget-publications>
<graph-widget-units id="290078"></graph-widget-units>

<!-- Related to a Unit -->
<graph-widget-concepts id="LCAV"></graph-widget-concepts>
<graph-widget-core-persons id="LCAV"></graph-widget-core-persons>
<graph-widget-courses id="LCAV"></graph-widget-courses>
<graph-widget-lectures id="LCAV"></graph-widget-lectures>
<graph-widget-persons id="LCAV"></graph-widget-persons>
<graph-widget-publications id="LCAV"></graph-widget-publications>
<graph-widget-units id="LCAV"></graph-widget-units>
```

For more information visit [https://graphsearch.epfl.ch/](https://graphsearch.epfl.ch/).

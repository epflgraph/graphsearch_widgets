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
<graph-widget-concept-concepts id="18973446"></graph-widget-concept-concepts>
<graph-widget-concept-courses id="18973446"></graph-widget-concept-courses>
<graph-widget-concept-lectures id="18973446"></graph-widget-concept-lectures>
<graph-widget-concept-persons id="18973446"></graph-widget-concept-persons>
<graph-widget-concept-publications
  id="18973446"
></graph-widget-concept-publications>
<graph-widget-concept-units id="18973446"></graph-widget-concept-units>

<!-- Related to a Course -->
<graph-widget-course-concepts id="PHYS-420"></graph-widget-course-concepts>
<graph-widget-course-core-lectures
  id="PHYS-420"
></graph-widget-course-core-lectures>
<graph-widget-course-core-persons
  id="PHYS-420"
></graph-widget-course-core-persons>
<graph-widget-course-courses id="PHYS-420"></graph-widget-course-courses>
<graph-widget-course-lectures id="PHYS-420"></graph-widget-course-lectures>
<graph-widget-course-persons id="PHYS-420"></graph-widget-course-persons>
<graph-widget-course-publications
  id="PHYS-420"
></graph-widget-course-publications>
<graph-widget-course-units id="PHYS-420"></graph-widget-course-units>

<!-- Related to a Lecture -->
<graph-widget-lecture-concepts
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-concepts>
<graph-widget-lecture-core-courses
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-core-courses>
<graph-widget-lecture-core-persons
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-core-persons>
<graph-widget-lecture-courses
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-courses>
<graph-widget-lecture-lectures
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-lectures>
<graph-widget-lecture-persons
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-persons>
<graph-widget-lecture-publications
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-publications>
<graph-widget-lecture-units
  id="009c32783TFQzZG6Wt"
></graph-widget-lecture-units>

<!-- Related to a Person -->
<graph-widget-person-concepts id="157873"></graph-widget-person-concepts>
<graph-widget-person-core-courses
  id="157873"
></graph-widget-person-core-courses>
<graph-widget-person-core-lectures
  id="157873"
></graph-widget-person-core-lectures>
<graph-widget-person-core-publications
  id="157873"
></graph-widget-person-core-publications>
<graph-widget-person-core-units id="157873"></graph-widget-person-core-units>
<graph-widget-person-courses id="157873"></graph-widget-person-courses>
<graph-widget-person-lectures id="157873"></graph-widget-person-lectures>
<graph-widget-person-persons id="157873"></graph-widget-person-persons>
<graph-widget-person-publications
  id="157873"
></graph-widget-person-publications>
<graph-widget-person-units id="157873"></graph-widget-person-units>

<!-- Related to a Publication -->
<graph-widget-publication-concepts
  id="290078"
></graph-widget-publication-concepts>
<graph-widget-publication-core-persons
  id="290078"
></graph-widget-publication-core-persons>
<graph-widget-publication-courses
  id="290078"
></graph-widget-publication-courses>
<graph-widget-publication-lectures
  id="290078"
></graph-widget-publication-lectures>
<graph-widget-publication-persons
  id="290078"
></graph-widget-publication-persons>
<graph-widget-publication-publications
  id="290078"
></graph-widget-publication-publications>
<graph-widget-publication-units id="290078"></graph-widget-publication-units>

<!-- Related to a Unit -->
<graph-widget-unit-concepts id="LCAV"></graph-widget-unit-concepts>
<graph-widget-unit-core-persons id="LCAV"></graph-widget-unit-core-persons>
<graph-widget-unit-courses id="LCAV"></graph-widget-unit-courses>
<graph-widget-unit-lectures id="LCAV"></graph-widget-unit-lectures>
<graph-widget-unit-persons id="LCAV"></graph-widget-unit-persons>
<graph-widget-unit-publications id="LCAV"></graph-widget-unit-publications>
<graph-widget-unit-units id="LCAV"></graph-widget-unit-units>
```

For more information visit [https://graphsearch.epfl.ch/](https://graphsearch.epfl.ch/).

# Graph Search Widgets

**This repository contains a set of public [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) build with [Lit](https://lit.dev/) that display a set of results from [EPFL Graph Search](https://graphsearch.epfl.ch/).**

## Installation

```html
<!-- include this somewhere on your page -->
<graph-widget-concept-concepts
  concept-id="18973446"
></graph-widget-concept-concepts>
<script src="https://cdn.jsdelivr.net/gh/epflgraph/graphsearch_widgets/dist/index.js"></script>
```

In production, it is recommended to use a specific version of the library instead of the latest version. You can lock onto a specific version of the library by using the following URL and replacing `<version>` with the version you want to use:

```
https://cdn.jsdelivr.net/gh/epflgraph/graphsearch_widgets@<version>/dist/index.js
```

For the available versions, please refer to [this overview](https://github.com/epflgraph/graphsearch_widgets/tags).

## Usage

The library exposes a set of Web Components showing results of a Graph Search query. A Web Component is a custom HTML element that can be used in the same way as a standard HTML element. Each element has a set of attributes to configure the component.

_[type]-id_: The ID of the element to display. This is the only required attribute. Example: `concept-id="PHYS-420"`.

_limit_: The maximum number of results to display (defaults to 3). Example: `limit="10"`.

_offset_: The number of results to skip (defaults to 0). Example: `offset="10"`.

_locale_: The locale to use for the labels and content (defaults to en). Example: `locale="fr"`. Available values: en, fr. When the attribute is changed, the component will automatically update based on the new value. Be aware that the displayed items might differ based on the locale.

To style the components the widgets [export](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/exportparts) a number of [parts](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/part) that can be styled using CSS. While there are many exposed parts to offer fine control, in most cases nothing, or only `link` and `button` should be styled to match your styling. The following parts are available:

- `link`: A link
- `button`: A button
- `container`: Wrapper for the _container_ component
- `no-results`: _No results_ message component
- `concept`: Wrapper for a _concept_ element
- `concept__name`: Name of a concept, alias for `link`
- `concept__description` Description of a _concept_
- `course`: Wrapper for a _course_ element
- `course__title`: Title of a _course_, alias for `link`
- `course__summary`: Summary of a _course_
- `lecture`: Wrapper for a _lecture_ element
- `lecture__title`: Title of a _lecture_, alias for `link`
- `lecture__subtitle`: Subtitle of a _lecture_
- `person`: Wrapper for a _person_ element
- `person__name`: Name of a _person_, alias for `link`
- `person__biography`: Biography of a _person_
- `publication`: Wrapper for a _publication_ element
- `publication__title`: Title of a _publication_, alias for `link`
- `publication__abstract`: Abstract of a _publication_
- `publication__publisher`: Publisher of a _publication_
- `publication__year`: Year of a _publication_
- `unit`: Wrapper for a _unit_ element
- `unit__name`: Name of a _unit_, alias for `link`
- `breadcrumbs`: Wrapper for the _breadcrumbs_ component, used for the _unit_ path
- `breadcrumb`: A single breadcrumb in the _breadcrumbs_ component, contains a nested `link`

To style a link for example, you can use the following CSS:

```css
graph-widget-concept-concepts::part(link) {
  color: blue;
  text-decoration: underline;
  font-weight: bold;
}
```

The component is full width and transparent by default. Font style is inherted so that the components blend in with the typography of your website. It is up to you to place it in a container with a readable width and on a white background and provide a title or other context to the user.

For convenience, you can use the following utility Web Component that will add padding and a white background:

```html
<graph-widget-container>
  <graph-widget-concept-concepts
    concept-id="18973446"
  ></graph-widget-concept-concepts>
</graph-widget-container>
```

## Development

Please consult the [Lit documentation](https://lit.dev/) for more information on how to use the library. The following commands are available:

```bash
# instal dependencies
npm install

# start the development server and serve a demo page
npm run dev

# build
npm run build

# you can also watch the files and rebuild on changes
npm run build:watch

# extract the translations (runtime-mode)
npm run localize:extract

# build the translations
npm run localize:build
```

## Available components

```html
<!-- Related to a Concept -->
<graph-widget-concept-concepts
  concept-id="18973446"
></graph-widget-concept-concepts>
<graph-widget-concept-courses
  concept-id="18973446"
></graph-widget-concept-courses>
<graph-widget-concept-lectures
  concept-id="18973446"
></graph-widget-concept-lectures>
<graph-widget-concept-persons
  concept-id="18973446"
></graph-widget-concept-persons>
<graph-widget-concept-publications
  id="18973446"
></graph-widget-concept-publications>
<graph-widget-concept-units concept-id="18973446"></graph-widget-concept-units>

<!-- Related to a Course -->
<graph-widget-course-concepts
  course-id="PHYS-420"
></graph-widget-course-concepts>
<graph-widget-course-core-lectures
  course-id="PHYS-420"
></graph-widget-course-core-lectures>
<graph-widget-course-core-persons
  course-id="PHYS-420"
></graph-widget-course-core-persons>
<graph-widget-course-courses course-id="PHYS-420"></graph-widget-course-courses>
<graph-widget-course-lectures
  course-id="PHYS-420"
></graph-widget-course-lectures>
<graph-widget-course-persons course-id="PHYS-420"></graph-widget-course-persons>
<graph-widget-course-publications
  course-id="PHYS-420"
></graph-widget-course-publications>
<graph-widget-course-units course-id="PHYS-420"></graph-widget-course-units>

<!-- Related to a Lecture -->
<graph-widget-lecture-concepts
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-concepts>
<graph-widget-lecture-core-courses
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-core-courses>
<graph-widget-lecture-core-persons
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-core-persons>
<graph-widget-lecture-courses
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-courses>
<graph-widget-lecture-lectures
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-lectures>
<graph-widget-lecture-persons
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-persons>
<graph-widget-lecture-publications
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-publications>
<graph-widget-lecture-units
  lecture-id="009c32783TFQzZG6Wt"
></graph-widget-lecture-units>

<!-- Related to a Person -->
<graph-widget-person-concepts person-id="157873"></graph-widget-person-concepts>
<graph-widget-person-core-courses
  person-id="157873"
></graph-widget-person-core-courses>
<graph-widget-person-core-lectures
  id="157873"
></graph-widget-person-core-lectures>
<graph-widget-person-core-publications
  id="157873"
></graph-widget-person-core-publications>
<graph-widget-person-core-units
  person-id="157873"
></graph-widget-person-core-units>
<graph-widget-person-courses person-id="157873"></graph-widget-person-courses>
<graph-widget-person-lectures person-id="157873"></graph-widget-person-lectures>
<graph-widget-person-persons person-id="157873"></graph-widget-person-persons>
<graph-widget-person-publications
  person-id="157873"
></graph-widget-person-publications>
<graph-widget-person-units person-id="157873"></graph-widget-person-units>

<!-- Related to a Publication -->
<graph-widget-publication-concepts
  publication-id="290078"
></graph-widget-publication-concepts>
<graph-widget-publication-core-persons
  publication-id="290078"
></graph-widget-publication-core-persons>
<graph-widget-publication-courses
  publication-id="290078"
></graph-widget-publication-courses>
<graph-widget-publication-lectures
  publication-id="290078"
></graph-widget-publication-lectures>
<graph-widget-publication-persons
  publication-id="290078"
></graph-widget-publication-persons>
<graph-widget-publication-publications
  publication-id="290078"
></graph-widget-publication-publications>
<graph-widget-publication-units
  publication-id="290078"
></graph-widget-publication-units>

<!-- Related to a Unit -->
<graph-widget-unit-concepts unit-id="LCAV"></graph-widget-unit-concepts>
<graph-widget-unit-core-persons unit-id="LCAV"></graph-widget-unit-core-persons>
<graph-widget-unit-courses unit-id="LCAV"></graph-widget-unit-courses>
<graph-widget-unit-lectures unit-id="LCAV"></graph-widget-unit-lectures>
<graph-widget-unit-persons unit-id="LCAV"></graph-widget-unit-persons>
<graph-widget-unit-publications unit-id="LCAV"></graph-widget-unit-publications>
<graph-widget-unit-units unit-id="LCAV"></graph-widget-unit-units>
```

For more information visit [https://graphsearch.epfl.ch/](https://graphsearch.epfl.ch/).

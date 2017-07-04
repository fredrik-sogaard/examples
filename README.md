# Code Examples
I've included some abbreviated code I think is relevant to this project. Mostly related to Craft CMS and using React for frontend consuming an API from a headless cms.

Here's an intro to the included folders:

## Components
This small example is how we use more granular elements with receiving props from the templates. We define macros in Twig, and include them with optional props. This way we can have some flexibility of individual elements, yet retain a consistent style across all components.

## Craft CMS 3 Starter Kit
This our new internal starter kit for Craft CMS 3 projects. More details on the `readme`.

## Enhancing with Vue
This is a tiny example of how we enhance small parts of existing templates with Vue, in particular how we can easily build a reusable form submit and validation system across a site. (I've stripped out a lot of code here to only show one small form.)

## Flexible Content Blocks
This is an example of how we would build up content blocks defined in the cms. Craft CMS has a powerful Matrix field type, which allows for very flexible "blank" templates that can be filled with smaller content modules or blocks.

This is also an example of how we use the functional CSS toolkit Tachyons to build up components quickly with very little CSS written. In our experience this keeps the CSS sane, easy to work with and we avoid a lot of bloat in the long term. [I've written a little about it here: ](https://medium.com/@fredrik_sogaard/why-functional-css-is-a-good-idea-2d0d186b5f31)

## JavaScript Page Transitions
This is an example showing some JavaScript code related to page transitions on a web site. This particular example uses [http://barbajs.org/](http://barbajs.org/) to manage the state of the app while navigating. This also shows a few very simple animations with Anime.js and some scroll tracking with ScrollMagic.

## React SSR
Ah, the holy grail of modern JavaScript development: Server side rendering with async data from an API. This is part of our re-make of our own website currently in progress, where we use Craft CMS as a headless cms just providing API endpoints serving up json data. This approach can be used with any cms: Wordpress API or Contentful to name a few.

Pretty standard approach were we check the requested route, on the server in Node, for any async data dependencies, render the app, replacing the markup and injecting the data into the markup, so the app can get at it.

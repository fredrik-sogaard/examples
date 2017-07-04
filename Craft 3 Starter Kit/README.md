## Craft CMS 3 starter kit
Base starting point for Craft CMS 3 projects. Built for fast setup and easy extendability.

## Includes
- Laravel Elixir Gulp for easy development cycle and asset building.
- Post CSS with easy imports and PreCSS for SCSS syntax support.
- Tachyons functional CSS
- Modern ES2015 JavaScript with Webpack
- jQuery (optional)

## How to use
1. Install composer and Craft CMS 3: [Craft 3 documentation](https://github.com/craftcms/docs/blob/master/en/installation.md)
2. Install npm modules: `npm install`
3. Start development server with Browsersync: `gulp watch`
4. Build minified assets with `gulp --production`

## Directory structure
#### `templates/`
All your front end templates. The following is a suggested organization. Feel free to expand as needed.

#### `templates/components`
All re-usable components shared by the app. For instance buttons, hero sections, footer, navbar etc.

#### `templates/layouts`
All outer wrapper layouts for views.

#### `templates/views`
Higher lever views or pages. Gets wrapped by layouts. For instance home page, contact page etc.

#### `web/`
This is Craft CMS's web root. Everything here is public facing.

#### `web/build`
Compiled css and js files with source maps end up here. Normally you shouldn't touch this.

#### `web/css`
Styling and imports for the app goes here. PostCSS capabilities. Includes Tachyons.
Uses `postcss-easy-import` for easy imports (doh) from `node_modules`. 

#### `web/images`
All image assets used in the front end templates.

#### `web/js`
All JavaScript files. ES2015 capabilities via Webpack.


## About Craft CMS

Craft is a content-first CMS that aims to make life enjoyable for developers and content managers alike. It is optimized for bespoke web and application development, offering developers a clean slate to build out exactly what they want, rather than wrestling with a theme.

Learn more about Craft at [craftcms.com](https://craftcms.com).

## How to Install Craft 3 Beta

Installation instructions can be found in the [Craft 3 documentation](https://github.com/craftcms/docs/blob/master/en/installation.md).

## Resources

#### Official Resources
- [Craft 3 Documentation](https://github.com/craftcms/docs)
- [Craft 3 Plugins](https://github.com/craftcms/plugins)
- [Demo site](https://demo.craftcms.com/)
- [Craft Slack](https://craftcms.com/community#slack)
- [Craft CMS Stack Exchange](http://craftcms.stackexchange.com/)

#### Community Resources
- [Mijingo](https://mijingo.com/craft) – Video courses and other learning resources
- [Envato Tuts+](https://webdesign.tutsplus.com/categories/craft-cms/courses) – Video courses
- [Straight Up Craft](http://straightupcraft.com/) – Articles, tutorials, and more
- [Craft Cookbook](https://craftcookbook.net/) – Quick answers for common tasks
- [pluginfactory.io](https://pluginfactory.io/) – Craft plugin scaffold generator

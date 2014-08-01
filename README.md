home-poplus
===========

A CMS-free website for the Poplus project.

To install, run:

```shell
bundle
```

To preview the website locally, run:

```shell
bundle exec jekyll serve --watch
```

To compile the Sass stylesheets into CSS, run:

```shell
bundle exec sass --watch assets/sass:css --style compressed
```

**Please don’t edit global.css directly.** If you do, your changes will be overwritten the next time we compile our Sass files.

[![Build Status](https://travis-ci.org/digital-land/digital-land.svg?branch=master)](https://travis-ci.org/digital-land/digital-land)

# Digital Land

## Environment reqs

To build/run site you need:

- [Hugo](https://gohugo.io)
- [Node](https://nodejs.org/en/) and [Npm](https://www.npmjs.com/)
- [Gulp](https://gulpjs.com/)


## The generated output is deployed via a github pages repo at [https://github.com/digital-land/digital-land.github.io](https://github.com/digital-land/digital-land.github.io)


## Development

To develop the site locally, run:

- `npm run start` to generate css, start gulp watch task and run hugo server in the background

## Creating content

See [creating content](CREATE-CONTENT.md) documentation.


## Deploy of site

On commit to master there is a travis build that generates deploys the static pages using the deploy.sh script in this repo.

If you absolutely must deploy manually, delete any public directory you have first, then clone the digital-land.github.io repo (see above), make your changes and then run `./deploy.sh` Otherwise let travis take care of it

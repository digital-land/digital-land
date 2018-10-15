[![Build Status](https://travis-ci.org/digital-land.svg?branch=master)](https://travis-ci.org/digital-land)

# Digital Land

## Environment reqs

To build/run site you need:

- [Hugo](https://gohugo.io)
- [Node](https://nodejs.org/en/) and [Npm](https://www.npmjs.com/)
- [Gulp](https://gulpjs.com/)


## The generated output is deployed via a github pages repo at [https://github.com/digital-land/digital-land.github.io](https://github.com/digital-land/digital-land.github.io)


## Development

Before you start working on the site for the first time, clone the github pages repo into a subdirectory inside
this project, called 'public'

- `git clone git@github.com:digital-land/digital-land.github.io.git public`

* Note we are not using a git submodule for this as suggested in Hugo docs as it just did not work.

To develop the site locally, run:

- `gulp` to generate css and run watch task
- `hugo server -D` to rebuild and server entire site. `-D` flag is required to generate the draft content.

Alternatively, run:

- `npm run start` to generate css, start gulp watch task and run hugo server in the background

## Creating content

See [creating content](CREATE-CONTENT.md) documentation.


## Deploy site

There is a script to deploy the site to the github pages repo. You need to have cloned [https://github.com/digital-land/digital-land.github.io](https://github.com/digital-land/digital-land.github.io) into a subdirectory, named 'public'. See details above.

- To deploy the site run `./deploy.sh`

# NodeJS Tech Project

[![Build Status](https://travis-ci.org/Skysplit/nodejs-tech.svg?branch=master)](https://travis-ci.org/Skysplit/nodejs-tech)
[![Maintainability](https://api.codeclimate.com/v1/badges/5c0569f20893fb1f72bf/maintainability)](https://codeclimate.com/github/Skysplit/nodejs-tech/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/5c0569f20893fb1f72bf/test_coverage)](https://codeclimate.com/github/Skysplit/nodejs-tech/test_coverage)

## App requirements

* [ ] Five models with relations to each other
    * [ ] At least one n-n relation
* [ ] It has server side rendered pages
* [ ] It has application API for three models (in jsonapi or graphql standard)
    * [ ] It has one nested resource
    * [ ] It returns errors when a request has invalid data
* [ ] It has authentication (session and token based)
* [ ] It has authorization (roles, e.g. admin/user)
* [ ] It provide full text search (can be PostgreSQL FTS)
* [ ] It uses queues (e.g. Sidekiq/Resque)
* [ ] It has at least one background task that can be executed e.g. to update data
    * Executed by the `npm` command
* [ ] It has at least two third party integrations
    * [ ] Sending Email or SMS (e.g. AWS SES)
    * [ ] Integration with external API through axios (custom implementation)
* [ ] App is created using [Node Best Practices](https://github.com/i0natan/nodebestpractices)
* [ ] App and classes public interface is covered with tests
* [ ] App is deployed

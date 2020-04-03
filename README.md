


<p align="center">
  <img width="350" src="https://i.imgur.com/0QaBxJ9.png">
  <br>
  <br>
  <span>
    <img src="https://travis-ci.org/henk-badenhorst/vue-hotjar.svg?branch=master">
  </span>
  &nbsp;
  <span>
    <img src="https://coveralls.io/repos/github/henk-badenhorst/vue-hotjar/badge.svg?branch=master">
  </span>
  &nbsp;
  <span>
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </span>
</p>

# Vue Hotjar

This is a simple Vue plugin that will allow you to easily add Hotjar to any Vue project.

## Why should I use it

If you just add the Hotjar snippet to your site it will start tracking user activity regardless of the environment Eg. in development mode. This is undesirable and this extension will take care of that. It will also help you to easily manage your Hotjar ID's in staging and development environments.

## Install

```bash
npm install vue-hotjar
```

Start using it in your Vue application.

```js
import Vue from 'vue'
import Hotjar from 'vue-hotjar'

Vue.use(Hotjar, {
    id: 'XXXXXXX' // Hotjar Site ID
})
```

### Parameters

#### Id:

Your Hotjar Site ID is a required parameter and can be found on your Hotjar account.

```js 
id: 'XXXXXXX' 
```

#### snippetVersion:

This optional parameter does not need to be specified as it will default to the latest Hotjar Snippet version. Currently, it will default to `version 6`.

```js 
snippetVersion: 6 
```

#### isProduction:

If you would like to disable or enable tracking pass in either `true` or `false`. It is advised to bind your Node ENV. This is an optional parameter and will default to true if not specified.

```js 
isProduction: true 
```

### Full Example

```js
import Vue from 'vue'
import Hotjar from 'vue-hotjar'

Vue.use(Hotjar, {
    id: 'XXXXXXX',
    snippetVersion: 6,
    isProduction: true 
})
```

### Verify Installation

In order to verify your installation in a production environment or whenever the `isProduction` parameter is set to `true`, you can simply navigate to the below URL. If the installation is successful you should see a notification appear on your website indicating that Hotjar is receiving data and your implementation is successful.

```https://[BASE-URL]/?hjVerifyInstall=[TRACKING-ID]```

Additionally you can verify the install by logging in to insights.hotjar.com and viewing the tracking status.


### Supported Vue Versions

* Vue ^3.0.0

* Vue ^4.0.0


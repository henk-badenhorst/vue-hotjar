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
    <img src="https://img.shields.io/npm/dt/vue-hotjar.svg"> 
  </span>
  &nbsp; 
  <span>
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg">
  </span>
</p>

# Vue Hotjar

This is a VueJs plugin that will allow you to easily add Hotjar to any Vue project. Some key benefits allow you to activate or deactivate tracking based on the environment and in some more advanced use cases you have access to `$hj`. This is a global property that gives you access to the [identify API](https://help.hotjar.com/hc/en-us/articles/360034216634-Hotjar-JavaScript-Functions-Reference) and [other functions](https://help.hotjar.com/hc/en-us/articles/360033640653) to pass data to Hotjar.

## Install

```bash
npm install vue-hotjar
```

Start using it in your Vue application.

```js
import Vue from 'vue'
import Hotjar from 'vue-hotjar'

Vue.use (Hotjar, {
  id: 'XXXXXXX' // Hotjar Site ID
})
```

### Parameters

#### Id:

Your Hotjar Site ID is a required parameter. You can find this ID at insights.hotjar.com under tracking.

```js 
id: 'XXXXXXX' 
```

#### isProduction:

If you would like to disable or enable tracking, pass in either `true` or `false`. It is advised to bind your Node ENV variable. This is an optional parameter and will default to true if not specified.

```js 
isProduction: true 
```

#### snippetVersion:

This optional parameter does not need to be specified as it will default to the latest Hotjar Snippet version. Currently, it will default to `version 6`.

```js 
snippetVersion: 6 
```

### Full Example

```js
import Vue from 'vue'
import Hotjar from 'vue-hotjar'

Vue.use (Hotjar, {
  id: 'XXXXXXX',
  isProduction: true,
  snippetVersion: 6
})
```

## Verify Installation

In order to verify your installation in a production environment or whenever the `isProduction` parameter is set to `true`, you can simply navigate to the below URL. If the installation is successful you should see a notification appear on your website indicating that Hotjar is receiving data and your implementation is successful.

```https://<YOUR-BASE-URL>/?hjVerifyInstall=<YOUR-SITE-ID>```

Additionally you can verify the install by logging in to insights.hotjar.com and view the tracking status.

## HotJar API

instead of accessing HotJar through `window.hj` you can simply interact with the API via the a Vue global property `$hj`. 

__Important To Note:__ 

* The global property `$hj` will return `false` if `isProduction` is set to `false`. Thus it is required to wrap your method in a simple if statement as per the examples below.

* This functionality is only available if your Vue version is 2.x.x. For Vue Next users this is disabled for compatibility.

### Track Changes Manually
```js
if (this.$hj) {
  this.$hj('stateChange', '/your/url/here')
}
```

### Virtual Page View
```js
if (this.$hj) {
  this.$hj('vpv', 'funnel-step-one')
}
```

### Identify API *(Business Plan)*
```js
if (this.$hj) {
  this.$hj('identify', userId, {
    email: 'hello@coffeeshop.com',
    purchase_amount: 500,
    ab_test: 'variant-A',
  })
}
```

## Supported Vue Versions

* Vue ^2.0.0 is fully supported.

* Vue ^3.0.0 is partially supported. TypeScript users will experience issues with typings due to the interface updates in Vue Next.


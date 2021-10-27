// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()
import 'bootstrap/dist/js/bootstrap'

import Vue from 'vue/dist/vue.esm'
import App from '../app.vue'

document.addEventListener('turbolinks:load', function() {
let element = document.querySelector("#boards")
    const app = new Vue({
        el: element,
        data: {
            lists: JSON.parse(element.dataset.lists)
        },
        template: "<App :original_lists='lists' />",
        components: { App }
    })
});

//document.addEventListener('DOMContentLoaded', () => {
  //  const app = new Vue({
      //  render: h => h(App)
   // }).$mount()
    //document.body.appendChild(app.$el)

    //console.log(app)
//})


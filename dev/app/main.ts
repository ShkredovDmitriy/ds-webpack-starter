import "~/common/scss/main.scss";

import Vue from "vue";
//@ts-ignore
import Test from "~/components/vue/test.vue";

import log from "~/app/_helpers/log";

log("TEST TITLE", "Test body");

Vue.component("test", Test);
new Vue({
  el: "#vue-component",
  data: {}
});

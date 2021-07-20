import Vue from 'vue'
import App from './App'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import 'font-awesome/css/font-awesome.css'
import * as VueGoogleMaps from 'vue2-google-maps'
Vue.use(BootstrapVue)
Vue.use(IconsPlugin);
Vue.config.productionTip = false
Vue.use(VueGoogleMaps, {
    load: {
        key: 'AIzaSyCsQVYmIpdEw1rRqHvAK9L1iMp1wFNdAjw',
        libraries: 'places',
    }
});

new Vue({
    el: '#app',
    router,
    components: { App },
    template: '<App/>'
})
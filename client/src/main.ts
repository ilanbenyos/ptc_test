import Vue from 'vue'
import App from './App.vue'
import router from './router'
import * as VueGoogleMaps from 'vue2-google-maps';




const NewApiKey = 'AIzaSyAgbT9Cd7gfLzpiA60_x7bCN9nP1myVwxg';



Vue.use(VueGoogleMaps, {
    load: {
        key: NewApiKey,
        v: '3',
        libraries: 'geometry,places'
    }
});



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import VueApollo from 'vue-apollo'
import { setContext } from "apollo-link-context";

import 'vuetify/dist/vuetify.min.css'
Vue.use(Vuetify);
Vue.use(VueApollo);

Vue.config.productionTip = false

const httpLink = new HttpLink({
  uri: `http://localhost:3000/graphql`
});

const middlewareLink = setContext(() => ({
  headers: {
    authToken: window.localStorage.getItem('authToken') || null
  }
}));

const link = middlewareLink.concat(httpLink);

const apolloClient = new ApolloClient({
  link,
  cache: new InMemoryCache(),
  connectToDevTools: true
});

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});
/* eslint-disable no-new */
new Vue({
  provide: apolloProvider.provide(),
  router,
  store,
  components: { App },
  template: '<App/>'
}).$mount('#app');

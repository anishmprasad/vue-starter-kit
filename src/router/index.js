import VueRouter from "vue-router";
import Vue from "vue";

const Counter = () =>
  import(/* webpackChunkName: "counter" */ "../pages/Counter/index.vue");
const HelloWorld = () =>
  import(/* webpackChunkName: "helloworld" */ "../pages/HelloWorld.vue");

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Counter },
    // Just use them normally in the route config
    { path: "/counter", component: Counter },
    { path: "/helloworld", component: HelloWorld },
    // multiple parameters, `/` should not be encoded. The name is also important
    // https://github.com/vuejs/vue-router/issues/2719
    {
      path: "/a/:tags*",
      name: "tagged",
      component: () =>
        new Promise(resolve => {
          setTimeout(() => {
            resolve({
              template: `<div>
              <h2>Lazy with params</h2>
              <pre id="tagged-path">{{ $route.path }}</pre>
            </div>`
            });
          }, 200);
        })
    },
    // Bar and Baz belong to the same root route
    // and grouped in the same async chunk.
    {
      path: "/bar",
      component: Counter,
      children: [{ path: "baz", component: Counter }]
    }
  ]
});

export default router;

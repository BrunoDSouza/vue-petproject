import Vue from 'vue'
import Router from 'vue-router'
import routes from '@/router/routes'
import store from '@/vuex'

Vue.use(Router)

const router = new Router({ routes, linkActiveClass: 'active' })

router.beforeEach((to, from, next) => {
  if (to.path.indexOf('/auth') === -1) {
    if (store.getters.isLogged) next()
    else next('/auth')

    return
  }

  next()
})

export default router

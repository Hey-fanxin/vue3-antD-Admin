import { App } from "vue";
import { createRouter, createWebHistory } from "vue-router"
import { baseRouters } from "./routers"
import nprogress from "nprogress"
import 'nprogress/nprogress.css'

const whites = ['/login', '/register', '/error']

const router = createRouter({
  history: createWebHistory('/'),
  routes: baseRouters
})

export const useRouter = (app: App) => {
  app.use(router)
  router.beforeEach((to, from, next) => {
    nprogress.start()
    if(to.path == '/'){
      next({...to, path: whites[0]})
    }
    next()
  })

  router.afterEach(() => {
    nprogress.done()
  })
}
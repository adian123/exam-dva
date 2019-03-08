import app from "../app"
import dynamic from "dva/dynamic"
const routes = [{
  path: "/",
  component: dynamic({
    app,
    model: [() => import('../models/login')],
    component: () => import('../containers/login/index')
  })
}, {
  path: "/home",
  component: dynamic({
    app,
    component: () => import('../containers/home/index')
  })
}]
export default routes;
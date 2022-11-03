import { createRouter, createWebHashHistory } from 'vue-router'
import HomepageView from '../views/HomepageView.vue'
import MenuPageView from '../views/MenuPageView.vue'
import AddNewView from '../views/AddNewView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import OrdersView from '../views/OrdersView.vue'
import ViewOrderDetails from '../views/ViewOrderDetails.vue'
import OrderEditView from '../views/OrderEditView.vue'
import OrderStatusView from '../views/OrderStatusView.vue'
import {getAuth, onAuthStateChanged} from 'firebase/auth'

const routes = [
  {
    path: '/',
    name: 'homepage',
    component: HomepageView
  },
  {
    path: '/menu',
    name: 'menu',
    component: MenuPageView
  },
  {
    path: '/add',
    name: 'add',
    component: AddNewView,
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,   
  },
  {
    path: '/register',
    name: 'register',
    component: RegisterView,   
  },
  {
    path: '/orders',
    name: 'orders',
    component: OrdersView,  
    meta: { requiresAuth: true } 
  },
  {
    path: '/orders/:status',
    name: 'status',
    component: OrderStatusView,  
    meta: { requiresAuth: true } 
  },
  {
    path: '/view/:id',
    name: 'view',
    component: ViewOrderDetails,  
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: OrderEditView,
  },
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeEventListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeEventListener();
        resolve(user);
      },
      reject
    )
  })
}

router.beforeEach(async(to, from, next) => {
  const requiresAUth = to.matched.some((record) => record.meta.requiresAuth);
  if(requiresAUth){
    const user = await getCurrentUser();
    if(!user){
      next({
        name: 'login'
      })
    } else {
      next();
    }
  } else {
    next();
  }
})

export default router


import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Home from '@/components/Home'
import Register from '@/components/Register'
import Checkitem from '@/components/Checkitem'
import Transaction from '@/components/Transaction'
import FormBooking from '@/components/FormBooking'

Vue.use(Router)
const routes = [{
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/register',
        name: 'Register',
        component: Register
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/checkitem',
        name: 'Checkitem',
        component: Checkitem
    },
    {
        path: '/transaction',
        name: 'Transaction',
        component: Transaction
    },
    {
        path: '/formBooking',
        name: 'FormBooking',
        component: FormBooking
    },
]

const router = new Router({
    routes
})

router.beforeEach((to, from, next) => {
    const user = localStorage.getItem("username")
    if (to.name !== 'Login' && to.name !== 'Register' && to.name !== 'Home' && !user) {
        alert("Silahkan login untuk melakukan transaksi")
        next({ name: 'Login' })
    } else next()
})

export default router
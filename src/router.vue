<script>
import VueRouter from 'vue-router'
import Home from './pages/home.vue'
import SelectUser from './pages/select-user.vue'
import Order from './pages/order.vue'

const routes = [
    {
        path: '/',
        redirect: 'home',
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/select-user',
        name: 'select-user',
        component: SelectUser
    },
    {
        path: '/order',
        name: 'order',
        component: Order
    }
];

const router  = new VueRouter({
    routes 
});

export default router;
</script>
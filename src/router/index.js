import { createRouter, createWebHistory } from 'vue-router';


const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
        path: '/contador',
        name: 'contador',
        component: () => import('../components/Contador.vue')
    },
    {
        path: '/lista-de-tareas',
        name: 'ListaDeTareas',
        component: () => import('../components/ListaDeTareas.vue')
    }
  ]
});

export default router;

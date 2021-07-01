import Vue from 'vue'
import VueRouter from 'vue-router'

import FormularioAv from './componentes/FormularioAv/index.vue'
import Usuarios from './componentes/Usuarios.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect:'/formularioav' },
        { path: '/formularioav', component: FormularioAv },
        { path: '/usuarios', component: Usuarios}
    ]
})
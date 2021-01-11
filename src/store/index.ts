import Vue from 'vue'
import Vuex from 'vuex'
import { Categoria } from '@/classes/Categoria'
import { LogDiario } from '@/classes/LogDiario'
import { Ingreso } from '@/classes/Ingreso'
import Axios from 'axios'
import { Estado } from '@/classes/Estado'

Vue.use(Vuex)

export default new Vuex.Store({
  state: new Estado(),
  getters: {
    CATS: state => state.cats,
    LOGS: state => state.logs,
    INGS: state => state.ings
  },
  mutations: {
    formLog: (state) => {
      state.currentForm = 'log'
      state.form = true
    },
    formCat: (state) => {
      state.currentForm = 'cat'
      state.form = true
    },
    back: (state) => {
      state.currentForm = ''
      state.form = false
    },
    setFormDataCat: (state, formData: Categoria) => {
      state.catFormData = { ...formData }
    },
    setFormDataLog: (state, formData: LogDiario) => {
      state.logFormData = { ...formData }
    },
    setFormDataIng: (state, formData: Ingreso) => {
      state.ingFormData = { ...formData }
    },
    setCats: (state, categorias: Categoria[]) => {
      state.cats = [...categorias]
    },
    setIngs: (state, ings: Ingreso[]) => {
      state.ings = [...ings]
    },
    setLogs: (state, logs: LogDiario[]) => {
      state.logs = [...logs]
    }
  },
  actions: {
    getCats: async context => {
      const result = await Axios.get(`${process.env.BACKEND_URL}/categoria`)
      if (result.status === 200) {
        context.dispatch('setCats', result.data)
      }
    },
    getLogs: async (context, range: [Date, Date]) => {
      const result = await Axios.get(`${process.env.BACKEND_URL}/log/range?inicio=${encodeURI(range[0].toISOString())}&fin=${encodeURI(range[1].toISOString())}`)
      if (result.status === 200) {
        context.dispatch('setLogs', result.data)
      }
    }
  },
  modules: {
  }
})

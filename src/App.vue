<template lang="pug">
  v-app
    v-app-bar(app color="primary" dark)
      v-btn(icon v-if="this.$store.state.form" @click="backCalendar()")
        v-icon mdi-keyboard-backspace
      v-spacer
      v-btn(icon v-if="!this.$store.state.form" @click="setFormLog()")
        v-icon mdi-calendar-plus
      v-btn(icon v-if="!this.$store.state.form" @click="setFormCat()")
        v-icon mdi-view-grid-plus
      v-btn(icon v-if="this.$store.state.form" @click="commit()")
        v-icon mdi-check
    v-main
      v-card(elevation="2")
        v-card-title Kakebo
        v-divider.mx-4
        Calendar(v-if="this.$store.state.currentForm === ''" transition="scroll-x-transition")
        Cat(v-if="this.$store.state.currentForm === 'log'" transition="scroll-x-transition")
        Log(v-if="this.$store.state.currentForm === 'cat'" transition="scroll-x-transition")
</template>

<script lang="ts">
import Vue from 'vue'
// @ts-ignore
import { Calendar } from 'vue-sweet-calendar'
import Cat from './components/Cat.vue'
import Log from './components/Log.vue'
import 'vue-sweet-calendar/dist/SweetCalendar.css'

export default Vue.extend({
  name: 'App',
  components: {
    Calendar,
    Cat,
    Log
  },
  data: () => ({}),
  methods: {
    setFormLog () {
      this.$store.commit('formLog')
    },
    setFormCat () {
      this.$store.commit('formCat')
    },
    backCalendar () {
      this.$store.commit('back')
    },
    commit () {
      // TODO: SEND
    }
  }
})
</script>

<template lang="pug">
v-form(v-model="valid")
  h3 Agregar Categoria
  v-container
    v-text-field(v-model="name" :counter="10" label="Name" :rules="nameRules" required)
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Cat',
  data: () => ({
    valid: false,
    name: '',
    nameRules: [
      (v: string) => !!v || 'Name is required',
      (v: string) => v.length <= 10 || 'Name must be less than 10 characters'
    ]
  }),
  methods: {
    submit () {
      this.$store.commit('setFormData', { name })
    }
  }
})
</script>

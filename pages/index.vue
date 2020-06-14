<template>
  <div>
    <div>Count: {{ count }} <span v-if="isDefault">default</span></div>
    <button @click="increment">Increment</button>
    <button @click="incrementAsync">IncrementAsync</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { getSampleModule } from '~/store'

@Component
export default class IndexPage extends Vue {
  get count(): number {
    return getSampleModule(this.$store).count
  }

  get isDefault(): boolean {
    return getSampleModule(this.$store).isDefault
  }

  increment() {
    getSampleModule(this.$store).increment()
  }

  incrementAsync() {
    getSampleModule(this.$store).incrementAsync()
  }
}
</script>

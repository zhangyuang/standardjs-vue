<template>
  <div>
    <div :class="my" @click="my">
      123
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      my: 'my'
    }
  },
  methods: {
    foo () {
      const bar = 'bar'
    }
  }
}
</script>

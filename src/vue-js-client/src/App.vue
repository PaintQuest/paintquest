<template>
  <div id="app">
    <!--<hello></hello>-->
    <sketch></sketch>
  </div>
</template>

<script>
import Hello from './components/Hello.vue'
import Paint from './components/Paint.vue'

export default {
  name: 'app',
  components: {
    Paint
  }
}
</script>

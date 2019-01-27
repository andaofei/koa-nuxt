<template>
  <div>
    <ul>
      <!--<li v-for="(item, index) in $store.state.navbar.navdata" :key="index">-->
      <li v-for="(item, index) in list" :key="index">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  layout: 'seach',
  data() {
    return {
      list: []
    }
  },
  async asyncData() {
    const {status, data: {list}} = await axios.get('./city/list')
    console.log(list, 'list')
    if (status === 200) {
      return {
        list
      }
    }
  }
}
</script>

<style scoped>
</style>

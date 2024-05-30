<template>
  <main class="main">
    <Search />
    <h2 class="error" v-if="error != ''">{{ error }}</h2>
    <User />
    <Repos />
  </main>
</template>

<script>
import Search from './Search.vue'
import User from './User.vue'
import { mapState } from 'vuex';
import Repos from './Repos.vue';
export default {
  components: { Search, User, Repos },
  computed: {
    ...mapState(['error'])
  }
}
</script>

<style>

</style>
<template>
  <div class="search">
    <div class="search-box">
      <input
        type="text"
        placeholder="Введите имя пользователя"
        @keydown.enter="getUserInfo"
        v-model="search"
      />
      <img src="@/assets/img/close.jpg" alt="img" @click="clear" />
    </div>
    <button @click="getUserInfo">НАЙТИ</button>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      search: "",
    };
  },
  methods: {
    ...mapMutations(["clearInfo"]),
    ...mapActions(["userInfo"]),
    getUserInfo() {
      this.userInfo(this.search);
    },
    clear() {
      this.search = "";
      this.clearInfo()
      this.getReposSort = null
    },
  },
  computed: {
    ...mapGetters(['getReposSort'])
  }
};
</script>

<style lang="scss">
</style>
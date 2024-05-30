<template>
  <div class="sort">
    <h2>Сортировка</h2>
    <div class="sort-box">
      <button
        v-for="(btn, index) in btns"
        :key="index"
        :class="{ active: isActive == index }"
        @click="sortRepos(index, btn.sortType)"
      >
        {{ btn.name }}
      </button>
    </div>
  </div>
  <div class="repos">
    <div class="repos-item" v-for="repos in getReposSort" :key="repos.id">
      <div class="repos-item-left">
        <h3>{{ repos.name }}</h3>
        <p>Кол-во звезд: {{ repos.stargazers_count }}</p>
        <p>
          Дата добавления: {{ new Date(repos.created_at).toLocaleDateString() }}
        </p>
      </div>
      <a :href="repos.html_url">Посетить</a>
    </div>
  </div>
</template>

<script>
import {mapMutations, mapGetters } from "vuex";
export default {
  data() {
    return {
      isActive: 0,
      btns: [
        { name: "ИМЯ", sortType: "name" },
        { name: "ЗВЕЗДЫ", sortType: "stargazers_count" },
        { name: "ДАТА", sortType: "created_at" },
      ],
    };
  },
  methods: {
    ...mapMutations(["sort"]),
    sortRepos(index, sortType) {
      this.isActive = index;
      this.sort(sortType);
    },
  },
  computed: {
    ...mapGetters(["getReposSort"]),
  },
};
</script>

<style lang="scss">
</style>
<template>
  <div class="user" v-if="user">
    <div class="user-left">
      <img :src="user.avatar_url" alt="alt" />
      <a :href="user.html_url">Посетить</a>
    </div>
    <div class="user-right">
      <p>{{ user.login }}</p>
      <p>
        Репозиториев: <span>{{ user.public_repos }}</span>
      </p>
      <p>
        Создан: <span>{{ new Date(user.created_at).toLocaleDateString() }}</span>
      </p>
      <p>
        Подписщиков: <span>{{ user.followers }}</span>
      </p>
      <p>
        Подписок: <span>{{ user.following }}</span>
      </p>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["user"]),
  }
};
</script>

<style lang="scss">
img {
  width: 200px;
  height: 200px;
}
</style>
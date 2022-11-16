<script setup lang="ts">
import { ref } from "vue";
import { useTestStore } from "~~/stores/index";

const testStore = useTestStore();

interface NavItemTypes {
  title: string;
  hasChild: boolean;
}

const navItems = ref<NavItemTypes[]>([
  {
    title: "Features",
    hasChild: true,
  },
  {
    title: "Solutions",
    hasChild: true,
  },
  {
    title: "Plans",
    hasChild: true,
  },
  {
    title: "Pricing",
    hasChild: false,
  },
  {
    title: "Resources",
    hasChild: true,
  },
]);
</script>

<template>
  <div class="top-navbar d-flex align-items-center justify-content-between">
    <div class="container">
      <div class="top-navbar__items d-flex">
        <img src="@/assets/images/logo.svg" alt="logo" class="p-3" />
        <div
          v-for="(item, index) in navItems"
          :key="index"
          class="top-navbar__item p-3"
        >
          {{ item.title }}
          <font-awesome-icon
            icon="fas-solid fa-arrow-down"
            v-if="item.hasChild"
          />
        </div>
      </div>
      <div></div>
    </div>

    <h1>{{ testStore.message }}</h1>
  </div>
</template>

<style scoped>
.top-navbar {
  /* height: 60px;
  background-color: rgb(255, 255, 255);
  &__items {
    img {
      cursor: pointer;
    }
  }
  &__item {
    cursor: pointer !important;
  }

  &:hover {
    box-shadow: rgb(9 30 66 / 15%) 0px 0.5rem 1rem 0px;
  } */
}
</style>

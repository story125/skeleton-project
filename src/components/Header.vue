<template>
  <nav class="navbar navbar-expand-sm">
    <div class="container-fluid d-flex align-items-center justify-content-between">
      <router-link
        class="navbar-brand d-flex align-items-center text-decoration-none"
        :to="{ name: 'home' }"
      >
        <font-awesome-icon style="font-size: 60px" :icon="['fas', 'piggy-bank']" />
        <span class="text-white fw-bold ms-2">돈셈이</span>
      </router-link>

      <div class="flex-grow-0">
        <ul class="navbar-nav justify-content-center d-flex">
          <li class="nav-item px-3">
            <router-link
              class="nav-link"
              :class="
                $route.name === 'home' ? 'text-white fw-bold' : 'text-white fw-bold text-opacity-50'
              "
              :to="{ name: 'home' }"
            >
              홈
            </router-link>
          </li>
          <li class="nav-item px-3">
            <router-link
              class="nav-link"
              :class="
                $route.name === 'transaction-history'
                  ? 'text-white fw-bold'
                  : 'text-white fw-bold text-opacity-50'
              "
              :to="{ name: 'transaction-history' }"
            >
              상세내역
            </router-link>
          </li>
        </ul>
      </div>

      <div class="d-flex align-items-center">
        <font-awesome-icon class="me-2" style="font-size: 60px" :icon="['far', 'circle-user']" />
      </div>
    </div>
  </nav>
</template>

<script setup></script>

<style scoped>
nav {
  width: 1440px;
  height: 105px;
  background-color: #f44f42;
}
.navbar-brand {
  font-size: 30px;
}

.nav-link {
  font-size: 26px;
}
</style>

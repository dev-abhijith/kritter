<template>
  <q-layout view="lHh lpR fff">

    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class=" text-weight-bold">
          <span class="gt-sm">{{$route.name}}</span>
          <q-icon 
            name="flutter_dash"
            size="md"
            color="primary"
            class="q-pa-md lt-md header-icon"
          />
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered :width="283">
      <q-icon 
        name="flutter_dash"
        size="lg"
        color="primary"
        class="q-pa-md"
        />
        <q-list>
          <q-item to="/" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon name="home" size="md"/>
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
          </q-item>

          <q-item to="/about" clickable v-ripple exact>
            <q-item-section avatar>
              <q-icon  name="help" size="md"/>
            </q-item-section>
            <q-item-section class="text-h6 text-weight-bold">About</q-item-section>
          </q-item>
        </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right" bordered>
      <q-input color="primary" placeholder="Search Kritter" class="q-ma-md" outlined rounded dense>
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list padding>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline>EDUCATION</q-item-label>
            <q-item-label>The education industry</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline>MARKETS</q-item-label>
            <q-item-label>Whats trending</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline>POLITICS</q-item-label>
            <q-item-label>The great hoax</q-item-label>
            <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit elit.</q-item-label>
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <keep-alive>
        <router-view />
      </keep-alive>
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)
    const rightDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },

      rightDrawerOpen,
      toggleRightDrawer () {
        rightDrawerOpen.value = !rightDrawerOpen.value
      }
    }
  }
}
</script>

<style lang="sass">
.header-icon
  position: absolute
  bottom: 0
  left: 50%
  transform: translateX(-50%)
</style>
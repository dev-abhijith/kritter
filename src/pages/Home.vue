<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute full-width full-height">
      <div
        class="q-pa-lg row items-end q-col-gutter-md"
        style="max-width: 40rem"
      >
        <div class="col">
          <q-input
            bottom-slots
            v-model="newKritContent"
            placeholder="Whats happening?"
            counter
            maxlength="280"
            class="newKrit"
            autogrow
          >
            <template v-slot:before>
              <q-avatar size="xl">
                <img src="https://cdn.quasar.dev/img/avatar5.jpg" />
              </q-avatar>
            </template>
          </q-input>
        </div>
        <div class="col col-shrink">
          <q-btn
            unelevated
            rounded
            color="primary"
            label="Krit"
            no-caps
            :disable="!newKritContent"
            class="q-mb-lg"
            @click="addNewKrit"
          />
        </div>
      </div>
      <q-separator color="grey-2" size="10px" class="divider" />
      <div class="q-py-md">
        <q-list>
          <transition-group
            appear
            enter-active-class="animated fadeIn slow"
            leave-active-class="animated fadeOut"
          >
            <q-item class="q-py-md krit" v-for="krit in krits" :key="krit.id">
              <q-item-section avatar top>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar1.jpg" />
                </q-avatar>
              </q-item-section>
              <q-item-section>
                <q-item-label class="text-subtitle1">
                  <strong>Abhi </strong>
                  <span class="text-grey-7"
                    >@abhi <br class="lt-md" />
                    &bull; {{ relativeDate(krit.date) }}
                  </span>
                </q-item-label>
                <q-item-label class="text-body2">
                  <pre class="krit-content">
                {{ krit.content }}
              </pre
                  >
                </q-item-label>
                <div class="row q-mt-sm justify-between">
                  <q-btn
                    color="grey"
                    icon="far fa-comment"
                    flat
                    round
                    size="10px"
                  />
                  <q-btn
                    color="grey"
                    icon="fas fa-retweet"
                    flat
                    round
                    size="10px"
                  />
                  <q-btn
                    color="grey"
                    icon="far fa-heart"
                    flat
                    round
                    size="10px"
                  />
                  <q-btn
                    color="grey"
                    icon="fas fa-trash"
                    flat
                    round
                    size="10px"
                    @click="deleteKrit(krit)"
                  />
                </div>
              </q-item-section>
            </q-item>
          </transition-group>
        </q-list>
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { collection, onSnapshot, addDoc, deleteDoc, query, where, doc } from 'firebase/firestore'
 
import db from "src/boot/firebase";

import { formatDistance } from "date-fns";

export default {
  name: "Home",
  data() {
    return {
      newKritContent: "",
      krits: [],
    };
  },
  methods: {
    relativeDate(value) {
      return formatDistance(value, new Date());
    },
    addNewKrit() {
      const docRef = collection(db,'krits')
      addDoc(docRef, {
        content: this.newKritContent,
        date: Date.now()
      })
      this.newKritContent = "";
      console.log(this.krits)
    },
    deleteKrit(krit) {
      deleteDoc(doc(db, 'krits', krit.id))
    },
  },
  mounted() {
    const colRef = collection(db, 'krits')

    onSnapshot(colRef, (snapshot) => {
      this.krits = []
      snapshot.docs.forEach((doc) => {
        this.krits.unshift({ ...doc.data(), id: doc.id })
      })
    })
  },
};

</script>

<style lang="sass" >
.newKrit
  textarea
    font-size: 19px
    line-height: 1.4 !important

.divider
  border-top: 1px solid
  border-bottom: 1px solid
  border-color: $grey-4

.krit-content
  white-space: pre-line
  font-family: roboto
  line-height: 1.4

.krit:not(:first-child)
  border-top: 1px solid $grey-4
</style>

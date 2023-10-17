<template >
  <div class="coffee-view mt-4 container-fluid">
      <h4>Cà Phê cùng LILY</h4>
      <div class="sections row">
          <template v-for="(diamond, index) in diamonds" :key="index">

              <div v-if="diamond.typeOf == 'coffee'" class="card  mx-2 my-2" style="width: 14.8rem;">
                  <router-link :to="'/diamond/' + diamond._id">
                      <img class="card-img-top img-fluid" :src="path + diamond.image" alt="Card image cap">
                  </router-link>
                  <div class="card-body">
                      <h5 class="card-title">{{ diamond.name }}</h5>
                      <p class="card-text">{{ diamond.price }}</p>
                  </div>
              </div>

          </template>

      </div>

  </div>
</template>
<script>
import axios from 'axios';
import staticPath from '../assets/staticPath/index';

export default {
  data() {
      return {
          diamonds: []
      };
  },

  computed: {
      path() {
          return staticPath;
      }
  },

  created() {
      axios.get("http://localhost:3000/diamond")
          .then(res => {
              this.diamonds = res.data.diamonds;
          })
          .catch(err => {
              console.log(err);
          });
  },
}
</script>
<style scoped></style>
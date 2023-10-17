<template>
  <div class="home-view mt-4 container-fluid" >
      <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100 h-60"  src="https://file.hstatic.net/1000381168/collection/web-3_7d7345db617845e3a434d730f95ea6d9.png" alt="First slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100"  src="https://file.hstatic.net/1000381168/collection/kc-gia_554e959de61f48c7870af62028ee572e.png" alt="Second slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://file.hstatic.net/1000381168/file/slide-4_39c1b3b42ede456face3e40e1cb58218.png" alt="Third slide">
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" src="https://file.hstatic.net/1000381168/file/slide-3_6c1af2f5981a4ddfb31d32196d470640.png" alt="Four slide">
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
      <h4>Diamond</h4>
      <div class="sections row">
          <template v-for="(diamond, index) in diamonds" :key="index">
              <div v-if="index < 20" class="card mx-2 my-2" style="width: 14.8rem;">
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
      axios.get("http://localhost:3000/")
          .then(res => {
              this.diamonds = res.data.diamonds;
              console.log(this.diamonds);
          })
          .catch(err => {
              console.log(err);
          });
  },
}
</script>
<style scoped>
.home-view {
  margin-top: 4rem;
  padding: 0;
}

.carousel {
  width: 100%;
}

.carousel-inner {
  text-align: center;
}

.carousel-item img {
  height: auto;
  width: 100%;
}

h4 {
  font-size: 1.5rem;
  margin: 1rem 0;
}

.sections {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.card {
  width: 14.8rem;
  margin: 0.5rem;
}

.card-img-top {
  max-width: 100%;
  height: auto;
}

.card-title {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.card-text {
  font-size: 1rem;
  margin: 0;
}

</style>

<template>
    <div class="home-view mt-4 container-fluid">
        <h4>Diamond</h4>
        <div class="sections row">
            <template v-for="(diamond, index) in diamonds" :key="index">

                <div v-if="index < 20" class="card  mx-2 my-2" style="width: 14.8rem;">
                    <router-link :to="'/diamond/' + beverage._id">
                        <img class="card-img-top img-fluid" :src="path + beverage.image" alt="Card image cap">
                    </router-link>
                    <div class="card-body">
                        <h5 class="card-title">{{ beverage.name }}</h5>
                        <p class="card-text">{{ beverage.price }}</p>
                    </div>
                </div>

            </template>

        </div>

    </div>
  
</template>
  
  <script>
  
  export default {
    data(){
      return{
        
      }
    }
  }
  </script>
  
  <style scoped>
  </style>
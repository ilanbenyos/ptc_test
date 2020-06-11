<template>
  <div class="home container">
    <MapCmp :locations="locations"/>
    <div class="form-group my-3">
      <input type="email" class="form-control" v-model="searchStr">
    </div>
    <footer>
      <button type="button" class="btn btn-primary" @click="getData" >Search!</button>
    </footer>
    <transition name="fade">
        <div class="overlay" v-if="isOverlay">
          <div class="spinner-border" role="status">
            <span class="sr-only">Loading...</span>
          </div>
        </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { IRecord, ILocation } from './../dataModels/IApiCall'
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import MapCmp from '../components/map.vue';

export default Vue.extend({
  name: 'Home' as string,
  components:{MapCmp},
  data() {
    return {
      locations: [] as IRecord[],
      searchStr:'pizza Rome' as string,
      isOverlay:false as boolean,
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    async getData(){
      try{
        this.isOverlay = true;
        const { data:locations}:{data: IRecord[]} = await axios.get('http://localhost:3000/',{params:{query:this.searchStr}});        
        this.locations= locations;
      }catch(err){
        console.error(err);
      }finally{
        this.isOverlay = false;
      }
    }
  }

})
</script>
<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .4s;
        opacity: 1;

  }
  .fade-enter, .fade-leave-to {
    opacity: 0;
  }
  .overlay{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color:  rgba(0, 0, 0, 0.46);
  }
</style>

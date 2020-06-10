<template>
  <div class="home container">
    <MapCmp :locations="locations" v-if="locations && locations.length >0" />

    <div class="form-group">
      <input type="email" class="form-control" v-model="searchStr">
    </div>
    <footer class="mb-3">
      <button type="button" class="btn btn-primary" @click="getData" >Search!</button>
    </footer>
    <ul class="list-group">
      <li class="list-group-item" v-for="(item, idx) in locations" :key="idx">{{item}}</li>
    </ul>
  </div>
</template>

<script lang="ts">
import { IApiCall, IRecord, ILocation, IPaging, ILoc } from './../dataModels/IApiCall'
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';
import MapCmp from '../components/map.vue';



  export default Vue.extend({
    name: 'Home' as string,
    components:{MapCmp},
    data() {
      return {
        FBToken:'EAAMdjmZCduS0BAAESLyn6ZA5GNRZBvnlph2VZBnqFn5a1SmgHqdVZBPZA78lg70jY1f4LMiW2EhSegziZCOIpE2uofP0QA6RVeehh3hZCsdaGmBk3pcpAC5knwsLZBWxIZC7hFEzqS5kaz5FYPUxy11usZAmWGxufio8O1vHQkdLwUq01gUbMZA5YldZB' as string,
        locations: [] as IRecord[],
        searchStr:'facebook' as string,
        nextPage :''  as string,
        previousPage :'' as string,
      }
    },
    computed:{

    },
    methods:{
      async getData(){
        const url:string = `https://graph.facebook.com/search?type=place&q=${this.searchStr}
          &fields=id,name,location,link
          &access_token=${this.FBToken}`
        const {data: apiCall}:{data:any,apiCall:IApiCall} = await axios.get(url);
        this.locations= apiCall.data;
        if(apiCall.paging){
          this.nextPage= apiCall.paging.next || '' ;
          this.previousPage= apiCall.paging.previous || '' ;
        }else{
          this.nextPage= '';
          this.previousPage= '';
        }
      }
    }

})
</script>




// import { IApiCall, IRecord, ILocation, IPaging, ILoc } from './../dataModels/IApiCall'
// import { Component, Prop, Vue } from 'vue-property-decorator';
// import axios from 'axios';
// import MapCmp from '../components/map.vue';


// @Component({
//   components: { MapCmp }
// })
// export default class Home extends Vue {

//   private FBToken:string ='EAAMdjmZCduS0BAAESLyn6ZA5GNRZBvnlph2VZBnqFn5a1SmgHqdVZBPZA78lg70jY1f4LMiW2EhSegziZCOIpE2uofP0QA6RVeehh3hZCsdaGmBk3pcpAC5knwsLZBWxIZC7hFEzqS5kaz5FYPUxy11usZAmWGxufio8O1vHQkdLwUq01gUbMZA5YldZB'
//   private locations:IRecord[]= [];
//   private searchStr :string='facebook';
//   private nextPage :string='';
//   private previousPage :string='';

//   async getData(){
//     const url:string = `https://graph.facebook.com/search?type=place&q=${this.searchStr}
//       &fields=id,name,location,link
//       &access_token=${this.FBToken}`
//     const {data: apiCall}:{data:any,apiCall:IApiCall} = await axios.get(url);
//     this.locations= apiCall.data;
//     if(apiCall.paging){
//       this.nextPage= apiCall.paging.next || '' ;
//       this.previousPage= apiCall.paging.previous || '' ;
//     }else{
//       this.nextPage= '';
//       this.previousPage= '';
//     }

//   }

// }
// </script>

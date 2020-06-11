<template>
  <div class="card" style="width: 18rem;">
  <img class="card-img-top" v-if="cardData.cover" :src="cardData.cover" alt="Card image cap">
  <div class="card-body" v-if="!isPlaceEmpty">
    <p class="card-text about" v-if="cardData.about">{{cardData.about}}</p>
    <div class="card-text">{{cardData.single_line_address}}</div>
    <div class="card-text" v-if="cardData.phone" >{{cardData.phone}}</div>
    <div class="card-text d-flex" v-if="rating" >
        <span class="mr-3">{{rating}}</span>
        <div class="star" v-for="item in 5" :key="item">
            <i class="material-icons">{{getStarIcon(item)}}
            </i>
        </div>
    </div>
  </div>
  <div v-else class="p-3">
      No Data
  </div>
</div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRecord, ILocation, ILatLng, IPlaceData} from './../dataModels/IApiCall';
import axios from 'axios';

@Component
export default class Card extends Vue {
  @Prop() cardData!: IPlaceData;

    get isPlaceEmpty():boolean{
        let keys:string[] = Object.keys(this.cardData);        
        return keys.length <= 2;
    }
  getStarIcon(item):string{      
    //   star_rate star_half star_outline
    const ceil:number = Math.ceil(this.rating)
    const floor:number = Math.floor(this.rating)
    if(item> ceil) return 'star_outline';
    if(item > floor ) return 'star_half';
    return 'star_rate';
  }
  get rating():number{
      return this.cardData.overall_star_rating? this.cardData.overall_star_rating:null
  }
    get ratingInt():number{
      return Math.floor(this.rating)
  }
};
</script>

<style scoped lang="scss">
.card{
    .description{
        max-height: 14rem;
    }
}
</style>
<template>
  <div class="create-trails-map" @click="lastMapClick">
    <gmap-map
      style="height:500px"
      :center="_center"
      :zoom="12"
      ref="map">
      <div class="wrapper" >
        <GmapMarker
          :key="idx"
          v-for="(m, idx) in list"
          @click="clicked(m.id,idx,$event)"
          :position="m"
          :clickable="true">
        </GmapMarker>
      </div>
    </gmap-map>
    <div v-if="cardStyle && cardData" class="card position-absolute" :style="cardStyle">
      <card :cardData="cardData"></card>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IRecord, ILocation, ILatLng, IPlaceData} from './../dataModels/IApiCall';
import axios from 'axios';
import card from './card.vue'

@Component({
  components: {
    card
  }
})
export default class MapCmp extends Vue {
  @Prop() locations!: IRecord[];
  center={lat:32.42, lng:34.93};//someWhere in Hadera.

  cardData:IPlaceData=null;

  cardStyle:{left:string,top:string}=null;

  lastMapClick(e:MouseEvent){
    this.cardStyle={left:`${e.clientX}px`, top:`${e.clientY}px`};
    this.cardData = null;
  }
  async clicked(id:string, idx:number, e:Event){    
    const {data:cardData}:{data:IPlaceData} = await axios.get(`http://localhost:3000/${id}`);
    this.cardData=cardData
    console.log(cardData);

  }
  mapToLatLng(IRecord:IRecord):ILatLng{
    return {lat:IRecord.location.latitude, lng:IRecord.location.longitude, id:IRecord.id}   
  }
  get isLocations():boolean{
    return this.locations.length >0
  }
  get list():ILatLng[]{
    return this.isLocations ? this.locations.map(i=>this.mapToLatLng(i)): [];   
  }

  get _center(){
    return  this.isLocations ? this.mapToLatLng(this.locations[0]) : this.center;
  }
};
</script>

<style scoped lang="scss">

</style>
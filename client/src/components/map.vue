<template>
  <div class="create-trails-map">
    <gmap-map
      style="height:500px"
      :center="_center"
      :zoom="12"
      ref="map">
      <div class="wrapper">
        <GmapMarker
          :key="idx"
          v-for="(m, idx) in list"
          :position="m"
          :clickable="true">
        </GmapMarker>
      </div>
    </gmap-map>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { IApiCall, IRecord, ILocation, IPaging, ILatLng} from './../dataModels/IApiCall';

@Component
export default class MapCmp extends Vue {
  @Prop() locations!: IRecord[];
  center={lat:32.42, lng:34.93};//someWhere in Hadera.

  mapToLatLng(IRecord:IRecord):ILatLng{
    return {lat:IRecord.location.latitude, lng:IRecord.location.longitude}   
  }

  get list():ILatLng[]{
    return this.locations.map(i=>this.mapToLatLng(i))    
  }

  get _center(){
    return  this.locations ? this.mapToLatLng(this.locations[0]) : this.center;
  }
};
</script>

<style scoped lang="scss">

</style>
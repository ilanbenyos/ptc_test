<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <div class="form-group">
      <input type="email" class="form-control" v-model="searchStr">
    </div>

    <button type="button" class="btn btn-primary" @click="getData" >Search!</button>
<br>
{{locations}}
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class Home extends Vue {
    private FBToken:string ='EAAMdjmZCduS0BAAESLyn6ZA5GNRZBvnlph2VZBnqFn5a1SmgHqdVZBPZA78lg70jY1f4LMiW2EhSegziZCOIpE2uofP0QA6RVeehh3hZCsdaGmBk3pcpAC5knwsLZBWxIZC7hFEzqS5kaz5FYPUxy11usZAmWGxufio8O1vHQkdLwUq01gUbMZA5YldZB'
  private locations:any[]= [];
  private searchStr :string='facebook';

  async getData(){
    const url:string = `https://graph.facebook.com/search?type=place&q=${this.searchStr}
  &fields=id,name,location,link
  &access_token=${this.FBToken}`
    this.locations = await axios.get(url);
  }

}
</script>

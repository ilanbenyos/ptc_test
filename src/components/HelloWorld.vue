<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
   
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import axios from 'axios';

@Component
export default class HelloWorld extends Vue {
  @Prop() private msg!: string;


  private FBToken:string ='EAAMdjmZCduS0BAAESLyn6ZA5GNRZBvnlph2VZBnqFn5a1SmgHqdVZBPZA78lg70jY1f4LMiW2EhSegziZCOIpE2uofP0QA6RVeehh3hZCsdaGmBk3pcpAC5knwsLZBWxIZC7hFEzqS5kaz5FYPUxy11usZAmWGxufio8O1vHQkdLwUq01gUbMZA5YldZB'
  private locations:any[]= [];
  private searchStr :string='facebook';

  async getData(){
    const url:string = `https://graph.facebook.com/search?type=place&q=${this.searchStr}
  &fields=id,name,location,link
  &access_token=user-access-token"`
    this.locations = await axios.get(url);
  }

}
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

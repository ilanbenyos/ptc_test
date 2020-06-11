<template>
  <div class="about app-page p-3 ">
    <div class="main d-flex">
      <div class="img">
        <img src="../assets/me.jpg" alt="" />
      </div>
      <div class="right-sided-flex container pl-5 d-flex flex-column">
        <h1 class="text-center mb-1">About Ilan Ben Yosef</h1>
        <h3 class="text-center mb-3">
          Once a butterfly breader, then a Web Developer
        </h3>

        <section class="mb-3 text-left">
          <h5>Razorgrip <small>2019-</small></h5>
          <p>
            Working on  AMIT schools Network knowledge system & Tamal insurance and pension funds company, tasks system- 
            <br>
            a web app build with Node.js + Express.js + Loopback.js + TypeScript + TypeOrm in the back, and Angular8 at the front and Ng Material + PrimeNG + NG Ag-grid as ui libraries.
            working as a leader of a small team.
            <br>
            Tightly work with designer, product owner and the client, managing tasks and sprints, microservices and frameworks.
            Wear2b - medical startup, connecting hardware device, native app, web server and client crm portal into 1 system. AWS, S3.
          </p>
        </section>



        <section class="mb-3 text-left">
          <h5>Monolith <small>2018-2019</small></h5>
          <p>
            Building and maintaining sites & web apps for companies like
            Phillip-Morris International, Nestle, Coca-Cola ect. Developing with
            Vue Js & Nuxt as SSR framework. Working on SEO oriented projects,
            langs, API and top web libraries.
          </p>
        </section>
        <section class="mb-3 text-left">
          <h5>Yad2 (via compie) <small>2017-18</small></h5>
          <p>
            building from scrach one of the biggest Israely sites with PHP
            Laravel and Vue js.
          </p>
        </section>
        <p class="mb-3 text-left">
          Mastering vue js, Nuxt js as SSR framework.<br />
          Html5, Css3, vanilla js, es6 ect.<br />
          Backend: Node js, Koa, Express.<br />
          DB: MongoDB, Mongoose.<br />
          Tests: Cypress js, vue tests utils.<br />
          Dev tools: npm, git ect.<br />
        </p>
        <a
          href="https://www.linkedin.com/in/ilan-ben-yosef-a292b8146/"
          target="_blank"
          >Linkedin</a
        >
        <a
          href="https://docs.google.com/document/d/1ueL8z6ukmpWUCwtWA1UhE1H8oR7VJPXn4wOQWq9Tpd4/edit?usp=sharing"
          target="_blank"
          >Rezume</a
        >
        <a
          href="https://ilan-tic-tac.surge.sh"
          target="_blank"
          >My Tic-Tac Game</a
        >
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>
<style lang="scss" scoped>
.about {
  .img {
    max-width: 30rem;
    img {
      max-width: 100%;
    }
  }
}
</style>

<template>
  <div class="about_game app-page p-3  d-flex justify-content-center">
    <div class="inner" style="max-width:600px;">
      <h1 class="text-center">About App</h1>

      <p>A places search + map via facebook API</p>
      <section class="my-3 text-left">
        <h3 class="mb-3">Tech Stack</h3>
        <h5 class="mb-3">Front:</h5>
        <ul>
          <li>Vue</li>
          <li>Typescript</li>
          <li>Bootstrap</li>
          <li>Axios</li>
        </ul>

        <h5 class="my-3">Back:</h5>
        <ul>
          <li>Express</li>
          <li>Facebook API</li>
        </ul>

        <h5 class="my-3">TODO:</h5>
        <ul>
          <li>many ui issues. small stuff. it's way from over</li>
          <li>filtering empty places in server</li>
        </ul>
      </section>

      <h5 class="mt-5">
        github:
        <a href="https://github.com/ilanbenyos/ptc_test">
           github: https://github.com/ilanbenyos/ptc_test
        </a>
      </h5>

    </div>
  </div>
</template>
<script>
export default {
  name: "About"
};
</script>

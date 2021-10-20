<template lang="pug">
div(id="app")
	h1.app-header {{text}}
	img.app-image(src="images/icon-github.svg")
</template>

<script>
export default {
  components: {},
  data: () => {
    return {
      text: " with Vue Component"
    };
  }
};
</script>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: border-box;
}

#app {
  max-width: 400px;
  margin: 0 auto;
  line-height: 1.4;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: red;
}

.app-header {
  display: inline-block;
  font-style: italic;
  margin: 0.625rem;
}
.app-image {
  width: 15px;
  height: auto;
  background-color: red;
}

h1 {
  text-align: center;
}
</style>

<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>MultiRangeSlider-Demo-1</h1>
    <div class="MultiRangeSliderContainer">
      <MultiRangeSlider
        :min="barMin"
        :max="barMax"
        :minValue="barMinValue"
        :maxValue="barMaxValue"
        :step="10"
        @input="UpdateValues"
      />
    </div>
    <div>
      <br />
      minValue={{ barMinValue }}
      <br />
      maxValue={{ barMaxValue }}
    </div>
  </div>
</template>

<script>
import MultiRangeSlider from "./components/MultiRangeSlider.vue";
export default {
  name: "App",
  components: {
    MultiRangeSlider
  },
  data() {
    return {
      barMin: 0,
      barMax: 100,
      barMinValue: 10,
      barMaxValue: 90
    };
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  margin-top: 60px;
}
.MultiRangeSliderContainer {
  width: 400px;
  margin: auto;
}
</style>

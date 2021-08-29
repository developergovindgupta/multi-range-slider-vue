<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <h1>MultiRangeSlider-Demo-1</h1>
    <div class="MultiRangeSliderContainer">
      <MultiRangeSlider
        :min="0"
        :max="100"
        :step="10"
        :ruler="true"
        :label="true"
        :minValue="barMinValue"
        :maxValue="barMaxValue"
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
import MultiRangeSlider from "./components/MultiRangeSlider";
export default {
  name: "App",
  components: {
    MultiRangeSlider
  },
  data() {
    return {
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

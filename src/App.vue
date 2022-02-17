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
      <br />
      <br />
    </div>
    <div class="MultiRangeSliderContainer">
      <MultiRangeSlider
        baseClassName="multi-range-slider-black"
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
    <br />
    <hr />
    <br />
    <div class="MultiRangeSliderContainer">
      <MultiRangeSlider
        :labels="weekNames"
        :minValue="wBarMinValue"
        :maxValue="wBarMaxValue"
        :min-caption="wBarMinCaption"
        :max-caption="wBarMaxCaption"
        @input="updateWeekValues"
      />
    </div>
    <br />
    <hr />
    <br />
    <div class="MultiRangeSliderContainer" style="width:700px">
      <MultiRangeSlider
        :min="1"
        :max="365"
        :minValue="dayBarMinValue"
        :maxValue="dayBarMaxValue"
        :labels="monthNames"
        :min-caption="dayMinCaption"
        :max-caption="dayMaxCaption"
        :step="1"
        @input="updateDayValues"
      />
    </div>
    <br />
    <hr />
    <br />
    <div class="MultiRangeSliderContainer" style="width:700px">
      <MultiRangeSlider
        :min="0"
        :max="720"
        :minValue="hBarMinValue"
        :maxValue="hBarMaxValue"
        :labels="hoursLabel"
        :min-caption="hoursMinCaption"
        :max-caption="hoursMaxCaption"
        :step="5"
        @input="updateHoursValues"
      />
    </div>
  </div>
</template>

<script>
import MultiRangeSlider from "./components/MultiRangeSlider";
import "../src/assets/MultiRangeSliderBlack.css";
export default {
  name: "App",
  components: {
    MultiRangeSlider
  },
  data() {
    return {
      barMinValue: 10,
      barMaxValue: 90,
      dayBarMinValue: 32,
      dayBarMaxValue: 333,
      wBarMinValue: 1,
      wBarMaxValue: 5,
      hBarMinValue: 120,
      hBarMaxValue: 600
    };
  },
  methods: {
    UpdateValues(e) {
      this.barMinValue = e.minValue;
      this.barMaxValue = e.maxValue;
    },
    updateWeekValues(e) {
      this.wBarMinValue = e.minValue;
      this.wBarMaxValue = e.maxValue;
    },
    updateDayValues(e) {
      this.dayBarMinValue = e.minValue;
      this.dayBarMaxValue = e.maxValue;
    },
    updateHoursValues(e) {
      this.hBarMinValue = e.minValue;
      this.hBarMaxValue = e.maxValue;
    }
  },
  computed: {
    weekNames() {
      return ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    },
    wBarMinCaption() {
      return this.weekNames[this.wBarMinValue];
    },
    wBarMaxCaption() {
      return this.weekNames[this.wBarMaxValue];
    },
    monthNames() {
      return [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        ""
      ];
    },

    hoursLabel() {
      let labels = [];
      for (let i = 0; i <= 12; i++) {
        labels.push(`${i.toString().length === 1 ? "0" : ""}${i}:00`);
      }
      return labels;
    },
    startDate() {
      let d = new Date();
      return new Date("1-Jan-" + d.getFullYear());
    },
    dayMinCaption() {
      let d = new Date();
      let dd = new Date("1-Jan-" + d.getFullYear());
      dd.setDate(this.dayBarMinValue);
      return dd.toString();
    },
    dayMaxCaption() {
      let d = new Date();
      let dd = new Date("1-Jan-" + d.getFullYear());
      dd.setDate(this.dayBarMaxValue);
      return dd.toString();
    },
    hoursMinCaption() {
      let h = Math.floor(this.hBarMinValue / 60);
      let m = this.hBarMinValue % 60;
      let hh = h.toString().length === 1 ? "0" : "";
      let mm = m.toString().length === 1 ? "0" : "";

      return `${hh}${h}:${mm}${m}`;
    },
    hoursMaxCaption() {
      let h = Math.floor(this.hBarMaxValue / 60);
      let m = this.hBarMaxValue % 60;
      let hh = h.toString().length === 1 ? "0" : "";
      let mm = m.toString().length === 1 ? "0" : "";
      return `${hh}${h}:${mm}${m}`;
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

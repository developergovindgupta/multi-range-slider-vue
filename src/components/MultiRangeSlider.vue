<template>
  <div :class="baseClassName" @mousewheel="onMouseWheel">
    <div class="bar">
      <div
        class="bar-left"
        :style="{ width: barMin + '%' }"
        @click="onBarLeftClick"
      ></div>
      <input
        class="input-type-range input-type-range-min"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="valueMin"
        @input="onInputMinChange"
      />
      <div
        class="thumb thumb-left"
        @mousedown="onLeftThumbMousedown"
        @touchstart="onLeftThumbMousedown"
      >
        <div class="min-value">{{ barMinVal }}</div>
      </div>
      <div class="bar-inner">
        <div class="bar-inner-left" @click="onInnerBarLeftClick"></div>
        <div class="bar-inner-right" @click="onInnerBarRightClick"></div>
      </div>
      <input
        class="input-type-range input-type-range-max"
        type="range"
        :min="min"
        :max="max"
        :step="step"
        :value="valueMax"
        @input="onInputMaxChange"
      />
      <div
        class="thumb thumb-right"
        @mousedown="onRightThumbMousedown"
        @touchstart="onRightThumbMousedown"
      >
        <div class="max-value">{{ barMaxVal }}</div>
      </div>
      <div
        class="bar-right"
        :style="{ width: barMax + '%' }"
        @click="onBarRightClick"
      ></div>
    </div>
    <div class="ruler" v-if="ruler">
      <div v-for="n in stepCount" :key="n" class="ruler-rule"></div>
    </div>
    <div class="label" v-if="label">
      <div class="label-min">{{ min }}</div>
      <div class="label-max">{{ max }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MultiRangeSlider",
  props: {
    baseClassName: {
      type: String,
      default: "multi-range-slider"
    },
    min: { type: Number, default: 0 },
    max: { type: Number, default: 100 },
    minValue: { type: Number, default: 25 },
    maxValue: { type: Number, default: 75 },
    step: { type: Number, default: 5 },
    preventWheel: { type: Boolean, default: false },
    ruler: { type: Boolean, default: true },
    label: { type: Boolean, default: true }
  },
  data() {
    return {
      valueMin: this.minValue < this.min ? this.min : this.minValue,
      valueMax: this.maxValue > this.max ? this.max : this.maxValue,
      interVal: null,
      startX: null,
      mouseMoveCounter: null,
      barBox: null,
      barValue: 0
    };
  },
  methods: {
    onBarClick(e) {
      let target = e.target;
      console.log(target);
    },
    onBarLeftClick() {
      if (this.valueMin - this.step >= this.min) {
        this.valueMin -= this.step;
      } else {
        this.valueMin = this.min;
      }
    },
    onInnerBarLeftClick() {
      if (this.valueMin + this.step < this.valueMax) {
        this.valueMin += this.step;
      }
    },
    onBarRightClick() {
      if (this.valueMax + this.step <= this.max) {
        this.valueMax += this.step;
      } else {
        this.valueMax = this.max;
      }
    },
    onInnerBarRightClick() {
      if (this.valueMax - this.step > this.valueMin) {
        this.valueMax -= this.step;
      }
    },
    onInputMinChange(e) {
      let val = parseFloat(e.target.value);
      if (val < this.valueMax && val >= this.min) {
        this.valueMin = val;
      } else {
        e.target.value = this.valueMin;
      }
    },
    onInputMaxChange(e) {
      let val = parseFloat(e.target.value);
      if (val > this.valueMin && val <= this.max) {
        this.valueMax = val;
      } else {
        e.target.value = this.valueMax;
      }
    },
    onLeftThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMin;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      document.addEventListener("mousemove", this.onLeftThumbMousemove);
      document.addEventListener("mouseup", this.onLeftThumbMouseup);
      document.addEventListener("touchmove", this.onLeftThumbMousemove);
      document.addEventListener("touchend", this.onLeftThumbMouseup);
    },
    onLeftThumbMousemove(e) {
      this.mouseMoveCounter++;

      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.max - this.min) * per;
      let strSetp = "" + this.step;
      let fixed = 0;
      strSetp.indexOf(".") >= 0 && (fixed = 2);
      val = parseFloat(val.toFixed(fixed));
      if (val < this.min) {
        val = this.min;
      } else if (val > this.valueMax - this.step) {
        val = this.valueMax - this.step;
      }
      this.valueMin = val;
    },
    onLeftThumbMouseup() {
      document.removeEventListener("mousemove", this.onLeftThumbMousemove);
      document.removeEventListener("mouseup", this.onLeftThumbMouseup);
      document.removeEventListener("touchmove", this.onLeftThumbMousemove);
      document.removeEventListener("touchend", this.onLeftThumbMouseup);
    },
    onRightThumbMousedown(e) {
      e.preventDefault();
      this.startX = e.clientX;
      if (e.type === "touchstart") {
        if (e.touches.length === 1) {
          this.startX = e.touches[0].clientX;
        } else {
          return;
        }
      }
      this.mouseMoveCounter = 0;
      this.barValue = this.valueMax;
      this.barBox = e.target.parentNode.getBoundingClientRect();
      document.addEventListener("mousemove", this.onRightThumbMousemove);
      document.addEventListener("mouseup", this.onRightThumbMouseup);
      document.addEventListener("touchmove", this.onRightThumbMousemove);
      document.addEventListener("touchend", this.onRightThumbMouseup);
    },
    onRightThumbMousemove(e) {
      this.mouseMoveCounter++;

      let clientX = e.clientX;
      if (e.type === "touchmove") {
        clientX = e.touches[0].clientX;
      }
      let dx = clientX - this.startX;
      let per = dx / this.barBox.width;
      let val = this.barValue + (this.max - this.min) * per;
      let strSetp = "" + this.step;
      let fixed = 0;
      strSetp.indexOf(".") >= 0 && (fixed = 2);
      val = parseFloat(val.toFixed(fixed));
      if (val < this.valueMin + this.step) {
        val = this.valueMin + this.step;
      } else if (val > this.max) {
        val = this.max;
      }
      this.valueMax = val;
    },
    onRightThumbMouseup() {
      document.removeEventListener("mousemove", this.onRightThumbMousemove);
      document.removeEventListener("mouseup", this.onRightThumbMouseup);
      document.removeEventListener("touchmove", this.onRightThumbMousemove);
      document.removeEventListener("touchend", this.onRightThumbMouseup);
    },
    onMouseWheel(e) {
      if (this.preventWheel === true) {
        return;
      }

      if (!e.shiftKey && !e.ctrlKey) {
        return;
      }

      let val = (this.max - this.min) / 100;
      if (val > 1) {
        val = 1;
      }

      if (e.deltaY < 0) {
        val = -val;
      }
      if (e.shiftKey && e.ctrlKey) {
        if (
          this.valueMin + val >= this.min &&
          this.valueMax + val <= this.max
        ) {
          this.valueMin = this.valueMin + val;
          this.valueMax = this.valueMax + val;
        }
      } else if (e.ctrlKey) {
        val = this.valueMax + val;

        if (val < this.valueMin + this.step) {
          val = this.valueMin + this.step;
        } else if (val > this.max) {
          val = this.max;
        }
        this.valueMax = val;
      } else if (e.shiftKey) {
        val = this.valueMin + val;
        if (val < this.min) {
          val = this.min;
        } else if (val > this.valueMax - this.step) {
          val = this.valueMax - this.step;
        }
        this.valueMin = val;
      }
    },
    triggerInput() {
      let retObj = {
        min: this.min,
        max: this.max,
        minValue: this.valueMin,
        maxValue: this.valueMax
      };
      this.$emit("input", retObj);
    }
  },
  computed: {
    stepCount() {
      return (this.max - this.min) / this.step;
    },
    barMin() {
      let per = ((this.valueMin - this.min) / (this.max - this.min)) * 100;
      return per;
    },
    barMax() {
      let per =
        100 - ((this.valueMax - this.min) / (this.max - this.min)) * 100;
      return per;
    },
    barMinVal() {
      return parseFloat(this.valueMin.toFixed(2));
    },
    barMaxVal() {
      return parseFloat(this.valueMax.toFixed(2));
    }
  },
  watch: {
    valueMin() {
      this.triggerInput();
    },
    valueMax() {
      this.triggerInput();
    },
    minValue(newValue) {
      this.valueMin = newValue < this.min ? this.min : newValue;
    },
    maxValue(newValue) {
      this.valueMax = newValue > this.max ? this.max : newValue;
    }
  },
  mounted() {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.multi-range-slider * {
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
}
.multi-range-slider {
  display: flex;
  position: relative;
  border: solid 1px gray;
  border-radius: 10px;
  padding: 20px 10px;
  box-shadow: 1px 1px 4px black;
  flex-direction: column;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none; /* Safari */
  -khtml-user-select: none; /* Konqueror HTML */
  -moz-user-select: none; /* Old versions of Firefox */
  -ms-user-select: none; /* Internet Explorer/Edge */
  user-select: none; /* Non-prefixed version, currently supported by Chrome, Edge,*/
}
.multi-range-slider .bar {
  display: flex;
}
.multi-range-slider .bar * {
  transition: all 100ms;
}
.multi-range-slider .bar-left {
  width: 25%;
  background-color: #f0f0f0;
  border-radius: 10px 0px 0px 10px;
  box-shadow: inset 0px 0px 5px black;
  padding: 4px 0px;
}
.multi-range-slider .bar-right {
  width: 25%;
  background-color: #f0f0f0;
  border-radius: 0px 10px 10px 0px;
  box-shadow: inset 0px 0px 5px black;
}
.multi-range-slider .bar-inner {
  background-color: lime;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  justify-content: space-between;
  position: relative;
  border: solid 1px black;
  justify-content: space-between;
  box-shadow: inset 0px 0px 5px black;
}
.multi-range-slider .bar-inner-left {
  width: 50%;
}
.multi-range-slider .bar-inner-right {
  width: 50%;
}
.multi-range-slider .thumb {
  background-color: red;
  position: relative;
  z-index: 1;
  cursor: pointer;
}
.multi-range-slider .thumb::before {
  content: "";
  background-color: white;
  position: absolute;
  width: 20px;
  height: 20px;
  border: solid 1px black;
  box-shadow: 0px 0px 3px black, inset 0px 0px 5px gray;
  border-radius: 50%;
  z-index: 1;
  margin: -8px;
  cursor: pointer;
}
.multi-range-slider .input-type-range:focus + .thumb::after {
  content: "";
  position: absolute;
  top: -4px;
  left: -4px;
  width: 11px;
  height: 11px;
  z-index: 2;
  border-radius: 50%;
  border: dotted 1px black;
  box-shadow: 0px 0px 5px white, inset 0px 0px 10px black;
}

.multi-range-slider .thumb * {
  position: absolute;
  bottom: 25px;
  width: 30px;
  height: 30px;
  left: -15px;
  font-size: 75%;
  text-align: center;
  line-height: 30px;
  background-color: blue;
  border-radius: 50%;
  color: white;
  box-shadow: 0px 0px 5px black;
  display: none;
}
.multi-range-slider .thumb:active * {
  display: block;
}
.multi-range-slider .input-type-range {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  opacity: 0;
  pointer-events: none;
}

.multi-range-slider .ruler {
  margin: 10px 0px -5px 0px;
  display: flex;
  /* display: none; */
}
.multi-range-slider .ruler .ruler-rule {
  border-left: solid 1px;
  border-bottom: solid 1px;
  display: flex;
  flex-grow: 1;
  flex-shrink: 1;
  padding: 5px 0px;
}

.multi-range-slider .ruler .ruler-rule:last-child {
  border-right: solid 1px;
}

.multi-range-slider .label {
  display: flex;
  justify-content: space-between;
  padding: 0px;
  margin-top: 10px;
  margin-bottom: -20px;
  /* display: none; */
}
.multi-range-slider .label-min {
  font-size: 80%;
}
.multi-range-slider .label-max {
  font-size: 80%;
}
</style>

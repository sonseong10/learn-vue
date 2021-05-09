<template>
  <canvas ref="lineChart" width="400" height="400"></canvas>
</template>

<script>
export default {
  mounted() {
    var ctx = this.$refs.lineChart
    const labels = ["January", "February", "March", "April", "May", "June"]
    const data = {
      labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45]
        }
      ]
    }
    const config = {
      type: "line",
      data,
      options: {}
    }
    new this.$_Chart(ctx, config)
  }
}
</script>

<style></style>

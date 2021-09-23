<template>
  <list-item></list-item>
</template>

<script>
import ListItem from "../components/ListItem.vue"
import ListMixin from "../mixin/ListMixin"

export default {
  components: {
    ListItem
  },
  mixins: [ListMixin]
}
</script>

<style></style>

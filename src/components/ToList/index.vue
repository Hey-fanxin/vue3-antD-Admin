<script setup lang="ts">
import { ref, defineEmits } from 'vue'
interface toListItemDataType {
  name: string,
  id: string | number
}
const emit = defineEmits(['remove-item'])
defineProps<{ list: Array<toListItemDataType> }>()

const removeItem = (i: number) => {
  emit('remove-item', i)
}
</script>

<template>
  <ul>
    <li v-for="(item, index) in list" :key="item.id">
      {{item.name}}
      <a-button type="primary" @click="removeItem(index)">rm</a-button>
    </li>
  </ul>
</template>

<style  scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>

<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';
import {getHttpList} from './http'
// import ToList from './components/ToList/index'
interface TODOS {
  id?: string | number,
  name: string
}
const state = reactive<{list: TODOS[]}>({list: []})
const removeItem = (index: number) => {
  state.list.splice(index, 1)
}
const addItem = () => {
  const i = <number>state.list[state.list.length - 1].id
  state.list.unshift({
    id: i + 1,
    name: 'aaaa'
  })
}
onMounted(() => {
  getHttpList().then(res => {
    console.log(res);
    const _list = res.data.list
    state.list = _list
  })
})
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <a-button type="primary" @click="addItem">add</a-button>
  <ToList :list="state.list" @removeItem="removeItem"/>
  
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

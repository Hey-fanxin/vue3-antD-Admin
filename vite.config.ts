import { defineConfig, ConfigEnv, UserConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require("path")
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from "vite-plugin-mock"
// https://vitejs.dev/config/

console.log(process);

export default defineConfig(({command}: ConfigEnv) => <UserConfig>{
  // console.log(command)
  resolve:{
    alias: {
      "@": path.resolve(__dirname, '/src')
    }
  },
  plugins: [
    vue(),
    viteMockServe({
      mockPath: "./src/mock",
      supportTs: false     //如果使用 js发开，则需要配置 supportTs 为 false
    }),
    Components({
      resolvers: [
        AntDesignVueResolver(),
      ],
    }),
  ]
})

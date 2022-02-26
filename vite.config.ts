import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
import { viteMockServe } from "vite-plugin-mock"

// https://vitejs.dev/config/
export default defineConfig({
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

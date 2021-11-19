import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vitePluginAliOss from './plugin.js'



const options = {
  region: 'oss-cn-beijing',
  accessKeyId: '',
  accessKeySecret: '',
  bucket: 'xiaweiss',
  overwrite: false
}

console.log('viteConfig', vitePluginAliOss(options))

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://xiawei.cc/',
  plugins: [vue(), vitePluginAliOss(options)]
})

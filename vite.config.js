// vite.config.js
import {
    resolve
 } from 'path'
 import {
    defineConfig
 } from 'vite'
 
 export default defineConfig({
    build: {
       rollupOptions: {
          input: {
             main: resolve(__dirname, 'index.html'),
             movies: resolve(__dirname, '/pages/movies/index.html'),
          },
       },
    },
 })
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv';
// https://vitejs.dev/config/
dotenv.config();
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': process.env
  },
  // server: {
  //   host: '10.10.3.183',
  //   port: 3000, 
  // },
   // "start": "react-scripts start --host 10.10.3.183", >> package.json
})






import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3333',
})

export default api;

/**
 * iOS com Emulador: localhost
 * iOS com físico: ip da maquina host
 * 
 * Android com Emulador: 
 *    localhost: adb reverse tcp:3333 tcp:3333
 *    10.0.2.2 (Android Studio)
 *    10.0.3.2 (Genymotion)
 * 
 * Android com físico: ip da maquina host
 */
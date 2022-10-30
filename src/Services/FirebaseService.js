import { initializeApp } from 'firebase/app';
import { getStorage } from "firebase/storage";

export function initialFirebaseApp (){
    const firebaseConfig = {
        apiKey: "AIzaSyAOibuMGy20qP4YuX8zhJXC8xLYGwQc5Lc",
        authDomain: "my-porfolio-3de9c.firebaseapp.com",
        projectId: "my-porfolio-3de9c",
        storageBucket: "my-porfolio-3de9c.appspot.com",
        messagingSenderId: "1077779278949",
        appId: "1:1077779278949:web:1f164df0b4a6c0e2796a8c"
      };
      const app = initializeApp(firebaseConfig);
      const storage = getStorage (app, "gs://my-porfolio-3de9c.appspot.com/")
      console.log('storage',storage);
}
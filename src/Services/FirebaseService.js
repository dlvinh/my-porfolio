import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storeFile } from "../Redux/Reducers/FireStoreReducer";
import { reducerActions } from "../Redux/Reducers/UserReducer";

export const firebaseConfig = {
  apiKey: "AIzaSyAOibuMGy20qP4YuX8zhJXC8xLYGwQc5Lc",
  authDomain: "my-porfolio-3de9c.firebaseapp.com",
  projectId: "my-porfolio-3de9c",
  storageBucket: "my-porfolio-3de9c.appspot.com",
  messagingSenderId: "1077779278949",
  appId: "1:1077779278949:web:1f164df0b4a6c0e2796a8c",
};

// This funciton is a thunk creator
// https://redux.js.org/usage/writing-logic-thunks
export function initialFirebaseApp() {
  console.log("run firebase");
  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app, "gs://my-porfolio-3de9c.appspot.com/");
  return async function initialFirebaseStore(dispatch, getState) {
    try {
      const url = await getDownloadURL(ref(storage, "Resume-DucVinhLe.pdf"));
      const avatarUrl = await getDownloadURL(
        ref(storage, "Avatar/myavatar.jpeg")
      );
      await dispatch(
        reducerActions.storeImageAndResume({ image: avatarUrl, resume: url })
      );
      await dispatch(
        storeFile({
          app: app,
          storage: storage,
        })
      );
    } catch (error) {
      console.log(error);
    }
    console.log("thunk");
  };
}

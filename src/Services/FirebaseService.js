import { initializeApp } from "firebase/app";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { storeFile } from "../Redux/Reducers/FireStoreReducer";
import { reducerActions } from "../Redux/Reducers/UserReducer";
import { getFirestore,collection, getDocs, Firestore, query,doc, getDoc } from "firebase/firestore";
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
  // console.log("run firebase");
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
    // console.log("thunk");
  };
}

export async function getCommentList(){
  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);
  try{
    const querySnapshot = await getDocs(query(collection(database, "users/user-comments/comment-list")));
    console.log(querySnapshot);
    querySnapshot.forEach((doc) =>  {
        console.log(doc.data());
    console.log(`${doc.id} => ${doc.data()}`);
  });

}catch(err){
    console.log(err)
  }
}

export function getUserInfo(){
  const app = initializeApp(firebaseConfig);
  const database = getFirestore(app);
  console.log("run get user info")
  return async function getInfo(dispatch, getState){
    try{
      const result = await getDoc(doc(database, "users/user-info"));
      // console.log(querySnapshot.data());
      dispatch(reducerActions.storeUserInfo(
        result.data()
      ))
  }catch(err){
      console.log(err)
    }
  }
 
}
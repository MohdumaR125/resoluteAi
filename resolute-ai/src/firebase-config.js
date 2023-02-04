import { initializeApp } from "firebase/app";
import {getDatabase} from  "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyDyRnryzHakMX4MdXnhKbhE5TwrB3s7Ago",
    authDomain: "resolute-99fee.firebaseapp.com",
    databaseURL: "https://resolute-99fee-default-rtdb.firebaseio.com",
    projectId: "resolute-99fee",
    storageBucket: "resolute-99fee.appspot.com",
    messagingSenderId: "480553148157",
    appId: "1:480553148157:web:aa838a6063777c432aa894",
    measurementId: "G-4870LLFQR8"
  };
  const app = initializeApp(firebaseConfig)
  export const db = getDatabase(app)
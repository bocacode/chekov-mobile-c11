import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = { // *** REPLACE WITH YOUR OWN CONFIG ***
  apiKey: 'AIzaSyCTs4n4nu-yUh7hmUhpLqLPjjgqZ-sK2nA',
  authDomain: 'chekov-c11.firebaseapp.com',
  projectId: 'chekov-c11',
  storageBucket: 'chekov-c11.appspot.com',
  messagingSenderId: '603639104843',
  appId: '1:603639104843:web:dc267f9c827fe83e8b14ce',
} // *** REPLACE WITH YOUR OWN CONFIG ***

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // need app inside for react-native

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, collection, getDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDibNX6LQodTLU_CyhAV0uWv3eEYg7P7iM",
  authDomain: "lab4-oguis.firebaseapp.com",
  projectId: "lab4-oguis",
  storageBucket: "lab4-oguis.appspot.com",
  messagingSenderId: "877317356644",
  appId: "1:877317356644:web:ac98318916c6156fd5b371",
  measurementId: "G-RLK0BX98TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)

const googleSignInBtn = document.querySelector('.google-sign-in');
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

googleSignInBtn.addEventListener('click', () => {
signInWithPopup(auth, provider).then((result) => {
  const user = result.user;
  alert(` Hello ${user.displayName}!`);
  window.location.href = "home.html";

}).catch((error) => {
  const errorMessage = error.message;
  alert(`Can't Login: ${errorMessage}`)
});

});

const db = getFirestore(app);

const saveBtn = document.querySelector(".save")
saveBtn.addEventListener("click", async () => {
    const fruitCollectionRef = collection(db, 'fruits')
    try {
    const newFruitRef = await getDoc(fruitCollectionRef, {
        name: "Apple",
        color: "red"       
    })
    console.log(`Created a new fruit: ${newFruitRef.id}`)
  }catch (error) {
    console.log(error)
  }
})
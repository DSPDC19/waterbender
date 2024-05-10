
const potableWater = document.getElementById("Pot");
const nonPotableWater = document.getElementById("NonPot");

  // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.1/firebase-database.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyCdyuD3otc9maLhlbIgQFTp67VdvoFKTaY",
authDomain: "waterbender-6cfd6.firebaseapp.com",
databaseURL: "https://waterbender-6cfd6-default-rtdb.firebaseio.com",
projectId: "waterbender-6cfd6",
storageBucket: "waterbender-6cfd6.appspot.com",
messagingSenderId: "676460500823",
appId: "1:676460500823:web:c8c68d126614fb4b339012"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();

const nonPotableRef= ref(db, "/main/agua_comun");
const potableRef=ref(db,"main/agua_potable");

onValue(nonPotableRef, (snapshot) => {
    const nPot=snapshot.val();
    nonPotableWater.innerHTML=nPot.toFixed(2);
    console.log("No Potable: ", nPot.toFixed(2));
})

onValue(potableRef, (snapshot) => {
  const Pot=snapshot.val();
  potableWater.innerHTML=Pot.toFixed(2);
  console.log("No Potable: ", Pot.toFixed(2));
})
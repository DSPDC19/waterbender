
const temperatura=document.getElementById("tempera");

// Importa las funciones necesarias de Firebase

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

// Configura tus datos de conexión a Firebase
const firebaseConfig = {
    apiKey: "AIzaSyDoE1Rxy5cSWCXeSnBzyxSUnKUqik2Ww1U",
    authDomain: "sensortest-e0e04.firebaseapp.com",
    databaseURL: "https://sensortest-e0e04-default-rtdb.firebaseio.com",
    projectId: "sensortest-e0e04",
    storageBucket: "sensortest-e0e04.appspot.com",
    messagingSenderId: "1013074205951",
    appId: "1:1013074205951:web:851cc71be37a8f524140ca"
  };


// Inicializa Firebase
const app = initializeApp(firebaseConfig);


// Obtiene una referencia a tu base de datos
const db = getDatabase();

// Escucha cambios en la referencia específica (por ejemplo, "/main")
const temperaturaRef = ref(db, "/main/caudal/");
onValue(temperaturaRef, (snapshot) => {
  const temp = snapshot.val();
  temperatura.innerHTML = temp;
  console.log("Caudal en tiempo real:", temp);
});


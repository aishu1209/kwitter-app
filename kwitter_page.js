var firebaseConfig = {
    apiKey: "AIzaSyAmCF6dh_HMRN3mQj7Vg--IlW5A9dccyRU",
    authDomain: "let-chat-8a505.firebaseapp.com",
    databaseURL: "https://let-chat-8a505-default-rtdb.firebaseio.com",
    projectId: "let-chat-8a505",
    storageBucket: "let-chat-8a505.appspot.com",
    messagingSenderId: "201024743078",
    appId: "1:201024743078:web:56297b06616c5facbbb667",
    measurementId: "G-60LEJ010LC"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");


function logOut(){
window.location = "index.html";

}

function send(){
message = document.getElementById("msg").value;

}
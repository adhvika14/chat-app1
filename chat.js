// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDwluNu2-n5iKfvUvHuathUesUWvoG7KPg",
    authDomain: "chat-app-de618.firebaseapp.com",
    databaseURL: "https://chat-app-de618-default-rtdb.firebaseio.com",
    projectId: "chat-app-de618",
    storageBucket: "chat-app-de618.appspot.com",
    messagingSenderId: "1039090493006",
    appId: "1:1039090493006:web:2739e0d35b1e659563c51f",
    measurementId: "G-WH4BL78E3D"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
}




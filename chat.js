var firebaseConfig = {
    apiKey: "AIzaSyDXA317UQkqaLJgtJbcu0v2b3udkDhehfA",
    authDomain: "kwitter-5ed21.firebaseapp.com",
    databaseURL: "https://kwitter-5ed21-default-rtdb.firebaseio.com",
    projectId: "kwitter-5ed21",
    storageBucket: "kwitter-5ed21.appspot.com",
    messagingSenderId: "728087532670",
    appId: "1:728087532670:web:2f0ee99a6d9404580db42f"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addUser() {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}
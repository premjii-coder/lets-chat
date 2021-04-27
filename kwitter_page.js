// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyC7rvhJUPj-96m387rh8220wAPX1kpvqaw",
    authDomain: "jsdbtest.firebaseapp.com",
    databaseURL: "https://jsdbtest.firebaseio.com",
    projectId: "jsdbtest",
    storageBucket: "jsdbtest.appspot.com",
    messagingSenderId: "557097620929",
    appId: "1:557097620929:web:d549209de61a48b20b8b40"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
    function send()
  {
        msg=document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
              like:0
        });
        document.getElementById("msg").value="";
  }
  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;

        } });  }); }
        getData();
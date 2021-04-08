
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyC6xkxJXDSXzVNPSRiNMk3vPC930-uLin4",
      authDomain: "quawhatsapp.firebaseapp.com",
      databaseURL: "https://quawhatsapp-default-rtdb.firebaseio.com",
      projectId: "quawhatsapp",
      storageBucket: "quawhatsapp.appspot.com",
      messagingSenderId: "27021267262",
      appId: "1:27021267262:web:5813a78bd7eb00c2eddc6f",
      measurementId: "G-XL5DKG34BB"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    var username = localStorage.getItem("User");
    document.getElementById("display_name").innerHTML = ("Welcome " + username );

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
      
      function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Room name -" + Room_names);
            row = "<div class = 'room_name' id="+Room_names+" onclick = 'redirectToRoomName(this.id)'>"+Room_names+"</div><hr>";
            document.getElementById("output").innerHTML += row;    //Start code
     
           //End code
           });
        });
     }
           
     getData();
     
     function Addroom(){
           var roomname = document.getElementById ("Room_name").value;
           firebase.database().ref("/").child(roomname).update({
                 purpose:"adding room name"
           });
           localStorage.setItem("room_name" , roomname);
           window.location=("chat.html");
     }
     function redirectToRoomName(name){
           console.log(name);
           localStorage.setItem("room_name", name);
           window.location = "chat.html";
     }


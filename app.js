  // Import the functions you need from the SDKs you need

  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
  import { getDatabase,set,get,ref} from "https://www.gstatic.com/firebasejs/11.2.0/firebase-database.js";

  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBFlclwXscz_e27Jycq5i_0KACzwpNdDSw",
    authDomain: "realtimedatabase-78fbf.firebaseapp.com",
    projectId: "realtimedatabase-78fbf",
    storageBucket: "realtimedatabase-78fbf.firebasestorage.app",
    messagingSenderId: "295978054495",
    appId: "1:295978054495:web:354853ecc9bf33594b3cea"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

 // initalize the data base

  const db = getDatabase(app);
  
//   console.log(db);
// console.log("Hello Database");

function userData(userid,name,email,password){
      // by using set method get value set value in database;
      set(ref(db,'users/' + userid),{
           name:name,
           email:email,
           password:password
      })

}

userData(1,'MuhammadJaved','javedchohan@32gamil.com',8454);


function getuserData(){
     const userValue = ref(db,'users');
     // by using get method they return the promise 
     get(userValue).then((snapshot)=>{
        snapshot.forEach(element => {
            console.log(element.val())
        });
     })
};

getuserData();
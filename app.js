 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import { getDatabase,
 ref,
 set,
 onChildAdded,
 } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 // For Firebase JS SDK v7.20.0 and later, measurementId is optional
 const firebaseConfig = {
   apiKey: "AIzaSyAlT3kadzywE6ZIDDyZ8-TYZfSccdOY8c8",
   authDomain: "form-481db.firebaseapp.com",
   projectId: "form-481db",
   storageBucket: "form-481db.appspot.com",
   messagingSenderId: "1001363875864",
   appId: "1:1001363875864:web:78b24e96c23637a83f3b6d",
   measurementId: "G-PW7ZH97JV5"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const analytics = getAnalytics(app);


const database = getDatabase();

var a = document.getElementById("task");
var lastinp = document.getElementById("last");
var nicinp = document.getElementById("nic");
var contactinp = document.getElementById("contact");
var emailinp = document.getElementById("email");
var passwordinp = document.getElementById("password");
var qualificationinp = document.getElementById("qualification");
var courseinp = document.getElementById("course");
var parent = document.getElementById("parent");


window.saveTask = function () {
    var obj = {
        task: a.value,
        last: lastinp.value,
        nic: nicinp.value,
        contact: contactinp.value,
        email: emailinp.value,
        password: passwordinp.value,
        qualification: qualificationinp.value,
        course: courseinp.value,
    };
    obj.id = Math.random().toString().slice(2);
    let reference = ref(database, `tasks/${obj.id}/`);
    set(reference, obj);
    console.log(obj);
}

function getData(){
    let reference = ref(database, "tasks/")
    let arr = [];
    onChildAdded(reference, function (data){
        arr.push(data.val());
        console.log(arr);
        // parent.innerHTML = "";
        for(var i = 0; i < arr.length; i++){
            parent.innerHTML += `<li>${arr[i].task}</li>`
        }
    })
}
getData();
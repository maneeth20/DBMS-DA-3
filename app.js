var firebaseConfig = {
  apiKey: "AIzaSyC5kDmMv-WlRdeFQG20khJKb94Sy8NuJ0g",
  authDomain: "dbms-21mis1019.firebaseapp.com",
  databaseURL: "https://dbms-21mis1019-default-rtdb.firebaseio.com",
  projectId: "dbms-21mis1019",
  storageBucket: "dbms-21mis1019.appspot.com",
  messagingSenderId: "454406264400",
  appId: "1:454406264400:web:b49e1a657edc1544bda355",
  measurementId: "G-2CV7QXPF7V"
  };
  firebase.initializeApp(firebaseConfig);
  let contactInfo = firebase.database().ref("User Information");
  document.querySelector(".contact-form").addEventListener("submit", submitForm);
  function submitForm(e) {
    e.preventDefault();
    let name = document.querySelector(".name").value;
    let email = document.querySelector(".email").value;
    let PhoneNumber = document.querySelector(".PhoneNumber").value;
    let regno = document.querySelector(".regno").value;
    let fathername = document.querySelector(".fathername").value;
    console.log(name, email, PhoneNumber, regno, fathername);
  
    saveContactInfo(name, email,PhoneNumber, regno, fathername);
  
    document.querySelector(".contact-form").reset();
  }
  function saveContactInfo(name, email,PhoneNumber, regno, fathername) {
    let newContactInfo = contactInfo.push();
  
    newContactInfo.set({
      Name: name,
      Email: email,
      PhoneNumber: PhoneNumber,
      Regno: regno,
      FatherName: fathername,
    });
  }
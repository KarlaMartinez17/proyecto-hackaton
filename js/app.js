document.getElementById("login").addEventListener("click", function(){
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
  
    }).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      var credential = error.credential;
      // ...
    });
  });
  
  firebase.auth().onAuthStateChanged(function(user) {//callback
    if (user) {
      console.log(user);
      window.location="views/principal.html";
      //console.log("loguedo");
      //console.log(user);
    }else{
      console.log("desloguedo");
    }
  });

$("#login1").click(function(){
    console.log("Boton login clickeado");
    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email, password);
    firebase.auth().signInWithEmailAndPassword(email, password)
    .catch(function(error){
      console.log(error);
      alert(error.message);
    });
  });

  
  $("#signup").click(function(){
    console.log("Boton signup clickeado");
    var email = $("#email").val();
    var password = $("#password").val();
    console.log(email, password);

    firebase.auth().createUserWithEmailAndPassword(email, password)
    .catch(function(error){
    console.log(error);
    alert(error.message);
    });
  });

  firebase.auth().onAuthStateChanged(function(user){
    if(user){
      console.log("logged in");
      $("#user").text(user.email);
      console.log(user);
      window.location = "views/principal.html";
    }else{
      console.log("logged out");
      $("#user").text("");
    }
  });

$(document).ready(function () {

    setTimeout(function () {
        $('#splash').hide(500);
        $('.bg-login').removeClass('hide');
    }, 2000);

    $('.modal').modal();
});
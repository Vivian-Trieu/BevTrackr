// Initialize Firebase
var firebaseConfig = {
  // Your Firebase configuration
    apiKey: "AIzaSyDj0QJk8Ptz0N_WjHg76iFhY3f2fBmStcM",
    authDomain: "app-to-test-multiple-users.firebaseapp.com",
    databaseURL: "https://app-to-test-multiple-users-default-rtdb.firebaseio.com",
    projectId: "app-to-test-multiple-users",
    storageBucket: "app-to-test-multiple-users.appspot.com",
    messagingSenderId: "342422003892",
    appId: "1:342422003892:web:77cae1a2d537be989737e1"
};
firebase.initializeApp(firebaseConfig);

// Authenticate user with Firebase
function authenticateUser() {
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(email, password)
    .then(function (userCredential) {
      // Get the user's email
      var user = userCredential.user;
      var userEmail = user.email;

      // Redirect based on the user's email
      if (userEmail === "fhernandez@gmail.com") {
        window.location.href = "drivelist.html";
      } else if (userEmail === "ghernandez@gmail.com") {
        window.location.href = "JTdrivelist.html";
      } else {
        // If the user email is not matched with any condition, show an alert
        alert("Invalid user. Please try again.");
      }
    })
    .catch(function (error) {
      // Unsuccessful login, show alert
      alert("Login unsuccessful. Please try again.");
    });
}

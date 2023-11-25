// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyAXaB2X9YrOQLGg-B8zWjtVfoco1KKuW6A",
    authDomain: "carttracker-a5166.firebaseapp.com",
    databaseURL: "https://carttracker-a5166-default-rtdb.firebaseio.com/",
    projectId: "carttracker-a5166",
    storageBucket: "carttracker-a5166.appspot.com",
    messagingSenderId: "638960560715",
    appId: "1:638960560715:web:a8242b5a9165f5b1657bce",
    measurementId: "G-5FTKR9GYP5"
  };

firebase.initializeApp(firebaseConfig);

function togglePingStatus(hole) {
    // Get the current ping status from the Firebase database
    firebase.database().ref('ElPradoHoles/hole' + hole + '/ping').once('value').then(function (snapshot) {
        var currentStatus = snapshot.val();

        // Update the ping status only if it is currently true
        if (currentStatus === true) {
            firebase.database().ref('ElPradoHoles/hole' + hole).update({
                ping: false
            });
        }
    });
}

// Listen for changes in the ping value and update button color accordingly
function listenForPingChanges(hole, button) {
    firebase.database().ref('ElPradoHoles/hole' + hole + '/ping').on('value', function (snapshot) {
        var pingValue = snapshot.val();

        // Check if the ping value changed from true to false
        if (pingValue === false) {
            latestButtonElement.textContent = button.textContent;
        }

        // Update the button color based on the ping status
        if (pingValue === true) {
            button.classList.add('pinged');
        } else {
            button.classList.remove('pinged');
        }
    });
}

// Shows what button is clicked to be displayed in the h3 tag
const latestButtonElement = document.getElementById('latestButton');
const buttons = document.getElementsByClassName('holeButton');

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function(event) {
        const buttonText = event.target.textContent;
        
        // Only update the text content if the button has the "pinged" class
        if (event.target.classList.contains('pinged')) {
            latestButtonElement.textContent = buttonText;
        }
    }); 
}

// Call listenForPingChanges for each hole
document.addEventListener("DOMContentLoaded", function () {
    var buttons = document.getElementsByClassName('holeButton');
    for (var i = 0; i < buttons.length; i++) {
        var hole = i + 1;
        listenForPingChanges(hole, buttons[i]);
    }
});

document.addEventListener('DOMContentLoaded', function () {
    var popupContainer = document.getElementById('popupContainer');
    var yesBtn = document.getElementById('yesBtn');
    var noBtn = document.getElementById('noBtn');

    // Check if Geolocation is supported by the browser
    if ('geolocation' in navigator) {
        // Request the user's location
        navigator.geolocation.getCurrentPosition(
            function (position) {
                // User's location is obtained
                var userLatitude = position.coords.latitude;
                var userLongitude = position.coords.longitude;

                // Check if the user is within 7 kilometers of the target location
                var targetLatitude = 36.110810;
                var targetLongitude = -115.212300;
                var distance = calculateDistance(userLatitude, userLongitude, targetLatitude, targetLongitude);

                if (distance <= 50) {
                    // User is within 7 kilometers, show the popup
                    popupContainer.style.display = 'flex';
                } else {
                    // User is not within 7 kilometers, show an error message
                    alert('You are not near the specified location. Try again.');
                }
            },
            function (error) {
                // Error getting user's location, show an error message
                alert('Error getting your location. Turn on your device location and try again.');
            }
        );
    } else {
        // Geolocation not supported, show an error message
        alert('Geolocation is not supported by your browser.');
    }

    yesBtn.addEventListener('click', function () {
        // Perform actions for "Yes"
        alert('You selected "Yes"');
        // Redirect to map page
        window.location.href = 'map.html';
    });

    noBtn.addEventListener('click', function () {
        // Perform actions for "No"
        alert('You selected "No"');
        // Redirect to any other page, login for now
        window.location.href = 'login.html';
    });

    // Disable closing by clicking outside of the popup
    popupContainer.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            event.stopPropagation();
        }
    });

    // Function to calculate the distance between two sets of coordinates using the Haversine formula
    function calculateDistance(lat1, lon1, lat2, lon2) {
        var R = 6371; // Radius of the Earth in kilometers
        var dLat = (lat2 - lat1) * (Math.PI / 180);
        var dLon = (lon2 - lon1) * (Math.PI / 180);
        var a =
            Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
        var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        var distance = R * c;
        return distance; // Distance in kilometers
    }
});

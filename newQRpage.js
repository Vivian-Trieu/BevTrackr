function checkLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    // Assuming 'sample_course' coordinates for demonstration
    var ElCourseLatitude = 34.053768;
    var ElCourseLongitude = -117.667430;

    var distance = calculateDistance(latitude, longitude, ElCourseLatitude, ElCourseLongitude);

    if (distance <= 1) { // You can adjust the distance threshold as needed
        showGolfCoursePrompt();
    } else {
        showLocationOffPrompt();
    }
}

function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 7; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var distance = R * c; // Distance in km
    return distance;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180);
}

function showError(error) {
    var errorMessage = "Error retrieving location: ";
    switch (error.code) {
        case error.PERMISSION_DENIED:
            errorMessage += "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            errorMessage += "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            errorMessage += "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            errorMessage += "An unknown error occurred.";
            break;
    }
    alert(errorMessage);
}

function showGolfCoursePrompt() {
    var courseName = "sample_course"; // Replace with actual course name
    var confirmation = confirm("You are at '" + courseName + "', do you need our service?");
    if (confirmation) {
        // User clicked 'OK', handle accordingly
        alert("Service requested!");
    } else {
        // User clicked 'Cancel', handle accordingly
        alert("No service requested.");
    }
}

function showLocationOffPrompt() {
    alert("Your device location is off, please turn it on.");
}

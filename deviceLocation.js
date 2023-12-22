document.addEventListener('DOMContentLoaded', function () {
    var popupContainer = document.getElementById('popupContainer');
    var yesBtn = document.getElementById('yesBtn');
    var noBtn = document.getElementById('noBtn');

    popupContainer.style.display = 'flex'; // Display the popup container by default

    yesBtn.addEventListener('click', function () {
        // Perform actions for "Yes"
        alert('You selected "Yes"');
        popupContainer.style.display = 'none';
    });

    noBtn.addEventListener('click', function () {
        // Perform actions for "No"
        alert('You selected "No"');
        popupContainer.style.display = 'none';
    });

    // Disable closing by clicking outside of the popup
    popupContainer.addEventListener('click', function (event) {
        if (event.target === popupContainer) {
            event.stopPropagation();
        }
    });
});

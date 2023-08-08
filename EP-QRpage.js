function RequestBevCart() {
    var select_id = document.getElementById('select-id');
    var go_btn = document.getElementById('go-btn');

    select_id.classList.remove('hidden');
    go_btn.classList.remove('hidden');
}

function GoCourse() {
    var dropdown = document.getElementById("select-id");
    var selectedCourse = dropdown.options[dropdown.selectedIndex].value;

    if(selectedCourse == 1) {
        window.location.href = "EPmaintenanceListChino.html";
    }
    if(selectedCourse == 2) {
        window.location.href = "EPmaintenanceListButter.html";
    }
}

function RequestAssistance() {
    var select_id = document.getElementById('select');
    var go_btn = document.getElementById('go-btn');

    select_id.classList.remove('hidden');
    go_btn.classList.remove('hidden');
}


function GoLogin() {
    window.location.href = "login.html";
}

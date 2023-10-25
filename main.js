const root = document.getElementById('main');
function createmenu() {
    const listlink = ["login", "Course", "Mark", "Attendance", "Logout"];
    let nav = document.createElement('nav');
    for (let i = 0; i < listlink.length; i++) {
        let link = document.createElement('a');
        link.className = "menu-item";
        link.innerHTML = listlink[i];
        nav.appendChild(link);
    }
    root.appendChild(nav);

}

createmenu();
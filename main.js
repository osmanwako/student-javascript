
const root = document.getElementById('root');
const header = document.createElement('header');
const nav = document.createElement('nav');
const login = document.createElement('a');
const register = document.createElement('a');
const main = document.createElement('main');

function addcontent() {
    header.appendChild(nav);
    root.appendChild(header);
    root.appendChild(main);
}
function loginpage() {
    const temp = document.createElement("div");
    temp.textContent = "I am login page";
    main.innerHTML = "";
    main.append(temp);
}
function addloginlink() {
    login.textContent = "Login";
    login.className = "menu-item";
    login.addEventListener("click", loginpage);
    nav.appendChild(login);
}

function registerpage() {
    const temp = document.createElement("div");
    temp.textContent = "I am Register page";
    main.innerHTML = "";
    main.append(temp);
}

function addregisterlink() {
    register.textContent = "Register";
    register.className = "menu-item";
    register.addEventListener("click", registerpage);
    nav.appendChild(register);
}

function createheader() {
    addloginlink();
    addregisterlink();
    addcontent();
}


createheader();

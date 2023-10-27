import { LoginPage } from './login.js'
const root = document.getElementById('root');
const header = document.createElement('header');
const nav = document.createElement('nav');
const loginlink = document.createElement('a');
const register = document.createElement('a');
const main = document.createElement('main');

function addcontent() {
    header.appendChild(nav);
    root.appendChild(header);
    root.appendChild(main);
}

function loginpage() {
    main.innerHTML = "";
    main.appendChild(LoginPage())
}

function addloginlink() {
    loginlink.textContent = "Login";
    loginlink.className = "menu-item";
    loginlink.addEventListener("click", loginpage);
    nav.appendChild(loginlink);
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

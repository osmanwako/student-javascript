
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

function loginlabel(name) {
    const label = document.createElement("label");
    label.className = "login-control";
    label.textContent = name;
    return label;
}

function logininput(type) {
    const input = document.createElement("input");
    input.classList = "login-control input-login";
    input.type = type;
    return input;
}

function loginspanbtn() {
    const span = document.createElement("span");
    span.classList = "login-control login-span";
    const btn = document.createElement("button");
    btn.className = "button-login";
    btn.textContent = "Login";
    span.appendChild(btn);
    return span;
}

function loginpage() {
    const temp = document.createElement("div");
    temp.className = "login-page";
    const title = document.createElement("h3");
    title.textContent = "Welcome to Student Login Page";
    temp.append(title);
    //
    const formlogin = document.createElement("form");
    formlogin.className = "form-login";

    formlogin.appendChild(loginlabel("Username or Email"));
    formlogin.appendChild(logininput("text"));
    formlogin.appendChild(loginlabel("Password"));
    formlogin.appendChild(logininput("password"));
    formlogin.appendChild(loginspanbtn());
    temp.appendChild(formlogin);
    //addloginform()
    //
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

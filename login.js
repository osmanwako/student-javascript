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

export function LoginPage() {
    const login = document.createElement("div");
    login.className = "login-page";

    const title = document.createElement("h3");
    title.textContent = "Welcome to Student Login Page";
    login.append(title);

    const formlogin = document.createElement("form");
    formlogin.className = "form-login";

    formlogin.appendChild(loginlabel("Username or Email"));
    formlogin.appendChild(logininput("text"));
    formlogin.appendChild(loginlabel("Password"));
    formlogin.appendChild(logininput("password"));
    formlogin.appendChild(loginspanbtn());
    login.appendChild(formlogin);
    return login;
}

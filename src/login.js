export const setupLoginForm = () => {
    let loginForm = document.getElementById("loginForm");

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        let username = document.getElementById('username');
        let password = document.getElementById('password');

        if (username.value === "" || password.value === "") {

            //throw input borders in red
            username.className = `${username.className} invalid`
            username.setCustomValidity("Поле должно быть заполненным!");

            password.className = `${password.className} invalid`
            password.setCustomValidity("Поле должно быть заполненным!");

        } else if (username.value === "123" && password.value === "123") {
            alert("This form has been successfully submitted!");
            let token = (Math.random() + 1).toString(36).substring(7);
            sessionStorage.setItem("authorizationKey", token);
            location.reload()

        } else {
            username.className = `${username.className} invalid`
            username.setCustomValidity("Логин или пароль неверны!");

            password.className = `${password.className} invalid`
        }
        username.value = "";
        password.value = "";
        // handle submit
    });
}
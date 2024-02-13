import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();
    // let loginForm = document.getElementById("loginForm");

    const checkAuth = () => {
        let username: any = document.getElementById('username');
        let password: any = document.getElementById('password');

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
            // location.reload()
            navigate("/Home")

        } else {
            username.className = `${username.className} invalid`
            username.setCustomValidity("Логин или пароль неверны!");
            password.className = `${password.className} invalid`
        }
        username.value = null;
        password.value = null;
    }


    return (
        <section id="auth" className="bg-light">
            <div className="container">
                <form action="" id="loginForm" className="authorizationPanel">
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password"/>
                    <button className="pageButton submitButton" onClick={checkAuth}>Submit</button>
                </form>
            </div>
        </section>
    )
}
export default Login
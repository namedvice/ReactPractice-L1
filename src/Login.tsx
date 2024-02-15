import {useNavigate} from "react-router-dom";


const Login = () => {
    const navigate = useNavigate();

    const checkAuth = () => {
        const username: HTMLInputElement = document.getElementById('username') as HTMLInputElement;
        let password: HTMLInputElement | null = document.getElementById('password') as HTMLInputElement;

        if (username && password) {
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
            username.value = '';
            password.value = '';
        }
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
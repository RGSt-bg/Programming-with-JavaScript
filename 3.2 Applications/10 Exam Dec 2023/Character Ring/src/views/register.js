import { html } from "../../node_modules/lit-html/lit-html.js"; //PUT THE RIGHT PATH TO LIT-HTML!!!

import { userService } from "../userService.js";

const registerTempl = () => html`
        <section id="register">
          
          <div class="form">
            <img class="border" src="./images/border.png" alt="">
            <h2>Register</h2>
            <form @submit=${submitHandler} class="register-form">
              <input
                type="text"
                name="email"
                id="register-email"
                placeholder="email"
              />
              <input
                type="password"
                name="password"
                id="register-password"
                placeholder="password"
              />
              <input
                type="password"
                name="re-password"
                id="repeat-password"
                placeholder="repeat password"
              />
              <button type="submit">register</button>
              <p class="message">Already registered? <a href="/login">Login</a></p>
            </form>
            <img class="border" src="./images/border.png" alt="">
          </div>
        </section>
`;

let context = null;
export function registerView(ctx) {
    ctx.render(registerTempl());
    context = ctx;
}

async function submitHandler(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get("email");
    const password = formData.get("password");
    const rePass = formData.get("re-password");

    if (!email || !password || !rePass || password != rePass)
      return window.alert("Error");

    await userService.register(email, password);
    context.updateNav();
    context.goTo("/");
}
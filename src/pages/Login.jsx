import React from "react";

export default function Login() {
  return (
    <section className="login p-20">
      <div className="container">
        <div className="wrapper flex justify-center items-center">
          <form className="grid gap-10" action="">
            <div className="email">
              {/* Email */}

              <input
                name="email"
                className="email bg-black focus:ring-gray-400 bg-gradient-to-r from-card-clrs-left to-login-input outline outline-2 py-2 px-6 outline-all rounded-md"
                type="email"
              />
            </div>
            <div className="pass">
              {/* Password */}
              <input name="passwrod" type="password" />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

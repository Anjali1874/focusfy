import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Login({ setIsLoggedIn, setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/login",
        { email, password },
        { withCredentials: true }
      )
      .then((result) => {
        if (result.data === "Success") {
          axios
            .get("http://localhost:3001/user", { withCredentials: true })
            .then((response) => {
              if (response.data.user) {
                setIsLoggedIn(true);
                setUser({
                  email: response.data.user.email,
                  name: response.data.user.name,
                });
                navigate("/", { state: { user: response.data.user } }); // Redirect to home page
              }
            });
        } else {
          alert("Login failed");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="relative min-h-screen">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        autoPlay
        loop
        muted
      >
        <source src="C:/Users/anjali/Desktop/labs/MP/CodeAlchamiest/focusfy/src/public/bg.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="relative z-10 flex items-center justify-center h-screen m-10">
        <div className="flex justify-center items-center h-full w-full">
          <div className="grid gap-8 w-full max-w-md">
            <section
              id="back-div"
              className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl shadow-lg"
            >
              <div className="border-8 border-transparent rounded-xl bg-white dark:bg-gray-900 shadow-xl p-10 m-2">
                <h1 className="text-4xl font-semibold text-center cursor-default dark:text-gray-300 text-gray-900 mb-6">
                  Log in
                </h1>
                <form onSubmit={handleLogin} className="space-y-6">
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-lg dark:text-gray-300"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                      type="email"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="password"
                      className="block mb-2 text-lg dark:text-gray-300"
                    >
                      Password
                    </label>
                    <input
                      id="password"
                      className="border p-3 shadow-md dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 border-gray-300 rounded-lg w-full focus:ring-2 focus:ring-blue-500 transition transform hover:scale-105 duration-300"
                      type="password"
                      placeholder="Enter your password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <a
                    href="#"
                    className="text-blue-400 text-sm transition hover:underline"
                  >
                    Forget your password?
                  </a>
                  <button
                    className="w-full p-3 mt-4 text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="submit"
                  >
                    LOG IN
                  </button>
                </form>
                <div className="flex flex-col mt-4 text-sm text-center dark:text-gray-300">
                  <p>
                    Don't have an account?{" "}
                    <a
                      href="/signup"
                      className="text-blue-400 transition hover:underline"
                    >
                      Sign Up
                    </a>
                  </p>
                </div>
                <div id="third-party-auth" className="flex justify-center gap-4 mt-5">
                  {/* Third-party authentication buttons */}
                  <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                    <img
                      className="w-6 h-6"
                      src="https://ucarecdn.com/8f25a2ba-bdcf-4ff1-b596-088f330416ef/"
                      alt="Google"
                    />
                  </button>
                  <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                    <img
                      className="w-6 h-6"
                      src="https://ucarecdn.com/95eebb9c-85cf-4d12-942f-3c40d7044dc6/"
                      alt="LinkedIn"
                    />
                  </button>
                  <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                    <img
                      className="w-6 h-6 dark:invert"
                      src="https://ucarecdn.com/be5b0ffd-85e8-4639-83a6-5162dfa15a16/"
                      alt="GitHub"
                    />
                  </button>
                  <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                    <img
                      className="w-6 h-6"
                      src="https://ucarecdn.com/6f56c0f1-c9c0-4d72-b44d-51a79ff38ea9/"
                      alt="Facebook"
                    />
                  </button>
                  <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                    <img
                      className="w-6 h-6"
                      src="https://ucarecdn.com/82d7ca0a-c380-44c4-ba24-658723e2ab07/"
                      alt="Twitter"
                    />
                  </button>
                  <button className="p-2 rounded-lg hover:scale-105 transition transform duration-300 shadow-lg">
                    <img
                      className="w-6 h-6"
                      src="https://ucarecdn.com/3277d952-8e21-4aad-a2b7-d484dad531fb/"
                      alt="Apple"
                    />
                  </button>
                </div>
                <div className="mt-4 text-center text-sm text-gray-500">
                  <p>
                    By signing in, you agree to our{" "}
                    <a href="#" className="text-blue-400 transition hover:underline">
                      Terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-blue-400 transition hover:underline">
                      Privacy Policy
                    </a>
                    .
                  </p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import "../css/Auth.css";
import { toast } from "react-toastify";
import Link from "next/link";

const Auth = () => {
  const [active, setActive] = useState(false);

  const router = useRouter();

  // Login -->

  const [loginuser, setLoginUser] = useState({
    email: "",
    password: "",
  });

  const [buttonDisabledLogin, setButtonDisabledLogin] = useState(false);
  const [loginLoading, setLoginLoading] = useState(false);

  const onLogin = async (e) => {
    e.preventDefault(); // Prevent page reload
    setLoginLoading(true);
    setButtonDisabledLogin(true);

    try {
      const res = await axios.post("/api/users/login", loginuser);
      console.log("Login Success", res.data);
      setLoginLoading(false);
      router.push("/welcome");
      toast.success("Login Successfully");
    } catch (error) {
      console.log("Login Failed", error.message);
      toast.error("Login Failed");
      setLoginLoading(false);
      setButtonDisabledLogin(false);
    }
  };

  useEffect(() => {
    if (loginuser.email.length > 0 && loginuser.password.length > 0) {
      setButtonDisabledLogin(false);
    } else {
      setButtonDisabledLogin(true);
    }
  }, [loginuser]);

  // ...................................................................................................................................................................................................

  // Signup -->

  const [signupuser, setSignupUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
    confirmpassword: "",
  });

  const [buttonDisabledSignup, setButtonDisabledSignup] = useState(false);
  const [signupLoading, setSignupLoading] = useState(false);

  const onSignup = async (e) => {
    e.preventDefault();
    setSignupLoading(true);
    setButtonDisabledSignup(true);

    // Check if password and confirm password match
    if (signupuser.password !== signupuser.confirmpassword) {
      toast.error("Passwords do not match");
      setSignupLoading(false);
      setButtonDisabledSignup(false);
      return;
    }

    console.log("signupuser", signupuser);

    try {
      console.log("signupuser", signupuser);
      const res = await axios.post("/api/users/signup", signupuser);
      console.log("Signup Success", res.data);
      setSignupLoading(false);
      router.push("/auth");
      toast.success("Signup Successfully");

      // Send verification mail alert
      setTimeout(() => {
        toast.info("Please Check you mail for verification");
      }, 5000);
    } catch (error) {
      console.log("Signup Failed", error.message);
      toast.error(error.message);
      setSignupLoading(false);
      setButtonDisabledSignup(false);
    }
  };

  useEffect(() => {
    if (
      signupuser.username.length > 0 &&
      signupuser.email.length > 0 &&
      signupuser.phone.length > 0 &&
      signupuser.password.length > 0 &&
      signupuser.confirmpassword.length > 0
    ) {
      setButtonDisabledSignup(false);
    } else {
      setButtonDisabledSignup(true);
    }
  }, [signupuser]);

  return (
    <div className="flex justify-center items-center min-h-[90vh] relative">
      <div
        className={`auth-container relative z-10 border-primary border-2 flex bg-background rounded-2xl max-w-4xl ${
          active ? "active" : ""
        } h-auto w-full sm:h-[400px] sm:w-[600px] md:h-[500px] md:w-[750px] lg:h-[524px] lg:w-[957px]`}
        style={{
          boxShadow: "0px 22px 70px 10px rgb(163,82,133)",
        }}
      >
        <div className="curved-shape1"></div>
        <div className="curved-shape2"></div>

        {/* LOGIN FORM */}
        <div className="form-box Login">
          <div className="relative">
            <h2
              className="animation text-center text-[2.5rem] font-[800] text-primary mb-8 uppercase"
              style={{ "--D": 0, "--S": 21 }}
            >
              Login
            </h2>
            {/* Login heading underline */}
            <div
              className="animation h-[0.4rem] w-[6rem] top-[3.7rem] md:top-[3.5rem] rounded-[10px] left-[6.15rem] md:left-[8.3rem] bg-primary absolute"
              style={{ "--D": 1, "--S": 22 }}
            ></div>
          </div>
          <form>
            <div
              className="input-box animation"
              style={{ "--D": 2, "--S": 23 }}
            >
              <input
                id="login_email"
                type="email"
                value={loginuser.email}
                onChange={(e) =>
                  setLoginUser({ ...loginuser, email: e.target.value })
                }
                required
              />
              <label htmlFor="login_username">Email</label>
              <i className="bx bxs-user"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--D": 3, "--S": 24 }}
            >
              <input
                id="login_password"
                type="password"
                value={loginuser.password}
                onChange={(e) =>
                  setLoginUser({ ...loginuser, password: e.target.value })
                }
                autoComplete="true"
                required
              />
              <label htmlFor="login_password">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>

            {/* Links and buttons */}
            <div
              className="animation flex justify-between text-sm mt-2 text-blue-500 uppercase"
              style={{ "--D": 4, "--S": 25 }}
            >
              <Link href="/forgetpassword">Forgot Password</Link>
              <p
                className="SignUpLink cursor-pointer"
                onClick={() => setActive(true)}
              >
                Create Account
              </p>
            </div>

            <div
              className="input-box animation"
              style={{ "--D": 5, "--S": 26 }}
            >
              <button
                onClick={onLogin}
                type="submit"
                disabled={buttonDisabledLogin || loginLoading}
                className={`uppercase w-full ${
                  buttonDisabledLogin
                    ? "bg-primarybtn hover:bg-primary cursor-not-allowed"
                    : "bg-primarybtn hover:bg-primary"
                } text-white py-3 px-4 rounded-full transition duration-300`}
              >
                {signupLoading ? "LOGIN..." : "LOGIN"}
              </button>
            </div>

            {/* Registration link */}
            <div
              className="regi-link animation mt-6 text-center text-sm text-gray-600 uppercase"
              style={{ "--D": 6, "--S": 27 }}
            >
              <p>
                Don&apos;t have an account?{" "}
                <a
                  href="#"
                  className="SignUpLink text-primary font-bold"
                  onClick={() => setActive(true)}
                >
                  Sign Up
                </a>
              </p>
            </div>
          </form>
        </div>

        {/* INFO CONTENT */}
        <div className="info-content Login text-white uppercase top-[5%]">
          <h2
            className="relative animation text-6xl font-bold mb-2 w-[115%] right-[15%]"
            style={{ "--D": 0, "--S": 20 }}
          >
            WELCOME BACK !
          </h2>
          <p className="animation text-sm" style={{ "--D": 1, "--S": 21 }}>
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry&apos;s standard dummy.
          </p>
        </div>

        {/* REGISTRATION FORM */}
        <div className="form-box Register">
          <div className="relative">
            <h2
              className="animation text-center text-[2.5rem] font-[800] text-primary uppercase"
              style={{ "--li": 17, "--S": 0 }}
            >
              Sign Up
            </h2>
            {/* Signup heading underline */}
            <div
              className="animation h-[0.4rem] w-[6rem] top-[3.5rem] rounded-[10px] left-[7.25rem] bg-primary absolute"
              style={{ "--li": 18, "--S": 1 }}
            ></div>
          </div>
          <form>
            <div
              className="input-box animation"
              style={{ "--li": 19, "--S": 2 }}
            >
              <input
                id="register_username"
                type="text"
                value={signupuser.username}
                onChange={(e) =>
                  setSignupUser({ ...signupuser, username: e.target.value })
                }
                autoComplete="true"
                required
              />
              <label htmlFor="register_username">Username</label>
              <i className="bx bxs-user-rectangle"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--li": 20, "--S": 3 }}
            >
              <input
                id="register_email"
                type="email"
                value={signupuser.email}
                onChange={(e) =>
                  setSignupUser({ ...signupuser, email: e.target.value })
                }
                autoComplete="true"
                required
              />
              <label htmlFor="register_email">Email</label>
              <i className="bx bxs-envelope"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--li": 21, "--S": 4 }}
            >
              <input
                id="register_phone"
                type="text"
                value={signupuser.phone}
                onChange={(e) =>
                  setSignupUser({ ...signupuser, phone: e.target.value })
                }
                autoComplete="true"
                required
              />
              <label htmlFor="register_phone">Phone</label>
              <i className="bx bxs-phone"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--li": 22, "--S": 5 }}
            >
              <input
                id="register_password"
                type="password"
                value={signupuser.password}
                onChange={(e) =>
                  setSignupUser({ ...signupuser, password: e.target.value })
                }
                autoComplete="true"
                required
              />
              <label htmlFor="register_password">Password</label>
              <i className="bx bxs-lock-alt"></i>
            </div>
            <div
              className="input-box animation"
              style={{ "--li": 23, "--S": 6 }}
            >
              <input
                id="register_confirm_password"
                type="password"
                value={signupuser.confirmpassword}
                onChange={(e) =>
                  setSignupUser({
                    ...signupuser,
                    confirmpassword: e.target.value,
                  })
                }
                autoComplete="true"
                required
              />
              <label htmlFor="register_confirm_password">
                Confirm Password
              </label>
              <i className="bx bxs-lock"></i>
            </div>

            <div
              className="input-box animation"
              style={{ "--li": 24, "--S": 7 }}
            >
              <button
                onClick={onSignup}
                type="submit"
                disabled={buttonDisabledSignup || signupLoading}
                className={`uppercase w-full ${
                  buttonDisabledSignup
                    ? "bg-primarybtn hover:bg-primary cursor-not-allowed"
                    : "bg-primarybtn hover:bg-primary"
                } text-white py-3 px-4 rounded-full transition duration-300`}
              >
                {signupLoading ? "SUBMITTING..." : "SUBMIT"}
              </button>
            </div>

            {/* Registration link */}
            <div
              className="regi-link animation mt-6 text-center text-sm text-gray-600 uppercase"
              style={{ "--li": 25, "--S": 8 }}
            >
              <p>
                Already have an account?{" "}
                <a
                  href="#"
                  className="SignInLink text-primary font-bold hover:underline"
                  onClick={() => setActive(false)}
                >
                  Login
                </a>
              </p>
            </div>
          </form>
        </div>
        <div className="info-content Register top-[10%] left-[-2%]">
          <h2
            className="animation text-white text-6xl font-bold mb-6"
            style={{ "--li": 17, "--S": 0 }}
          >
            WELCOME BACK
          </h2>
          <p
            className="animation text-white text-sm mb-10 uppercase"
            style={{ "--li": 18, "--S": 1 }}
          >
            Lorem ipsum is simply dummy text of the printing and typesetting
            industry. Lorem ipsum has been the industry&apos;s standard dummy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;

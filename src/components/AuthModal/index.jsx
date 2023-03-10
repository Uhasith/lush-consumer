import { useState } from "react";
import { request } from "src/request";
import logo from "../../assets/images/Logo.png";
import Loading from "../Loading";

const AuthModal = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const RegisterationForm = () => {
    const [fullName, setFullName] = useState("");
    const [fullNameError, setFullNameError] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [phoneNumberError, setPhoneNumberError] = useState("");
    const [address, setAddress] = useState("");
    const [addressError, setAddressError] = useState("");
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleRegistration = async (event) => {
      event.preventDefault();
      try {
        if (fullName == "") {
          return setFullNameError("Fullname is required");
        }
        if (phoneNumber == "") {
          return setPhoneNumberError("Phone number is required");
        }
        if (address == "") {
          return setAddressError("Address is required");
        }
        if (email == "") {
          return setEmailError("A valid email is required");
        }
        if (password == "") {
          return setPasswordError("A strong password is required");
        } else {
          const payload = {
            firstName: fullName.split(" ")?.[0],
            lastName: fullName.split(" ")?.[1] || "",
            userType: "Visitor",
            email,
            password,
            phoneNumber,
            address,
          };
          setIsLoading(true);
          const response = await request("POST", "/v1/auth/register", payload);
          if (response?.tokens) {
            localStorage.setItem("tokens", JSON.stringify(response.tokens));
            localStorage.setItem("user", JSON.stringify(response.user));
          }
        }
        setIsLoading(false);
        window.location.reload();
      } catch (err) {
        console.log(err?.message);
        setIsLoading(false);
      }
    };

    return (
      <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="pb-2">
            <label for="email-address" className="sr-only">
              Full Name
            </label>
            <input
              name="fullName"
              type="text"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Full Name"
              onChange={(event) => setFullName(event.target.value)}
              onFocus={() => setFullNameError("")}
            />
            {fullNameError && (
              <p className="inline-flex text-sm text-red-700">
                {fullNameError}
              </p>
            )}
          </div>
          <div className="pb-2">
            <label for="email-address" className="sr-only">
              Phone Number
            </label>
            <input
              name="phoneNumber"
              type="text"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Phone Number"
              onChange={(event) => setPhoneNumber(event.target.value)}
              onFocus={() => setPhoneNumberError("")}
            />
            {phoneNumberError && (
              <p className="inline-flex text-sm text-red-700">
                {phoneNumberError}
              </p>
            )}
          </div>
          <div className="pb-2">
            <label for="email-address" className="sr-only">
              Address
            </label>
            <input
              name="address"
              type="text"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Address"
              onChange={(event) => setAddress(event.target.value)}
              onFocus={() => setAddressError("")}
            />
            {addressError && (
              <p className="inline-flex text-sm text-red-700">{addressError}</p>
            )}
          </div>
          <div className="pb-2">
            <label for="email-address" className="sr-only">
              Email address
            </label>
            <input
              name="email"
              type="email"
              autocomplete="email"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Email address"
              onChange={(event) => setEmail(event.target.value)}
              onFocus={() => setEmailError("")}
            />
            {emailError && (
              <p className="inline-flex text-sm text-red-700">{emailError}</p>
            )}
          </div>
          <div className="pb-2">
            <label for="password" className="sr-only">
              Password
            </label>
            <input
              name="password"
              type="password"
              autocomplete="current-password"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              onFocus={() => setPasswordError("")}
            />
            {passwordError && (
              <p className="inline-flex text-sm text-red-700">
                {passwordError}
              </p>
            )}
          </div>
        </div>

        <div>
          <button
            className="modal-action group relative flex w-full justify-center rounded-md border border-transparent bg-[#097435] py-2 px-4 text-sm font-medium text-white hover:bg-[#009879] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            onClick={handleRegistration}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-white group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Register
          </button>
        </div>
      </form>
    );
  };

  const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const handleLogin = async (event) => {
      event.preventDefault();
      try {
        if (email == "") {
          return setEmailError("A valid email is required");
        }
        if (password == "") {
          return setPasswordError("A strong password is required");
        } else {
          setIsLoading(true);
          const payload = { email, password };
          const response = await request("POST", "/v1/auth/login", payload);
          if (response?.tokens) {
            localStorage.setItem("tokens", JSON.stringify(response.tokens));
            localStorage.setItem("user", JSON.stringify(response.user));
          }

          setIsLoading(false);
          window.location.reload();
        }
      } catch (error) {
        console.log(error.message);
        setIsLoading(false);
      }
    };
    return (
      <form className="mt-8 space-y-6">
        <input type="hidden" name="remember" value="true" />
        <div className="-space-y-px rounded-md shadow-sm">
          <div className="pb-2">
            <label for="email-address" className="sr-only">
              Email address
            </label>
            <input
              name="email"
              type="email"
              autocomplete="email"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Email address"
              onChange={(event) => setEmail(event.target.value)}
              onFocus={() => setEmailError("")}
            />
            {emailError && (
              <p className="inline-flex text-sm text-red-700">{emailError}</p>
            )}
          </div>
          <div className="pb-2">
            <label for="password" className="sr-only">
              Password
            </label>
            <input
              name="password"
              type="password"
              autocomplete="current-password"
              className="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-[#009879] focus:outline-none focus:ring-white sm:text-sm"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              onFocus={() => setPasswordError("")}
            />
            {passwordError && (
              <p className="inline-flex text-sm text-red-700">
                {passwordError}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-[#097435] focus:ring-[#009879]"
            />
            <label
              for="remember-me"
              className="ml-2 block text-sm text-gray-900"
            >
              Remember me
            </label>
          </div>

          <div className="text-sm">
            <a
              href="#"
              className="font-medium text-[#097435] hover:text-[#009879]"
            >
              Forgot your password?
            </a>
          </div>
        </div>

        <div>
          <button
            className="modal-action group relative flex w-full justify-center rounded-md border border-transparent bg-[#097435] py-2 px-4 text-sm font-medium text-white hover:bg-[#009879] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
            onClick={handleLogin}
          >
            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-white group-hover:text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
            Sign in
          </button>
        </div>
      </form>
    );
  };

  return (
    <>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md space-y-8">
              <div>
                <div className="flex justify-center">
                  <img src={logo} className="mr-3 h-6 sm:h-9" alt="logo-img" />
                </div>

                <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
                  {isLogin ? "Sign in to your account" : "Create an account"}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                  Or
                  <span
                    className="font-medium text-[#097435] hover:text-[#[#009879]] pl-2 cursor-pointer"
                    onClick={() => setIsLogin((status) => !status)}
                  >
                    {isLogin ? "Create an account" : "Sign in to your account"}
                  </span>
                </p>
              </div>
              {isLogin ? <LoginForm /> : <RegisterationForm />}
            </div>
          </div>
        </label>
      </label>
      {isLoading && <Loading />}
    </>
  );
};

export default AuthModal;

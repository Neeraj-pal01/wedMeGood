import React, { useState } from 'react'


export default function Login() {
    const [isRightPanelActive, setIsRightPanelActive] = useState(false);
    
  
    return (
        <>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
        <div
          className={`relative w-[768px] max-w-full min-h-[480px] bg-white shadow-lg rounded-lg overflow-hidden ${
            isRightPanelActive ? "right-panel-active" : ""
          }`}
          id="container"
        >
          {/* Sign-Up Container */}
          <div
            className={`absolute top-0 h-full transition-all duration-500 ease-in-out w-1/2 ${
              isRightPanelActive ? "translate-x-full opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <form className="flex flex-col items-center justify-center h-full px-12 bg-white text-center">
              <h1 className="font-bold mb-4">Create Account</h1>
              <div className="flex space-x-2 my-4">
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="text-sm">or use your email for registration</span>
              <input
                type="text"
                placeholder="Name"
                className="mt-4 p-3 w-full bg-gray-100 rounded focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                className="mt-2 p-3 w-full bg-gray-100 rounded focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="mt-2 p-3 w-full bg-gray-100 rounded focus:outline-none"
              />
              <button className="mt-4 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600">
                Sign Up
              </button>
            </form>
          </div>
  
          {/* Sign-In Container */}
          <div
            className={`absolute top-0 h-full transition-all duration-500 ease-in-out w-1/2 ${
              isRightPanelActive ? "-translate-x-full opacity-0 z-0" : "z-10"
            }`}
          >
            <form className="flex flex-col items-center justify-center h-full px-12 bg-white text-center">
              <h1 className="font-bold mb-4">Sign in</h1>
              <div className="flex space-x-2 my-4">
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <i className="fab fa-google-plus-g"></i>
                </a>
                <a
                  href="#"
                  className="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-gray-500"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </div>
              <span className="text-sm">or use your account</span>
              <input
                type="email"
                placeholder="Email"
                className="mt-4 p-3 w-full bg-gray-100 rounded focus:outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="mt-2 p-3 w-full bg-gray-100 rounded focus:outline-none"
              />
              <a href="#" className="mt-2 text-sm text-gray-600 hover:underline">
                Forgot your password?
              </a>
              <button className="mt-4 px-8 py-3 bg-red-500 text-white rounded-full hover:bg-red-600">
                Sign In
              </button>
            </form>
          </div>
  
          {/* Overlay Container */}
          <div
            className={`absolute top-0 left-1/2 h-full w-1/2 bg-gradient-to-r from-red-500 to-pink-500 text-white transition-transform duration-500 ${
              isRightPanelActive ? "-translate-x-full" : "translate-x-0"
            }`}
          >
            <div className="flex flex-col items-center justify-center h-full px-10 text-center">
              <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-1/2 h-full">
                {isRightPanelActive ? (
                  <div>
                    <h1 className="text-xl font-bold">Hello, Friend!</h1>
                    <p className="mt-4">
                      Enter your personal details and start your journey with us
                    </p>
                    <button
                      onClick={() => setIsRightPanelActive(false)}
                      className="mt-4 px-8 py-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-red-500"
                    >
                      Sign In
                    </button>
                  </div>
                ) : (
                  <div>
                    <h1 className="text-xl font-bold">Welcome Back!</h1>
                    <p className="mt-4">
                      To keep connected with us, please log in with your personal
                      info
                    </p>
                    <button
                      onClick={() => setIsRightPanelActive(true)}
                      className="mt-4 px-8 py-3 bg-transparent border border-white rounded-full hover:bg-white hover:text-red-500"
                    >
                      Sign Up
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      </>
    );
  };
  
  

import React from "react";
import "../styles/DongleFont.css";
import Image from "../assets/images/full-logo.svg"

const LoginPage = () => {
  return (
    <div className="flex justify-center items-center h-[100vh] select-none z-0">
      <div className="flex w-[650px] h-[650px]">
        <div className="flex-col flex-1 h-full bg-gradient bg-gradient-to-bl from-tabletop to-tablebottom rounded-3xl drop-shadow-2xl">
          <div className="flex flex-col justify-center items-center h-[60%] gap-8">
            {/* Название сайта */}
            <img src={Image} alt="" className="mt-[4rem] w-[293px] h-[80px]"/>
            {/* Поле для ввода логина */}
            <input
              type="text"
              name="username"
              placeholder="Username"
              autoComplete="off"
              className="mt-[1rem] text-[1.4rem] font-light tracking-widest border-b border-white outline-none placeholder:text-white text-white bg-transparent transition-all duration-300 transform focus:scale-[105%] ease-in-out"
            />
            {/* Поле для ввода пароля */}
            <input
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              className="mb-16 text-[1.4rem] font-light tracking-widest border-b border-white outline-none placeholder:text-white text-white bg-transparent transition-all duration-300 transform focus:scale-[105%] ease-in-out"
            />
          </div>
          <div className="flex h-[20%] justify-center gap-6">
            <div className="flex-none">
              {/* Кнопка авторизации */}
              <button className="rounded-full bg-transparent border border-white py-3 px-11 text-white font-light tracking-widest text-lg transition-all duration-300 transform hover:bg-main hover:border-transparent hover:text-backgroundbottom hover:scale-[105%] ease-in-out">
                Sing In
              </button>
            </div>
            {/* Кнопка регистрации */}
            <div className="flex-none">
              <button className="rounded-full bg-transparent border border-white py-3 px-10 text-white font-light tracking-widest text-lg transition-all duration-300 transform hover:bg-main hover:border-transparent hover:text-backgroundbottom hover:scale-[105%] ease-in-out">
                Sing Up
              </button>
            </div>
          </div>
          <div className="flex justify-center h-[20%]">
            <div className="flex h-min">
              {/* Url для восстановления пароля */}
              <a
                href="/resetpass"
                className="mt-4 tracking-widest font-light text-white text-xl transition-all transform hover:border-b hover:scale-[105%] duration-300 ease-in-out"
              >
                Forgot Password?
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

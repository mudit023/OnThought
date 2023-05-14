import React from "react";
import classes from "./LandingPage.module.css";
import { Link, NavLink } from "react-router-dom";

function LandingPage() {
  return (
    <div className="container min-w-full min-h-[100vh] pt-10">
      <nav
        className={"flex justify-between items-center w-full py-3 px-5 mb-10"}
      >
        <div className="text-6xl font-medium text-cyan-100">OnThought</div>
        <div>
          <Link
            to="/home"
            className="text-4xl font-medium bg-yellow-300 py-1 px-3 rounded"
          >
            Check Now
          </Link>
        </div>
      </nav>
      <main className="flex items-start">
        <div className="flex w-full h-[84vh] flex-col items-left justify-center border pl-12 border-[#2c2c2cd1] mb-2">
          <div className="flex flex-col gap-4 leading-none">
            <h2 className="text-[15rem] font-bold text-yellow-400 tracking-tighter">
              Think.
            </h2>
            <h2 className="sm:text-[15rem] font-bold text-yellow-300 tracking-tighter">
              Write.
            </h2>
            <h2 className="sm:text-[15rem] font-bold text-yellow-200 tracking-tighter">
              Repeat.
            </h2>
            <p className="text-4xl text-[#525252d1] mt-10 max-w-4xl font-medium">
              <span className="underline underline-offset-4 text-yellow-100">
                OnThought
              </span>{" "}
              is a place for all your thoughts that need your attention
            </p>
          </div>
        </div>
        <div className="flex flex-col h-[84vh]">
          <div className="bg-inherit hover:bg-[#0f0f0fd1] border border-[#2c2c2cd1] border-l-0 p-8 w-[28rem] h-full flex flex-col justify-evenly items-start gap-1">
            <div className="text-5xl text-[#545454] font-medium">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old.
              </p>
            </div>
            <div>
              <Link
                to="/home"
                className="text-4xl font-medium bg-yellow-300 py-1 px-3 rounded"
              >
                Add Note
              </Link>
            </div>
          </div>
          <div className="bg-inherit hover:bg-[#0f0f0fd1] border border-t-0 border-l-0 border-[#2c2c2cd1] p-8 w-[28rem] h-full flex flex-col justify-evenly items-start gap-1">
            <div className="text-5xl text-[#545454] font-medium">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                ante risus, mollis non enim id, fermentum eleifend metus. Mauris
                tincidunt dui quis eros convallis scelerisque
              </p>
            </div>
            <div>
              <Link
                to="/home"
                className="text-4xl font-medium bg-yellow-300 py-1 px-3 rounded"
              >
                Add Note
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default LandingPage;

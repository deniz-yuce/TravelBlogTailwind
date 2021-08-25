import React from "react";
import { ReactComponent as ReactMe } from "./sun.svg";
import { ReactComponent as ReactHome } from "./home.svg";
import { ReactComponent as ReactMenu } from "./menu.svg";

export function Header() {
  return (
    <div className="flex justify-between w-full my-8">
      <div className="ml-10">
        <a href="#">
          <ReactMenu />
        </a>
      </div>
      <div className="">
        <a href="#">
          <ReactHome />
        </a>
      </div>
      <div className="mr-10">
        <a href="#">
          <ReactMe className="" />
        </a>
      </div>
    </div>
  );
}

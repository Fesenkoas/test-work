import React from "react";
import { AddItem } from "./AddItem";
import { Header } from "./Header";
import { Main } from "./Main";
import { Sort } from "./Sort";

export const Layout = () => {
  return (
    <React.Fragment>
      <div className="container mx-auto">
        <div className="w-full bg-white opacity-80 mt-10 rounded-lg">
          <Header />
        </div>
        <div className="w-full bg-white opacity-80 mt-10 rounded-lg">
          <Sort />
        </div>

        <div className="w-full bg-white opacity-80 mt-10 rounded-lg">
          <AddItem />
        </div>

        <div className="w-full bg-white opacity-80 mt-10 rounded-lg">
          <Main />
        </div>
      </div>
    </React.Fragment>
  );
};

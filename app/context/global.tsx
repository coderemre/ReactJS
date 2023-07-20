"use client";
import React, { createContext, useContext } from "react";

export const GlobalContext = createContext<any | null>(null);

type Props = {
  children: React.ReactNode;
};

class GlobalContextProvider extends React.Component<Props> {
  setContext = (keyOrObject: any, value?: any) => {
    if (keyOrObject instanceof Object) {
      this.setState({ ...this.state, ...keyOrObject });
    } else {
      this.setState({ [keyOrObject]: value });
    }
  };

  state = {
    view: "index",
    modalData: { name: "", type: "", title: "", text: "" },
    setContext: this.setContext,
  };
  render(this: any) {
    return (
      <GlobalContext.Provider value={{ ...this.state }}>
        {this.props.children}
      </GlobalContext.Provider>
    );
  }
}

export default GlobalContextProvider;

export const useGlobalContext = () => useContext(GlobalContext);

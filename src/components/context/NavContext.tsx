import React, { createContext, useState, ReactNode } from "react";

interface NavContextType {
  collapsed: boolean;
  toggleNavBar: (state?: boolean) => void;
}

const defaultNavContextValue: NavContextType = {
  collapsed: true,
  toggleNavBar: () => {},
};

const NavContext = createContext<NavContextType>(defaultNavContextValue);

const NavContextProvider = ({ children }: { children: ReactNode }) => {
  const [collapsed, setCollapsedState] = useState(true);

  const toggleNavBar = (state?: boolean) => {
    if (state !== undefined) {
      setCollapsedState(state);
    } else {
      setCollapsedState((prevState) => !prevState);
    }
  };

  return (
    <NavContext.Provider value={{ collapsed, toggleNavBar }}>
      {children}
    </NavContext.Provider>
  );
};

export { NavContext, NavContextProvider };

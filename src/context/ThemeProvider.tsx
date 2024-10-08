import React, { createContext, useContext, useEffect, useState } from "react";

// type vs. interface: The difference is that type can represent any type, while interface can only represent object types.

// TYPES:

type Theme = "light" | "dark" | "system"; // A type that represents the possible themes. "system" means that the theme is determined by the system settings of the user.

// type ThemeProviderProps is a type that represents the props of the ThemeProvider component.
type ThemeProviderProps = {
  children: React.ReactNode; // React.ReactNode is a type that represents a React node. It's a common type for props.children.
  defaultTheme?: Theme; // The default theme to use.
  storageKey?: string; // The key to use when storing the theme in local storage.
};

//  type that specifies the structure of the state that the ThemeProvider will manage.
type ThemeProviderState = {
  theme: Theme; // The current theme.
  setTheme: (theme: Theme) => void; // setterfunction to set the theme; it takes a theme as an argument and returns void. Void is a type that represents the absence of a value. You can use it, as the return type of a function that doesn't return anything. Why does this function return void? Because it's a setter function that doesn't return anything, it just sets the theme.
};

// Instead, we create an object of that type, like this:
const initialState: ThemeProviderState = {
  // The initial state of the ThemeProvider component. Why : instead of = ? Because we are defining a type, not a value. Remember: You cannot assign a value to a type.
  // initialState is declared to be of the type ThemeProviderState.
  // This enforces that the structure of initialState must adhere to what ThemeProviderState defines.
  theme: "system", // theme is initialized to "system"
  setTheme: () => {}, // setTheme is assigned a default function that does nothing.
};

// CONTEXT:

const ThemeProviderContext = createContext<ThemeProviderState>(initialState); // without type assertion this would just be: createContext(initialState)

export function ThemeProvider({
  children, // The children of the ThemeProvider component. I.e., the components that are wrapped by the ThemeProvider.
  defaultTheme = "system",
  storageKey = "vite-ui-theme", // The key to use when storing the theme in local storage.
  ...props // The rest of the props passed to the ThemeProvider component. I.e., props like className, style, etc. that are not explicitly defined in the ThemeProviderProps type.
}: ThemeProviderProps) {
  // : ThemeProviderProps is a type assertion that tells TypeScript that the props passed to the ThemeProvider component must adhere to the ThemeProviderProps type.

  // STATE:
  const [theme, setTheme] = useState<Theme>( // useState<Theme> is a type assertion that tells TypeScript that the state variable theme must be of type Theme.
    () =>
      (localStorage.getItem(storageKey) as Theme) || defaultTheme // the initial value of the theme state is defined by a function that returns the theme stored in local storage or the default theme if no theme is stored.
  );
}

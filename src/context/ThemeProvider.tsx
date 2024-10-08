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

  // The function ThemeProvider gets an object as an argument that adheres to the ThemeProviderProps type.
  // The props (defaultTheme, storageKey, className, and children) are all packaged into one object by React when the component is rendered. In your case, the ThemeProvider function receives this object as its first argument.
  // Instead of accessing each individual prop like props.children, props.defaultTheme, etc., the function immediately destructures the object in its parameter, which makes it easier to work with the individual properties.
  // You can now use 'children', 'defaultTheme', and 'storageKey' directly
  // without needing to prefix them with 'props.'.

  // We could also write it like this (without destructuring):

  /* export function ThemeProvider(props) {
    Accessing props individually from the 'props' object
    const children = props.children;
    const defaultTheme = props.defaultTheme || "system"; // Providing default value if not passed
    const storageKey = props.storageKey || "vite-ui-theme"; // Providing default value if not passed
    const restProps = { ...props }; // Capturing any additional props like className, style, etc.
    
   .... Function implementation continues...
  } */

  // STATE:
  const [theme, setTheme] = useState<Theme>( // useState<Theme> is a type assertion that tells TypeScript that the state variable theme must be of type Theme.
    () => (localStorage.getItem(storageKey) as Theme) || defaultTheme // the initial value of the theme state is defined by a function that returns the theme stored in local storage or the default theme if no theme is stored.
  );

  // EFFECTS:

  useEffect(() => {
    const root = window.document.documentElement; // The root element of the document. We need this here, because we want to change the theme of the whole application.

    // Set the theme class on the root
    root.classList.remove("light", "dark"); // Remove the light and dark classes from the root element, because we want to apply the new theme. This is necessary to avoid conflicts between different themes.

    if (theme === "system") {
      // If the theme is set to "system"...
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light"; // If the user prefers a dark theme, set the theme to "dark", otherwise set it to "light".

      root.classList.add(systemTheme); // Add the class of the preferred user theme to the root element.
      return;
    }

    root.classList.add(theme);
  }, [theme]);

  const value = {
    theme: theme, // The current theme.
    setTheme: (theme: Theme) => {
      // key setTheme is assigned a function that takes a theme as an argument and sets the theme.
      localStorage.setItem(storageKey, theme); // Store the theme in local storage.
      setTheme(theme); // Set the theme.
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {" "}
      {/* {...props} is a spread operator that passes all the props that are not explicitly defined in the ThemeProviderProps type to the Provider component. This allows to add additional props to the ThemeProvider component without having to explicitly define them in the ThemeProviderProps type. {value} is the value that the ThemeProviderContext.Provider will provide to its children, which includes the theme and setTheme function. */}
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const themeContext = useContext(ThemeProviderContext);

  // If the themeContext is undefined, it means that the useTheme hook is being used outside of a ThemeProvider component. This is an error
  if (themeContext === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");

    return themeContext;
  }
};

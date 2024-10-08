import "./App.css";
import Router from "../src/router/Router.tsx";
import { ThemeProvider } from "./context/ThemeProvider.tsx";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;

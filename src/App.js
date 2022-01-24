import styled, { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import media from "./styles/media";
import ThemeProviderPrac from "./ThemeProviderPrac";
import Router from "./router/index";
import Header from "./components/Layout/Header/Header";

function App() {
  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className="App">
      <Header />
      <div id="portal"></div>
      <Router />
    </div>
  );
}

export default App;

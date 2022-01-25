import Router from "./router/index";
import Header from "./components/Layout/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div id="portal"></div>
      <Router />
    </div>
  );
}

export default App;

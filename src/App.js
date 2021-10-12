import Calculator from "./Components/Calculator/Calculator";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

function App() {
  return (
    <>
      <h1>Calculator</h1>
      <Provider store={store}>
        <Calculator />
      </Provider>
      <footer>Created by <a href="https://github.com/Lucas0liveir" target="_blank" rel="noreferrer">Lucas oliveira</a></footer>
    </>
  );
}

export default App;

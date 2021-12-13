/** @format */

import "./style/App.css";
import { Form } from "./components/Form";
import { RequestsBlock } from "./components/RequestsBlock";

function App() {
  // let variables = [];

  // const url =
  //   "https://vpic.nhtsa.dot.gov/api/vehicles/decodevin/5UXWX7C5*BA?format=json";

  // const getVariables = async () => {
  //   await fetch(url)
  //     .then((response) => response.json())
  //     .then((json) => (variables = [...json.Results]));
  //   console.log(variables);
  // };

  return (
    <div className='App'>
      <Form />
      <RequestsBlock />
    </div>
  );
}

export default App;

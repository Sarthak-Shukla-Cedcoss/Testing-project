import "./App.css";
import CakeContainer from "./Components/CakeContainer";
import FormikComp from "./Components/FormikComp";
import FormikComp1 from "./Components/FormikComp1";
import Lodashcomp1 from "./Components/Lodashcomp1";
import { Provider } from 'react-redux'
import store from "./redux/store";
import HooksCakeContainer from "./Components/HooksCakeContainer";

function App() {
  return (
    <Provider store={store}>
      <div style={{ border: "1px", borderStyle: "dotted" }}>
        <span>Formik form using formik and its form field</span>
        <FormikComp />
      </div>
      <div style={{ border: "1px", borderStyle: "dotted" }}>
        <span>useFormik()</span>
        <FormikComp1 />
      </div>
      <div>
        <span>Lodash</span>
        <Lodashcomp1 />
      </div>
      <div>
        <CakeContainer/>
      </div>
      <div>
        <HooksCakeContainer/>
      </div>
    </Provider>
  );
}

export default App;

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import StepOne from "./views/StepOne/StepOne";
import StepTwo from "./views/StepTwo/StepTwo";
import StepThree from "./views/StepThree/StepThree";
import Result from "./views/Result/Result";

function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<StepOne />} />
          <Route path="/step_two" element={<StepTwo />} />
          <Route path="/step_three" element={<StepThree />} />
          <Route path="/result" element={<Result />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

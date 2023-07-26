import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Shop from "./pages/shop/Shop";
import BreadCrumb from "./components/BreadCrumb";
/* import Footer from "./components/Footer"; */

function App() {
  return (
    <div>
      <NavBar />
      <BreadCrumb/>
      <div className="px-6 sm:px-14 md:px-16 lg:px-24 xl:px-48 pt-12 pb-12">
        <Routes>
          <Route path="/" element={<Shop />} />
        </Routes>
      </div>
      {/* <Footer/> */}
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
// Template
import { Footer } from "./layout/Footer";
import { Header } from "./layout/Header";
import { Main } from "./layout/Main";
// Pages
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Success } from "./pages/Success";
import { SuccessCreate } from "./pages/SuccessCreate";
import { Error404 } from "./pages/Error404";
import { Lands } from "./pages/Lands";
import { Reservation } from "./pages/Reservation";


import { DateRangeProvider } from "./context/DateRangeProvider";
import { AuthProvider } from "./providers/AuthProvider";

import { ProductDetails } from "./components/ProductDetails";
import { MetaverseInfo } from "./pages/MetaverseInfo";
import { CreateLand } from "./pages/CreateLand";
import { AdminRoute } from "./routes/AdminRoute";
import { About } from "./pages/About";
import { ScrollToTop } from "./hooks/ScrollToTop";

function App() {
  return (
    <Router>
      <AuthProvider>
        <DateRangeProvider>
          <ToastContainer />
          <ScrollToTop />
          <Header />
          <Main>
            <Routes>
              <Route index path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/lands" element={<Lands />} />
              <Route path="/lands/:landId" element={<ProductDetails />} />
              <Route path="/reservation/:landId" element={<Reservation />} />
              <Route path="/success" element={<Success />} />
              <Route path="/faq" element={<MetaverseInfo />} />
              <Route path="/about" element={<About />} />
              <Route path="/admin/lands/create" element={<AdminRoute><CreateLand /></AdminRoute>} />
              <Route path="/admin/lands/create/success" element={<SuccessCreate />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Main>
          <Footer />
        </DateRangeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;

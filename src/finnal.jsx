import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App.jsx';
import Gellery from './photoegallery.jsx';

function Finnal() {
  return (
<>


    <BrowserRouter>
      <Routes>
        {/* Define your route with a valid URL path */}
        <Route path="/gellery" element={<Gellery />} />
        <Route path="/" element={<App />} />
        <Route path="/app" element={<App />} />
      </Routes>
    </BrowserRouter>
</>
  );
}

export default Finnal;

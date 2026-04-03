import { BrowserRouter, Route, Routes } from "react-router-dom";
import Content from "./pages/Content";
import IndexPageLayout from "./Layout/IndexPageLayout";
import Gfx from "./pages/Gfx";
import Web from "./pages/Web";
export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* pages */}
          <Route path="/" element={<IndexPageLayout />}>
            <Route index element={<Content />} />
            <Route path="/gfx" element={<Gfx />} />
            <Route path="/web" element={<Web />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

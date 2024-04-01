import { BrowserRouter, Routes, Route } from "react-router-dom"
import RouteHome from "./RouteHome";
import RouteNav from "./RouteNav";
import RoutePage1 from "./RoutePage1";
import RoutePage2 from "./RoutePage2";


export default function RouteMain() {
  return (
    <BrowserRouter>
        <RouteNav />

        <Routes>
            <Route path="/" element={<RouteHome />} />
            <Route path="/page1" element={<RoutePage1 />} />
            <Route path="/page2" element={<RoutePage2 />} />

        </Routes>
    
    </BrowserRouter>
   
  )
}

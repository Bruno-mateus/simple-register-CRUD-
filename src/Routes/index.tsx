import { Routes,Route } from "react-router";

import { Clients } from "../pages/Clients";
import { Home } from "../pages/Home";

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/clients" element={<Clients/>}/>
        </Routes>
    )
}
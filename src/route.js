import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./Home"
import Editar from "./Editar"



function RoutesApp() {
    return(
        <div>

        <BrowserRouter>
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/Editar" element={<Editar/>}/>


        </Routes>
        </BrowserRouter>


        </div>
    )
}

export default RoutesApp;
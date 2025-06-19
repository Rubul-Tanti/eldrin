import { Route, Routes } from "react-router-dom";
import Homepage from "../pages/homepage";
const AllRouter=()=>{
    return(
        <Routes>
    <Route path="/" element={<Homepage/>}/>
   </Routes>
    )
}
export default AllRouter
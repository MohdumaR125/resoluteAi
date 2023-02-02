import {Route,Routes} from "react-router-dom"
import AddStudentPage from "../Pages/AddStudentPage"
import Login from "../Pages/LoginPage"
import ManageStudentPage from "../Pages/ManageStudentPage"
const AllRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Login/>}></Route>
            <Route path="/addstudent" element={<AddStudentPage/>}></Route>
            <Route path="/managestudent" element={<ManageStudentPage/>}></Route>
        </Routes>
    )
}
export default AllRoutes
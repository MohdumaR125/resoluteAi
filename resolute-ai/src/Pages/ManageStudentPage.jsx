import { useEffect } from "react"
import { useState } from "react"
import PermanentDrawerLeft from "../Components/LeftMenu"
import Navbar from "../Components/Navbar"

const ManageStudentPage = () =>{

    const [data,setData] = useState([])
    useEffect(()=>{
        getData()
    },[data])

    const getData = async()=>{
        const res = await fetch("https://resolute-99fee-default-rtdb.firebaseio.com/.json");
        const data1=await res.json();
        console.log(data)
    }

return(
    <>
    <Navbar/>
    <PermanentDrawerLeft/>
    <div>managestudent</div>
    </>
)
}
export default ManageStudentPage
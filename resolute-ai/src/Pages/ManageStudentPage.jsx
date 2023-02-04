import { useEffect } from "react"
import { useState } from "react"
import PermanentDrawerLeft from "../Components/LeftMenu"
import Navbar from "../Components/Navbar"
import {db} from "../firebase-config"
import{set,ref, onValue} from "firebase/database"
import BasicTable from "../Components/table"

const ManageStudentPage = () =>{

    const [data,setData] = useState([])
    useEffect(()=>{
        let finaldata
        onValue(ref(db),snapshot=>{
            const data1= snapshot.val();
            if(data1!==null){
                const array=(Object.values(data1)[0])
                 finaldata=(Object.values(array))
                 finaldata.map((el)=>{
                    setData(olddata=>[...olddata,el])
                 })
            }
            console.log(data)
        })
    },[])


return(
    <>
  
    <PermanentDrawerLeft/>
   <BasicTable data={data}/>
    </>
)
}
export default ManageStudentPage
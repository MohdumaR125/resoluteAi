import { useEffect } from "react";
import { useState } from "react";
import PermanentDrawerLeft from "../Components/LeftMenu";
import Navbar from "../Components/Navbar";
import { db } from "../firebase-config";
import { set, ref, onValue } from "firebase/database";
import BasicTable from "../Components/table";

const ManageStudentPage = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    onValue(ref(db), (snapshot) => {
      const data1 = snapshot.val();
      if (data1 !== null) {
        setData([]);
        Object.values(data1).map((el) => {
          setData((olddata) => [...olddata, el]);
        });
      }
      console.log(data);
    });
  }, []);

  return (
    <>
      <Navbar />
      <PermanentDrawerLeft />
      <BasicTable data={data} />
    </>
  );
};
export default ManageStudentPage;

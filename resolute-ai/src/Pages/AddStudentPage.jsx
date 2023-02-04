import PermanentDrawerLeft from "../Components/LeftMenu";
import Navbar from "../Components/Navbar";
import { Box } from "@mui/material";
import Form from "../Components/Form";

const AddStudentPage = () => {
  return (
    <>
      <Navbar />
      <PermanentDrawerLeft />
      <div style={{ paddingTop: "100px" }}>
        <h2>Add Student</h2>
      </div>
      <Form />
    </>
  );
};
export default AddStudentPage;

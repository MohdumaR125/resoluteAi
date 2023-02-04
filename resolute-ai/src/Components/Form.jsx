import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Button,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { useState } from "react";
import { db } from "../firebase-config";
import { set, ref, update } from "firebase/database";
export default function Form(props) {
  const { student } = props;
  const initState = {
    id: "",
    firstName: "",
    midlleName: "",
    lastName: "",
    Class: "",
    section: "",
    rollNo: "",
    addressLine1: "",
    addressLine2: "",
    landmark: "",
    city: "",
    pincode: "",
  };

  const [data, setData] = useState(student ? student : initState);

  //handle input
  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    if(name=='rollNo'&&value>99){
      alert("Roll Number should be in Two Digits")
    }
    else if(name=="pincode"&&value>999999){
      alert("Pincode should be of Six Digits")
    }
    else{
      setData({ ...data, [name]: value });
    }
  };
  //writing to database
  const submitForm = () => {
    if (student) {
      const {
        firstName,
        midlleName,
        lastName,
        Class,
        section,
        rollNo,
        addressLine1,
        addressLine2,
        landmark,
        city,
        pincode,
      } = data;
      const id = student.id;
      update(ref(db, `/${student.id}`), {
        id,
        firstName,
        midlleName,
        lastName,
        Class,
        section,
        rollNo,
        addressLine1,
        addressLine2,
        landmark,
        city,
        pincode,
      }).then(() => {
        alert("updated Student");
      });
    } else {
      const {
        firstName,
        midlleName,
        lastName,
        Class,
        section,
        rollNo,
        addressLine1,
        addressLine2,
        landmark,
        city,
        pincode,
      } = data;
      if (
        firstName &&
        lastName &&
        Class &&
        section &&
        rollNo &&
        addressLine1 &&
        city &&
        pincode
      ) {
        const id =
          Date.now() + firstName + lastName + Math.floor(Math.random() * 1000);
        console.log(id);
        console.log(data);

        set(ref(db, `/${id}`), {
          id,
          firstName,
          midlleName,
          lastName,
          Class,
          section,
          rollNo,
          addressLine1,
          addressLine2,
          landmark,
          city,
          pincode,
        })
          .then((res) => {
            alert("data stored");
            setData(initState);
          })
          .catch((err) => console.log(err));
      } else {
        alert("Please fill details");
      }
    }
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 4, width: "30ch" },
        }}
        paddingLeft="250px"
        paddingTop="50px"
        noValidate
        autoComplete="off"
      >
        <TextField
          id="filled-basic"
          name="firstName"
          label="First Name"
          value={data.firstName}
          onChange={handleChange}
          variant="filled"
        />
        <TextField
          id="filled-basic"
          name="middleName"
          label="Middle Name"
          value={data.middleName}
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="lastName"
          label="Last Name"
          variant="filled"
          value={data.lastName}
          onChange={handleChange}
        />
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">
            Select Class
          </InputLabel>
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            onChange={handleChange}
            name="Class"
            value=""
          >
            <MenuItem value={"1"}>1</MenuItem>
            <MenuItem value={"2"}>2</MenuItem>
            <MenuItem value={"3"}>3</MenuItem>
            <MenuItem value={"4"}>4</MenuItem>
            <MenuItem value={"5"}>5</MenuItem>
            <MenuItem value={"6"}>6</MenuItem>
            <MenuItem value={"7"}>7</MenuItem>
            <MenuItem value={"8"}>8</MenuItem>
            <MenuItem value={"9"}>9</MenuItem>
            <MenuItem value={"10"}>10</MenuItem>
            <MenuItem value={"11"}>11</MenuItem>
            <MenuItem value={"12"}>12</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="filled" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-filled-label">
            Select Section
          </InputLabel>
          <Select
            onChange={handleChange}
            name="section"
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
            value=""
          >
            <MenuItem value={"A"}>A</MenuItem>
            <MenuItem value={"B"}>B</MenuItem>
            <MenuItem value={"C"}>C</MenuItem>
            <MenuItem value={"D"}>D</MenuItem>
            <MenuItem value={"E"}>E</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="filled-basic"
          name="rollNo"
          value={data.rollNo}
          label="Enter Roll Number in Digits"
          variant="filled"
          maxLength={2}
          type="number"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="addressLine1"
          value={data.addressLine1}
          label="Address Line 1"
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="addressLine2"
          label="Address Line 2"
          value={data.addressLine2}
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="landmark"
          label="Landmark"
          variant="filled"
          value={data.landmark}
          onChange={handleChange}
        />
        <TextField
          id="filled-basic"
          name="city"
          label="City"
          variant="filled"
          onChange={handleChange}
          value={data.city}
        />
        <TextField
          id="filled-basic"
          name="pincode"
          label="Pincode"
          variant="filled"
          type="number"
          maxLength={6}
          value={data.pincode}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          size="large"
          color="error"
          sx={{ height: "53px", m: 1 }}
          onClick={submitForm}
        >
          Add Student
        </Button>
      </Box>
    </>
  );
}

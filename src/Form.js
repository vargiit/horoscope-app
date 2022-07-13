import { Button } from "primereact/button";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-indigo/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css";
import { Dropdown } from "primereact/dropdown";
import React, { useState } from "react";
import { RadioButton } from "primereact/radiobutton";
import { useFormik } from "formik";
export default function Form(props) {
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [sign, setSign] = useState("");
  const [day, setDay] = useState(null);
  const [formData, setFormData] = useState({});

  const signItems = [
    { label: "Aries", value: "aries" },
    { label: "Taurus", value: "taurus" },
    { label: "Gemini", value: "gemini" },
    { label: "Cancer", value: "cancer" },
    { label: "Virgo", value: "virgo" },
    { label: "Libra", value: "libra" },
    { label: "Scorpio", value: "scorpio" },
    { label: "Sagittarius", value: "sagittarius" },
    { label: "Aquarius", value: "aquarius" },
    { label: "Pisces", value: "pisces" },
    { label: "Leo", value: "leo" },
    { label: "Capricorn", value: "capricorn" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getUserHoroscope({ value1, value2, sign, day });
    setValue1("");
    setValue2("");
    setSign("");
    setDay("");
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    onSubmit: (data) => {
      setFormData(data);
      formik.resetForm();
    },
  });
  console.log(formik.values);
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Username</label>
      <InputText
        id="name"
        value={value1}
        onChange={(e) => {
          setValue1(e.target.value);
        }}
        isRequired
      />
      <label htmlFor="Email">Email</label>
      <InputText
        type="email"
        value={value2}
        onChange={(e) => setValue2(e.target.value)}
      />
      <h5>Select Sign</h5>
      <Dropdown
        value={sign}
        options={signItems}
        onChange={(e) => setSign(e.value)}
        placeholder="Select a Zodiac Sign"
      />
      <RadioButton
        inputId="day1"
        name="day"
        value="yesterday"
        onChange={(e) => setDay(e.value)}
        checked={day === "Yesterday"}
      />
      <label htmlFor="day1">Yesterday</label>
      <RadioButton
        inputId="day2"
        name="day"
        value="today"
        onChange={(e) => setDay(e.value)}
        checked={day === "Today"}
      />
      <label htmlFor="day2">Today</label>
      <RadioButton
        inputId="day3"
        name="day"
        value="tomorrow"
        onChange={(e) => setDay(e.value)}
        checked={day === "Tomorrow"}
      />
      <label htmlFor="day1">Tomorrow</label>

      <Button className="button-style" type="submit" label="Submit" />
    </form>
  );
}

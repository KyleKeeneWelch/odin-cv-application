import { Display } from './Display';
import '../css/App.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { General } from "./General";
import { Education } from "./Education";
import { Experience } from "./Experience";

function App() {
  const [generalInput, setGeneralInput] = useState({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const [educationInput, setEducationInput] = useState(
    [{
      id: uuidv4(),
      schoolName: "",
      titleOfStudy: "",
      dateOfStudy: ""
    }]
  );

  const [experienceInput, setExperienceInput] = useState(
    [{
      id: uuidv4(),
      companyName: "",
      positionTitle: "",
      mainResponsibilities: "",
      dateFrom: "",
      dateUntil: "",
    }]
  );

  const [isShown, setIsShown] = useState({
    general: true,
    education: true,
    experience: true,
    display: false
  });

  const data = {
    general: generalInput,
    education: educationInput,
    experience: experienceInput,
  };

  function handleGeneralChange(event) {
    const propertyKey = event.target.id;
    const newPropertyValue = event.target.value;
    setGeneralInput({...generalInput, [propertyKey]: newPropertyValue});
  }

  function handleEducationChange(event) {
    const [id, property] = event.target.id.split("_");
    const newPropertyValue = event.target.value;
    const educationIndex = educationInput.findIndex((entry) => entry.id === id);
    const newEducationInput = educationInput.slice();
    newEducationInput[educationIndex][property] = newPropertyValue;
    console.log(newEducationInput);
    setEducationInput(newEducationInput);
  }

  function handleExperienceChange(event) {
    const [id, property] = event.target.id.split("_");
    const newPropertyValue = event.target.value;
    const experienceIndex = experienceInput.findIndex((entry) => entry.id === id);
    const newExperienceInput = experienceInput.slice();
    console.log(id);
    console.log(property);
    newExperienceInput[experienceIndex][property] = newPropertyValue;
    setExperienceInput(newExperienceInput);
  }

  function toggleIsShown(event) {
    const section = event.target.id.split("_")[1];
    console.log(section);
    const newIsShown = Object.assign({}, isShown);
    newIsShown[section] ? newIsShown[section] = false : newIsShown[section] = true;
    setIsShown(newIsShown);
  }

  function addEducation() {
    const newEducationInput = educationInput.slice();
    newEducationInput.push(
      {
        id: uuidv4(),
        schoolName: "",
        titleOfStudy: "",
        dateOfStudy: ""
      }
    )
    setEducationInput(newEducationInput);
  }

  function addExperience() {
    const newExperienceInput = experienceInput.slice();
    newExperienceInput.push(
      {
        id: uuidv4(),
        companyName: "",
        positionTitle: "",
        mainResponsibilities: "",
        dateFrom: "",
        dateUntil: "",
      }
    )
    setExperienceInput(newExperienceInput);
  }

  return (
    <>
      <h1>Enter Your Details</h1>
      <br></br>
      <General updateGeneral={handleGeneralChange} data={generalInput} isShown={isShown} />
      <button id="btnShow_general" onClick={toggleIsShown}>{isShown.general ? "Hide" : "Show"}</button>
      <hr></hr>
      <Education updateEducation={handleEducationChange} data={educationInput} isShown={isShown} />
      <button id="btnShow_education" onClick={toggleIsShown}>{isShown.education ? "Hide" : "Show"}</button>
      <button onClick={addEducation}>Add</button>
      <hr></hr>
      <Experience updateExperience={handleExperienceChange} data={experienceInput} isShown={isShown} />
      <button id="btnShow_experience" onClick={toggleIsShown}>{isShown.experience ? "Hide" : "Show"}</button>
      <button onClick={addExperience}>Add</button>
      <hr></hr>
      <h1>Your Entered Application</h1>
      <button id="btnShow_display" onClick={toggleIsShown}>{isShown.display ? "Hide" : "Show"}</button>
      <Display data={data} isShown={isShown} />
    </>
  )
}

export default App

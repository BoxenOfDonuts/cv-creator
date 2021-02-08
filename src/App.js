import React, { useState } from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './components/Header/Header';
import PersonalInfo from './components/Personal/PersonalInfo';
import Skills from './components/Skills/Skills';
import Education from './components/EducationAndExperience/Education';
import Experience from './components/EducationAndExperience/Experience';

const initialPersonal = {
  name: '',
  lastName: '',
  email: '',
  phone: '',
};

const initialEducation = [
  {
    institution: '',
    degree: '',
    graduationDate: '',
    id: uuid(),
  },
];

const initialExperience = [
  {
    company: '',
    title: '',
    tenureStart: '',
    tenureEnd: '',
    id: uuid(),
  },
];

const App = () => {
  return (
    <div>
      <Header title={'Resume Creator'} />
      <Form />
    </div>
  );
};

const Form = (props) => {
  const [edit, setEdit] = useState(true);
  // const [ errors, setErrors ] = useState({});
  const [personalInfo, setPersonalInfo] = useState(initialPersonal);
  const [skills, setSkills] = useState([]);
  const [education, setEducation] = useState(initialEducation);
  const [experience, setExperience] = useState(initialExperience);

  const addAnotherSection = (e) => {
    const { id } = e.target.dataset;
    if (id === '') return;

    switch (id) {
      case 'education':
        const newEducation = [
          ...education,
          {
            company: '',
            title: '',
            tenureStart: '',
            tenureEnd: '',
            id: uuid(),
          },
        ];
        setEducation(newEducation);

        break;
      case 'experience':
        const newExperience = [
          ...experience,
          {
            company: '',
            title: '',
            tenureStart: '',
            tenureEnd: '',
            id: uuid(),
          },
        ];
        setExperience(newExperience);
        break;
      default:
        return;
    }
  };

  const deleteEducation = (index) => {
    const newEucation = education.filter((institution, currentIndex) => {
      return currentIndex !== index;
    });
    setEducation(newEucation);
  };

  const deleteExperience = (index) => {
    const newExperience = experience.filter((company, currentIndex) => {
      return currentIndex !== index;
    });
    setExperience(newExperience);
  };

  const handlePersonalInfoChange = (name, value) => {
    const personal = { ...personalInfo, [name]: value };
    setPersonalInfo(personal);
  };

  const handleEducationChange = (index, value) => {
    const array = education.map((key, currentIndex) => {
      if (currentIndex === index) {
        return value;
      }
      return key;
    });

    setEducation(array);
  };

  const handleExperienceChange = (index, value) => {
    const array = experience.map((key, currentIndex) => {
      if (currentIndex === index) {
        return value;
      }
      return key;
    });

    setExperience(array);
  };

  const handleSkillChange = (value) => {
    setSkills(value);
  };

  const isEdit = (value) => {
    setEdit(value);
  };

  let btnClassname = 'add-button button';

  if (!edit) {
    btnClassname += ' viewing';
  }

  return (
    <>
      <div className="resume">
        <PersonalInfo
          personalData={personalInfo}
          onInputChange={handlePersonalInfoChange}
          // parentKey={'personal'}
          editing={edit}
        />
        <Skills
          skills={skills}
          onSkillUpdate={handleSkillChange}
          editing={edit}
        />
        <Education
          education={education}
          onClick={deleteEducation}
          onInputChange={handleEducationChange}
          editing={edit}
        />
        <div>
          <button
            className={btnClassname}
            data-id="education"
            onClick={addAnotherSection}
          >
            Add
          </button>
        </div>

        <Experience
          experience={experience}
          onClick={deleteExperience}
          onInputChange={handleExperienceChange}
          editing={edit}
        />
        <div>
          <button
            className={btnClassname}
            data-id="experience"
            onClick={addAnotherSection}
          >
            Add
          </button>
        </div>

        <br />
        <div className="footer-buttons">
          <button
            className={edit ? 'button submit' : 'button submit active'}
            onClick={() => isEdit(false)}
          >
            Submit
          </button>
          <button
            className={edit ? 'button edit active' : 'button edit'}
            onClick={() => isEdit(true)}
          >
            Edit
          </button>
        </div>
      </div>
    </>
  );
}

export default App;

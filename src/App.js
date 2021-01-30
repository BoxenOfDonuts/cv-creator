import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      edit: true,
      errors: {},
      personal: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
      },
      skills: [],
      education: [
        {
          institution: '',
          degree: '',
          graduationDate: '',
          id: uuid(),
          errors: {},
        },
      ],
      experience: [
        {
          company: '',
          title: '',
          tenureStart: '',
          tenureEnd: '',
          id: uuid(),
        },
      ],
    };
  }

  addAnotherSection = (e) => {
    const { id } = e.target.dataset;
    if (id === '') return;

    // this may need to be computed values
    switch (id) {
      case 'education':
        this.setState((state) => {
          const newEducation = {
            instiution: '',
            degree: '',
            graduationDate: '',
            id: uuid(),
          };
          const education = [...state.education, newEducation];
          return {
            education,
          };
        });
        break;
      case 'experience':
        this.setState((state) => {
          const newExperience = {
            company: '',
            title: '',
            tenureStart: '',
            tenureEnd: '',
            id: uuid(),
          };
          const experience = [...state.experience, newExperience];
          return {
            experience,
          };
        });
        break;
      default:
      //pass
    }
  };

  handleChange = (e) => {
    console.log(e);
  };

  deleteEducation = (index) => {
    const education = this.state.education.filter(
      (institution, currentIndex) => {
        return currentIndex !== index;
      }
    );

    this.setState({ education });
  };

  deleteExperience = (index) => {
    const experience = this.state.experience.filter((company, currentIndex) => {
      return currentIndex !== index;
    });

    this.setState({ experience });
  };

  handleChange = (key, name, value) => {
    this.setState({
      [key]: { ...this.state[key], [name]: value },
    });
  };

  handleEducationChange = (key, index, value) => {
    this.setState((state) => {
      const array = state[key].map((key, currentIndex) => {
        if (currentIndex === index) {
          return value;
        }
        return key;
      });

      return {
        [key]: array,
      };
    });
  };

  handleSkillChange = (value) => {
    this.setState({
      skills: value,
    });
  };

  handleFormValidation  = (e) => {
    const { name, value } = e.target;
    const isEmpty = !value;  
    // const errorValue = value ? '': "Please Enter A Value"

    // this.setState((state) => {
    //   return {
    //     errors: {...state.errors, [name]: errorValue}}
    // })
  }

  editCV = () => {
    this.setState({
      edit: true,
    });
  }

  submitForm = () => {
    this.setState({
      edit: false,
    });
  }

  render() {
    return (
      <div>
        <Header />
        <button onClick={this.editCV}>Edit</button>

        <PersonalInfo
          personalData={this.state.personal}
          onInputChange={this.handleChange}
          parentKey={'personal'}
          validateOnBlur={this.handleFormValidation}
          errors={this.state.errors}
          editing={this.state.edit}
        />
        <Skills
          skills={this.state.skills}
          onSkillUpdate={this.handleSkillChange}
          onSkillSubmit={this.handleSkillSubmit}
          editing={this.state.edit}
        />
        <Education
          education={this.state.education}
          onClick={this.deleteEducation}
          onInputChange={this.handleEducationChange}
          parentKey={'education'}
          validateOnBlur={this.handleFormValidation}
          errors={this.state.errors}
          editing={this.state.edit}

        />
        <button
          className="add-button button"
          data-id="education"
          onClick={this.addAnotherSection}
        >
          Add
        </button>
        <Experience
          experience={this.state.experience}
          onClick={this.deleteExperience}
          onInputChange={this.handleEducationChange}
          parentKey={'experience'}
          validateOnBlur={this.handleFormValidation}
          editing={this.state.edit}
        />
        <button
          className="add-button button"
          data-id="experience"
          onClick={this.addAnotherSection}
        >
          Add
        </button>
        <br />
        <button onClick={this.submitForm}>Submit</button>
      </div>
    );
  }
}

export default App;

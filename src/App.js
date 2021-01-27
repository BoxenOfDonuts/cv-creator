import React from 'react';
import './App.css';
import { v4 as uuid } from 'uuid';
import Header from './components/Header';
import PersonalInfo from './components/PersonalInfo';
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

const formValidation = (() => {
  const validateAll = (form) => {
    const fields = Array.from(form.querySelectorAll('.input'));
    let valid = true;
    fields.forEach((field) => {
      if (!field.validity.valid) {
        errorDisplay.showError(field);
        valid = false;
      }
    });

    return valid;
  };

  const _validateSingleInput = (element) => {
    if (element.validity.valid) {
      return errorDisplay.clearError();
    } else {
      return errorDisplay.showError(element);
    }
  };

  const email = (element) => {
    return _validateSingleInput(element);
  };

  const country = (element) => {
    return _validateSingleInput(element);
  };

  const zipcode = (element) => {
    return _validateSingleInput(element);
  };

  const text = (elememnt) => {
    return _validateSingleInput(elememnt);
  };

  const tel = (element) => {
    return _validateSingleInput(element);
  };

  const textarea = (element) => {
    return _validateSingleInput(element);
  };

  return { email, country, zipcode, text, tel, textarea, validateAll };
})();

const errorDisplay = (() => {
  const showError = (element) => {
    let textContent = '';
    if (element.validity.valueMissing) {
      textContent = 'Please enter a value';
    } else if (element.validity.typeMismatch) {
      textContent = `please enter a valid ${element.name}`;
    } else if (element.validity.tooShort || element.validity.tooLong) {
      textContent = `Field should be at between ${element.minLength} and ${element.maxLength} characters`;
    } else if (element.validity.rangeUnderflow) {
      textContent = `Every book has at least ${element.min} page`;
    } else if (element.validity.patternMismatch) {
      textContent = `please enter a vlid ${element.name}`;
    } else if (!formValidation.passwordsMatch()) {
      textContent = "Passwords don't match!";
    }
    return textContent;
  };

  const clearError = () => {
    return '';
  };
  return {
    clearError,
    showError,
  };
})();

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
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
      errors: {},
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

  handleFormValidation = (e) => {
    let element = e.target;
    console.log(element);
    if (element) {
      const validationValue = formValidation[element.type](element)
      this.setState({
        errors: {
          ...this.state.errors,
          [element.name]: validationValue,
        },
      });
    }
  };

  handleSkillSubmit = (e) => {
    const formElements = Array.from(e.target.elements)
    formElements.forEach((element) => {
      if (element.name.length > 0) {
        this.setState((state) => {
          const { name } = element;
          const validationValue = formValidation[element.type](element);
          const errors = {...state.errors, [name]: validationValue}
          return {errors,}
        })
        
      }
    })
  }

  validateForm = (e) => {
  }

  render() {
    return (
      <div>
        <Header />
        <PersonalInfo
          personalData={this.state.personal}
          onInputChange={this.handleChange}
          parentKey={'personal'}
          validateOnBlur={this.handleFormValidation}
          errors={this.state.errors}
        />
        <Skills
          skills={this.state.skills}
          onSkillUpdate={this.handleSkillChange}
          onSkillSubmit={this.handleSkillSubmit}
          errors={this.state.errors}
        />
        <Education
          education={this.state.education}
          onClick={this.deleteEducation}
          onInputChange={this.handleEducationChange}
          parentKey={'education'}
          validateOnBlur={this.handleFormValidation}
          errors={this.state.errors}
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
        />
        <button
          className="add-button button"
          data-id="experience"
          onClick={this.addAnotherSection}
        >
          Add
        </button>
        <br />
        {/* <Education education={this.state.education} onDelete={this.addAnotherSection} /> */}
        {/* <Experience experience={this.state.experience} /> */}
        <button onClick={this.validateForm}>Submit</button>
      </div>
    );
  }
}

export default App;

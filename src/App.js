import React from "react";
import "./App.css";
import { v4 as uuid } from "uuid";
import Header from "./components/Header";
import PersonalInfo from "./components/PersonalInfo";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Experience from "./components/Experience";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      personal: {
        name: "",
        lastName: "",
        email: "",
        phone: "",
      },
      skills: [],
      education: [
        {
          institution: "",
          degree: "",
          graduationDate: "",
          id: uuid(),
        },
      ],
      experience: [
        {
          company: "",
          title: "",
          tenureStart: "",
          tenureEnd: "",
          id: uuid(),
        },
      ],
      errors : {}
    };
  }

  addAnotherSection = (e) => {
    const { id } = e.target.dataset;
    if (id === "") return;

    // this may need to be computed values
    switch (id) {
      case "education":
        this.setState((state) => {
          const newEducation = {
            instiution: "",
            degree: "",
            graduationDate: "",
            id: uuid(),
          };
          const education = [...state.education, newEducation];
          return {
            education,
          };
        });
        break;
      case "experience":
        this.setState((state) => {
          const newExperience = {
            company: "",
            title: "",
            tenureStart: "",
            tenureEnd: "",
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
      skills: value
    })
  }

  formValidation = (() => {
    const validateAll = (form) => {
        const fields = Array.from(form.querySelectorAll('.input'))
        let valid = true;
        fields.forEach(field => {
            if (!field.validity.valid) {
                const errorSpan = field.nextElementSibling;
                this.errorDisplay.showError(field, errorSpan);
                valid = false;
            }
        })
  
        
        return valid;
    }
  
    const _validateSingleInput = (element) => {
        const errorSpan = element.nextElementSibling;
        if (element.validity.valid) {
            this.errorDisplay.clearError(element, errorSpan)
        } else {
            this.errorDisplay.showError(element, errorSpan)
        }
    }
  
    const email = (element) => {
        _validateSingleInput(element);
    }
  
    const country = (element) => {
        _validateSingleInput(element);
    }
  
    const zipcode = (element) => {
        _validateSingleInput(element);
    }
  
    const text = (elememnt) => {
      _validateSingleInput(elememnt)
    }
  
    const tel = (element) => {
      _validateSingleInput(element)
    }
  
    const textarea = (element) => {
      _validateSingleInput(element)
    }
  
    return { email, country, zipcode, text, tel, textarea, validateAll }
  
  })();
  
  errorDisplay = (() => {
    const showError = (element, errorSpan) => {
      console.log("Error Error => MAKE THIS")
    }
  
    const clearError = (element, errorSpan) => {
      console.log("Clean Error => MAKE THIS")
    }
  
    return {
      clearError,
      showError
    }
  })();
  
  handleFormValidation(e) {
    let el = e.target
    console.log(el)
    if (el) {
        this.formValidation[el.type](el);
    }
  }

  render() {
    return (
      <div>
        <Header />
        <PersonalInfo
          personalData={this.state.personal}
          onInputChange={this.handleChange}
          parentKey={"personal"}
          validateOnBlur={this.handleFormValidation}
        />
        <Skills
          skills={this.state.skills}
          onSkillUpdate={this.handleSkillChange}
        />
        <Education
          education={this.state.education}
          onClick={this.deleteEducation}
          onInputChange={this.handleEducationChange}
          parentKey={"education"}
          validateOnBlur={this.handleFormValidation}
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
          parentKey={"experience"}
          validateOnBlur={this.handleFormValidation}
        />
        <button
          className="add-button button"
          data-id="experience"
          onClick={this.addAnotherSection}
        >
          Add
        </button><br/>
        {/* <Education education={this.state.education} onDelete={this.addAnotherSection} /> */}
        {/* <Experience experience={this.state.experience} /> */}
        <button onClick={this.validateForm}>Submit</button>
      </div>
    );
  }
}

export default App;

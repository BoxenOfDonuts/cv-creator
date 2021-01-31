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

  handleSkillSubmit = () => {

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
    let btnClassname = 'add-button button';
    let footerBtnClassname = 'button'

    if (!this.state.edit) {
      btnClassname += ' viewing';
      footerBtnClassname += ' viewing'
    }

    return (
      <div>
        <Header title={'Resume Creator'}/>
        <div className="resume">
          <PersonalInfo
            personalData={this.state.personal}
            onInputChange={this.handleChange}
            parentKey={'personal'}
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
            editing={this.state.edit}

          />
          <div>
            <button
              className={btnClassname}
              data-id="education"
              onClick={this.addAnotherSection}
            >
              Add
            </button>            
          </div>

          <Experience
            experience={this.state.experience}
            onClick={this.deleteExperience}
            onInputChange={this.handleEducationChange}
            parentKey={'experience'}
            editing={this.state.edit}
          />
          <div>
            <button
              className={btnClassname}
              data-id="experience"
              onClick={this.addAnotherSection}
            >
              Add
            </button>            
          </div>

          <br />
          <div className="footer-buttons">
            <button
              className={this.state.edit ? 'button submit active': 'button submit'}
              onClick={this.submitForm}>Submit
            </button>
            <button
              className={this.state.edit ? 'button edit': 'button edit active'}
              onClick={this.editCV}>Edit
            </button>            
          </div>

        </div>
      </div>
    );
  }
}

export default App;

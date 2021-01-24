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
      skills: ["java", "python", "Typescript", "SQL"],
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

  render() {
    console.log(this.state);
    return (
      <div>
        <Header />
        <PersonalInfo
          personalData={this.state.personal}
          onInputChange={this.handleChange}
          parentKey={"personal"}
        />
        <Skills skills={this.state.skills} />
        <Education
          education={this.state.education}
          onClick={this.deleteEducation}
          onInputChange={this.handleEducationChange}
          parentKey={"education"}
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
        />
        <button
          className="add-button button"
          data-id="experience"
          onClick={this.addAnotherSection}
        >
          Add
        </button>
        {/* <Education education={this.state.education} onDelete={this.addAnotherSection} /> */}
        {/* <Experience experience={this.state.experience} /> */}
      </div>
    );
  }
}

export default App;

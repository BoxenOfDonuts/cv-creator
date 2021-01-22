import React from 'react';
import './App.css';
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo'
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      personal: {
        name: '',
        lastName: '',
        email: '',
        phone: '',
      },
      skills: [
        'java',
        'python',
        'Typescript',
        'SQL'
      ],
      education: [
        {
          institution: 'SLU',
          degree: 'Something',
          graduationDate: '1920-12-31'
        },
      ],
      experience: [
        {
          company: 'Car Dealer 56',
          title: 'Mr Seller Guy',
          tenureStart: '1920-01-15',
          tenureEnd: '1925-06-31',
    
        },
        {
          company: 'Car Dealer 56',
          title: 'Manger of Seller Guys',
          tenureStart: '1925-07-01',
          tenureEnd: '',
        },
      ]
    }
  }

  addAnotherSection = (e) => {
    const {id} = e.target.dataset
    console.log(id)
    if (id === '') return

    // this may need to be computed values 
    switch(id) {
        case('education'):
          this.setState((state) => {
            const newEducation = {
              instiution: '',
              degree: '',
              graduationDate: '',
            };
            const education = [...state.education, newEducation]
            return {
              education,
            };
          });
          break;
      case('experience'):
        this.setState((state) => {
          const newExperience = {
            company: '',
            title: '',
            tenureStart: '',
            tenureEnd: '',
          }
          const experience = [...state.experience, newExperience]
          return {
            experience
          };
        });
        break;
      default:
        //pass
    }
  }

  handleChange = (e) => {
    console.log(e);
  }

  deleteEducation = (index) => {
    const education = this.state.education.filter((institution, currentIndex) => {
      return currentIndex !== index;
    })

    this.setState({education,});

  }

  deleteExperience = (index) => {
    const experience = this.state.experience.filter((company, currentIndex) => {
      return currentIndex !== index;
    })

    this.setState({experience,})
  }

  handleChange = (personal, name, value) => {
    console.log(personal, name, value)
    this.setState({
      [personal]: {...this.state[personal], [name]: value}
    });
  }

  render() {
    return (
      <div>
        <Header />
        <PersonalInfo
          personalData={this.state.personal}
          onInputChange={this.handleChange}
          parentKey={'personal'}
        />
        <Skills skills={this.state.skills} />
        <Education
          education={this.state.education}
          onClick={this.deleteEducation}
        />
        <button className="add-button button" data-id="education" onClick={this.addAnotherSection}>Add</button>
        <Experience
          experience={this.state.experience}
          onClick={this.deleteExperience}
        />
        <button className="add-button button" data-id="experience" onClick={this.addAnotherSection}>Add</button>
        {/* <Education education={this.state.education} onDelete={this.addAnotherSection} /> */}
        {/* <Experience experience={this.state.experience} /> */}
      </div>
    );
  }


}

export default App;
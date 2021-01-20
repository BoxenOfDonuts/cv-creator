import React from 'react';
import './App.css';
import Header from './components/Header'
import PersonalInfo from './components/PersonalInfo'
import Skills from './components/Skills';
import Education from './components/Education';
import Experience from './components/Experience';

class App extends React.Component {
  // have to add a number to use as keys for education / experience I guess
  constructor(props) {
    super(props)

    this.state = {
      personal: {
        name: 'BoxenOf',
        lastName: 'Donuts',
        email: 'BoxenOfDonuts@gmail.com',
        phone: '1234567',
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
    console.log(e)
  }

  handleChange = (e) => {
    console.log(e)
  }

  render() {
    return (
      <div>
        <Header />
        <PersonalInfo  personalData={this.state.personal}/>
        <Skills skills={this.state.skills} />
        <Education education={this.state.education} onDelete={this.addAnotherSection} />
        <Experience experience={this.state.experience} />
      </div>
    );
  }


}

export default App;

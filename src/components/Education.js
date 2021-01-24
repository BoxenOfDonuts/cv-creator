import React from 'react';


const EducationForm = (props) => {
    const { institution, degree, graduationDate } = props.education;
    const { index } = props;

    const handleClick = (index) => {
        props.onClick(index);
    }

    const handleChange = (index, e) => {
        const { value, name } = e.target;
        props.handleChange('education', index, name, value)

    }

    return (
        <div>
            <button type="button" onClick={() => handleClick(index)}>Delete</button> 
            <div>
                <label htmlFor="institution">institution</label>
                <input
                    type="text"
                    name="institution"
                    value={institution}
                    onChange={(e) => handleChange(index, e)}
                    required/>
            </div>
            <div>
                <label htmlFor="degree"></label>
                <input
                    type="text"
                    name="degree"
                    value={degree}
                    required/>
            </div>
            <div>
                <label htmlFor="grad-date"></label>
                <input type="date" name="graduationDate" value={graduationDate} required />
            </div>
        </div>
    );
}


class Education extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            education: [],
        }

    
    }

    handleClick = (index) => {
        this.props.onClick(index)
    }

    handleChange = (key, index, name, value) => {
        this.props.onInputChange(key, index, name, value)
    }

    render() {
        const { education } = this.props;

        // const education = this.state.education;

        return (
            <div className="education">
                <h3>Education</h3>
                {education.map((institution, index) => 
                    <EducationForm
                        education={institution}
                        index={index}
                        key={institution.degree+institution.graduationDate}
                        onClick={this.handleClick}
                        handleChange={this.handleChange}
                    />
                )}
            </div>
        );
    }
}

export default Education;

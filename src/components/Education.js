import React from 'react';


const EducationForm = (props) => {
    const { institution, degree, graduationDate } = props.education;
    const { index } = props;

    const handleClicks = (index) => {
        props.onClick(index);
    }

    const handleChange = (e) => {
        console.log(e.target.value)
    }

    return (
        <div>
            <button type="button" onClick={() => handleClicks(index)}>Delete</button> 
            <div>
                <label htmlFor="institution">institution</label>
                <input type="text" name="institution" value={institution} onChange={handleChange} required/>
            </div>
            <div>
                <label htmlFor="degree"></label>
                <input type="text" name="degree" value={degree} required/>
            </div>
            <div>
                <label htmlFor="grad-date"></label>
                <input type="date" name="grad-date" value={graduationDate} required />
            </div>
        </div>
    );
}


class Education extends React.Component {
    handleClick = (index) => {
        this.props.onClick(index)
    } 

    render() {
        const { education } = this.props;

        return (
            <div className="education">
                <h3>Education</h3>
                {education.map((institution, index) => 
                    <EducationForm
                        education={institution}
                        index={index}
                        key={institution.degree+institution.graduationDate}
                        onClick={this.handleClick}
                    />
                )}
            </div>
        );
    }
}

export default Education;

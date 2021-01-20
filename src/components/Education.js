import React from 'react';

class Education extends React.Component {
    render() {
        const { education } = this.props;
        const { onDelete } = this.props;
        const educationList = education.map((institution) => {
            return <EducationSection education={institution} onDelete={onDelete} />
        })

        return (
            <div>
                {educationList}
            </div>
        );
    }
}

class EducationSection extends React.Component {
    render() {
        const { institution, degree, graduationDate } = this.props.education;
        const { onDelete } = this.props;
        return (
            <div className="education">
                <h3>Education</h3>
                <button type="button" onClick={onDelete}>Delete</button>
                <div>
                    <label htmlFor="institution"></label>
                    <input type="text" name="institution" value={institution} required/>
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
}

export default Education;
import React from 'react';


const EducationForm = (props) => {
    const { company, title, tenureStart, tenureEnd } = props.experience;
    const { index } = props;

    const handleClick = (index) => {
        props.onClick(index)
    }

    return (
        <div>
            <button type="button" onClick={() =>handleClick(index)}>Delete</button>
            <div>
                <label htmlFor="company"></label>
                <input type="text" name="company" value={company} required/>
            </div>
            <div>
                <label htmlFor="job-title"></label>
                <input type="text" name="job-title" value={title} required/>
            </div>
            <div>
                <label htmlFor="start-date"></label>
                <input type="date" name="start-date" value={tenureStart} required />
            </div>
            <div>
                <label htmlFor="end-date"></label>
                <input type="date" name="end-date" value={tenureEnd} required />
            </div>
            <div>
                <label htmlFor="experience">Experience</label>
                <textarea name="experience" cols="30" rows="10"></textarea>
            </div>
        </div>
    )
}

class Experience extends React.Component {
    HandleClick = (index) => {
        this.props.onClick(index)
    } 

    render() {
        const { experience } = this.props;
        return (
            <div className="experience">
                <h3>Experience</h3>
                {experience.map((company, index) =>
                    <EducationForm
                        key={company.name + company.title}
                        experience={experience}
                        index={index}
                        onClick={this.HandleClick}
                    />
                )}
            </div>
        );
    }
}

export default Experience;
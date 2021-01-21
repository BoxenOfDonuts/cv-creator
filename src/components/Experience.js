import React from 'react';

class Experience extends React.Component {
    render() {
        const { company, title, tenureStart, tenureEnd } = this.props.experience;
        return (
            <div className="experience">
                <h3>Experience</h3>
                <button type="button">Delete</button>
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
        );
    }
}

export default Experience;
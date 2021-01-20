import React from 'react';

class Skills extends React.Component {
    render() {
        const { skills } = this.props;
        const listItems = skills.map((skill) => {
            return <li key={skill.toString()}>{skill}</li>
        });
        return (
            <div>
                <h3>Technical Skills and Capalilities</h3>
                <div className="skill-list">
                    <ul>{listItems}</ul>
                </div>
            </div>
        );
        
    }
}

export default Skills;
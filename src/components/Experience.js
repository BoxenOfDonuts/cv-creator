import React from 'react';

const ExperienceForm = (props) => {
  const { company, title, tenureStart, tenureEnd, experience } = props.experience;
  const { index, parentKey } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const form = {
      ...props.experience,
      [name]: value,
    };
    console.log(form);
    props.handleChange(index, form);
  };

  return (
    <div>
      <button type="button" onClick={props.onClick}>
        Delete
      </button>
      <div>
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={props.onBlur}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
          onBlur={props.onBlur}
          required
        />
      </div>
      <div>
        <label htmlFor="tenureStart">Start Day</label>
        <input
          type="date"
          name="tenureStart"
          value={tenureStart}
          onChange={(e) => handleChange(e, parentKey)}
          required
        />
      </div>
      <div>
        <label htmlFor="tenureEnd">End Date</label>
        <input
          type="date"
          name="tenureEnd"
          value={tenureEnd}
          onChange={(e) => handleChange(e, parentKey)}
          required
        />
      </div>
      <div>
        <label htmlFor="experience">Experience</label>
        <textarea
          name="experience"
          cols="30"
          rows="10"
          value={experience}
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={props.onBlur}
        ></textarea>
      </div>
    </div>
  );
};

const PrintedFieldItems = (props) => {
  const { experience } = props;

  return (
    <div>
      <p>{experience.company}</p>
      <p>{experience.title}</p>
      <p>{experience.tenureStart}</p>
      <p>{experience.tenureEnd}</p>
      <p>{experience.experience}</p>
    </div>
  );
}


class Experience extends React.Component {
  render() {
    const { experience, parentKey, editing } = this.props;
    let field = ''; 

    if (editing) {
      field = experience.map((company, index) => 
        <ExperienceForm
          key={company.id}
          experience={company}
          index={index}
          onClick={() => this.props.onClick(index)}
          onBlur={(e) => this.props.validateOnBlur(e)}
          handleChange={(index, value) => this.props.onInputChange(parentKey, index, value)}
          parentKey={parentKey}
        />
      )
    } else {
      field = experience.map((company) =>
        <PrintedFieldItems 
          experience={company}
        />
      )
    }

    return (
      <div className="experience">
        <h3>Experience</h3>
        {field}
      </div>
    );
  }
}

export default Experience;

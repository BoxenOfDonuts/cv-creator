import React from 'react';

const ExperienceForm = (props) => {
  const { company, title, tenureStart, tenureEnd } = props.experience;
  const { index, parentKey } = props;

  const handleClick = (index) => {
    props.onClick(index);
  };

  const handleChange = (e, key) => {
    console.log(key);
    const { name, value } = e.target;
    const form = {
      ...props.experience,
      [name]: value,
    };
    console.log(form);
    props.handleChange(key, index, form);
  };

  const handleValidation = (e) => {
    props.onBlur(e);
  };

  return (
    <div>
      <button type="button" onClick={() => handleClick(index)}>
        Delete
      </button>
      <div>
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={handleValidation}
          required
        />
      </div>
      <div>
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={handleValidation}
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
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={handleValidation}
        ></textarea>
      </div>
    </div>
  );
};

class Experience extends React.Component {
  HandleClick = (index) => {
    this.props.onClick(index);
  };

  handleChange = (key, index, value) => {
    this.props.onInputChange(key, index, value);
  };

  handleValidation = (e) => {
    this.props.validateOnBlur(e);
  };

  render() {
    const { experience, parentKey } = this.props;
    return (
      <div className="experience">
        <h3>Experience</h3>
        {experience.map((company, index) => (
          <ExperienceForm
            key={company.id}
            experience={company}
            index={index}
            onClick={this.HandleClick}
            onBlur={this.handleValidation}
            handleChange={this.handleChange}
            parentKey={parentKey}
          />
        ))}
      </div>
    );
  }
}

export default Experience;

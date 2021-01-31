import React from 'react';
import './Education.css';

const ExperienceForm = (props) => {
  const {
    company,
    title,
    tenureStart,
    tenureEnd,
    experience,
  } = props.experience;
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
    <div className="form-wrapper">
      <button
        className="button delete-section"
        type="button"
        onClick={props.onClick}
      >
        Delete
      </button>
      <form>
        <label htmlFor="company">Company Name</label>
        <input
          type="text"
          name="company"
          value={company}
          onChange={(e) => handleChange(e, parentKey)}
          required
        />
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="tenureStart">Start Day</label>
        <input
          type="date"
          name="tenureStart"
          value={tenureStart}
          onChange={(e) => handleChange(e, parentKey)}
          required
        />

        <label htmlFor="tenureEnd">End Date</label>
        <input
          type="date"
          name="tenureEnd"
          value={tenureEnd}
          onChange={(e) => handleChange(e, parentKey)}
          required
        />

        <label htmlFor="experience">Experience</label>
        <textarea
          name="experience"
          cols="30"
          rows="10"
          value={experience}
          onChange={(e) => handleChange(e, parentKey)}
        ></textarea>
      </form>
      <br />
    </div>
  );
};

const PrintedFieldItems = (props) => {
  const { experience } = props;
  const tenureStartFormatted = experience.tenureStart.replaceAll('-', '/');
  const tenureEndFormatted = experience.tenureEnd.replaceAll('-', '/');

  return (
    <div className="preview-text">
      <p className="bold">{experience.company}</p>
      <div className="title-and-date">
        <p>{experience.title}</p>
        <p>{tenureStartFormatted + ' - ' + tenureEndFormatted}</p>
      </div>
      <pre>{experience.experience}</pre>
    </div>
  );
};

class Experience extends React.Component {
  render() {
    const { experience, parentKey, editing } = this.props;
    let field = '';

    if (editing) {
      field = experience.map((company, index) => (
        <ExperienceForm
          key={company.id}
          experience={company}
          index={index}
          onClick={() => this.props.onClick(index)}
          onBlur={(e) => this.props.validateOnBlur(e)}
          handleChange={(index, value) =>
            this.props.onInputChange(parentKey, index, value)
          }
          parentKey={parentKey}
        />
      ));
    } else {
      field = experience.map((company) => (
        <PrintedFieldItems experience={company} />
      ));
    }

    return (
      <div className="experience section">
        <h3>Experience</h3>
        {field}
      </div>
    );
  }
}

export default Experience;

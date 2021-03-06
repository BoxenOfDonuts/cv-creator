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
  const { index } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const form = {
      ...props.experience,
      [name]: value,
    };
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
          onChange={(e) => handleChange(e)}
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
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="tenureEnd">End Date</label>
        <input
          type="date"
          name="tenureEnd"
          value={tenureEnd}
          onChange={(e) => handleChange(e)}
          required
        />

        <label htmlFor="experience">Experience</label>
        <textarea
          name="experience"
          cols="30"
          rows="10"
          value={experience}
          onChange={(e) => handleChange(e)}
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

const Experience = (props) => {
  const { experience, editing } = props;
  let field = '';

  if (editing) {
    field = experience.map((company, index) => (
      <ExperienceForm
        key={company.id}
        experience={company}
        index={index}
        onClick={() => props.onClick(index)}
        onBlur={(e) => props.validateOnBlur(e)}
        handleChange={(index, value) =>
          props.onInputChange(index, value)
        }
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
};

// export default Experience;
export default React.memo(Experience, (prevProps, nextProps) => {
  return prevProps.experience === nextProps.experience &&
  prevProps.editing === nextProps.editing;;
});

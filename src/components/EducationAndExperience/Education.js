import React from 'react';
import './Education.css';

const EducationForm = (props) => {
  const { institution, degree, graduationDate } = props.education;
  const { index, parentKey } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const form = {
      ...props.education,
      [name]: value,
    };
    props.handleChange(index, form);
  };

  return (
    <div className="form-wrapper">
      <button
        className="button delete-section"
        type="button"
        onClick={() => props.onClick()}
      >
        Delete
      </button>
      <form>
        <label htmlFor="institution">Institution</label>
        <input
          type="text"
          name="institution"
          value={institution}
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={props.onBlur}
          required
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          name="degree"
          value={degree}
          onChange={(e) => handleChange(e, parentKey)}
          onBlur={props.onBlur}
          required
        />
        <label htmlFor="graduationDate">Graduation Date</label>
        <input
          type="date"
          name="graduationDate"
          value={graduationDate}
          onChange={(e) => handleChange(e, parentKey)}
          required
        />
      </form>
      <br />
    </div>
  );
};

const PrintedFieldItems = (props) => {
  const { education } = props;
  const graduationDateFormatted = education.graduationDate ? education.graduationDate.replaceAll('-', '/'): '' ;

  return (
    <div className="preview-text">
      <p className="bold">{education.institution}</p>
      <div className="title-and-date">
        <p>{education.degree}</p>
        <p>{graduationDateFormatted}</p>
      </div>
    </div>
  );
};

const Education = (props) =>  {
  const { education, parentKey, editing } = props;
  let field = '';

  if (editing) {
    field = education.map((institution, index) => (
      <EducationForm
        education={institution}
        index={index}
        key={institution.id}
        onClick={() => props.onClick(index)}
        handleChange={(index, value) =>
          props.onInputChange(parentKey, index, value)
        }
        parentKey={parentKey}
      />
    ));
  } else {
    field = education.map((institution) => (
      <PrintedFieldItems education={institution} />
    ));
  }

  return (
    <div className="education section">
      <h3>Education</h3>
      {field}
    </div>
  );
}

export default Education;

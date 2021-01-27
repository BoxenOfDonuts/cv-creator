import React from 'react';
import Error from './ErrorSpan';

const EducationForm = (props) => {
  const { institution, degree, graduationDate } = props.education;
  const { index, parentKey, errors } = props;

  const handleClick = (index) => {
    props.onClick(index);
  };

  const handleChange = (e, key) => {
    const { name, value } = e.target;
    const form = {
      ...props.education,
      [name]: value,
    };
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
      <form>
        <div>
          <label htmlFor="institution">Institution</label>
          <input
            type="text"
            name="institution"
            value={institution}
            onChange={(e) => handleChange(e, parentKey)}
            onBlur={handleValidation}
            required
          />
          <Error isError={errors.institution} />
        </div>
        <div>
          <label htmlFor="degree">Degree</label>
          <input
            type="text"
            name="degree"
            value={degree}
            onChange={(e) => handleChange(e, parentKey)}
            onBlur={handleValidation}
            required
          />
        </div>
        <Error isError={errors.degree} />
        <div>
          <label htmlFor="graduationDate">Graduation Date</label>
          <input
            type="date"
            name="graduationDate"
            value={graduationDate}
            onChange={(e) => handleChange(e, parentKey)}
            required
          />
          <Error isError={errors.graduationDate} />
        </div>
      </form>
    </div>
  );
};

class Education extends React.Component {
  handleClick = (index) => {
    this.props.onClick(index);
  };

  handleChange = (key, index, value) => {
    this.props.onInputChange(key, index, value);
  };

  handleValidation = (e) => {
    this.props.validateOnBlur(e);
  };

  render() {
    const { education, parentKey, errors } = this.props;

    return (
      <div className="education">
        <h3>Education</h3>
        {education.map((institution, index) => (
          <EducationForm
            education={institution}
            index={index}
            key={institution.id}
            onClick={this.handleClick}
            handleChange={this.handleChange}
            onBlur={this.handleValidation}
            parentKey={parentKey}
            errors={errors}
          />
        ))}
      </div>
    );
  }
}

export default Education;

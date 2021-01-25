import React from "react";

const EducationForm = (props) => {
  const { institution, degree, graduationDate } = props.education;
  const { index, parentKey } = props;

  const handleClick = (index) => {
    props.onClick(index);
  };

  const handleChange = (e, key) => {
    console.log(key);
    const { name, value } = e.target;
    const form = {
      ...props.education,
      [name]: value,
    };
    props.handleChange(key, index, form);
  };

  const handleValidation = (e) => {
      props.onBlur(e);
  }

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
        <div>
          <label htmlFor="graduationDate">Graduation Date</label>
          <input
            type="date"
            name="graduationDate"
            value={graduationDate}
            onChange={(e) => handleChange(e, parentKey)}
            required
          />
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
    const { education, parentKey } = this.props;

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
          />
        ))}
      </div>
    );
  }
}

export default Education;

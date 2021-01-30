import React from 'react';
import Error from './ErrorSpan';

const EducationForm = (props) => {
  const { institution, degree, graduationDate } = props.education;
  const { index, parentKey, errors } = props;

  const handleChange = (e) => {
    const { name, value } = e.target;
    const form = {
      ...props.education,
      [name]: value,
    };
    props.handleChange(index, form);
  };

  return (
    <div>
      <button type="button" onClick={() => props.onClick()}>
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
            onBlur={props.onBlur}
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
            onBlur={props.onBlur}
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

const PrintedFieldItems = (props) => {
  const {education } = props;

  return (
    <div>
      <p>{education.institution}</p>
      <p>{education.degree}</p>
      <p>{education.graduationDate}</p>
    </div>
  );
}

class Education extends React.Component {
  render() {
    const { education, parentKey, errors, editing } = this.props;
    let field = '';

    if (editing) {
      field = education.map((institution, index) =>
        <EducationForm
            education={institution}
            index={index}
            key={institution.id}
            onClick={() => this.props.onClick(index)}
            handleChange={(index, value) => this.props.onInputChange(parentKey, index, value)}
            onBlur={(e) => this.props.validateOnBlur(e)}
            parentKey={parentKey}
            errors={errors}
        />      
      )
    } else {
      field = education.map((institution) => 
        <PrintedFieldItems
        education={institution}
      />  
      )
    }  

    console.log(field)

    return (
      <div className="education">
        <h3>Education</h3>
        {field}
      </div>    
    );
  }  
}  

export default Education;

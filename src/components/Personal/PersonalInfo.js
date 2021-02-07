import React from 'react';
import './Personal.css';

const PersonalInfo = (props) => {
  const { personalData, editing } = props;
  let field = '';

  const handleChange = (e) => {
    const { name, value } = e.target;
    props.onInputChange(name, value);
  };

  const handleValidation = (e) => {
    props.validateOnBlur(e);
  };

  if (editing) {
    field = (
      <InputField
        personalData={personalData}
        onChange={handleChange}
        onblur={handleValidation}
      />
    );
  } else {
    field = <PrintedField personalData={personalData} />;
  }

  return (
    <div className="personal-info section">
      <h3>Personal Information</h3>
      {field}
    </div>
  );
};

const PrintedField = (props) => {
  const { personalData } = props;

  return (
    <div className="preview-text">
      <div className="name">
        <p>{personalData.name}</p>
        <p>{personalData.lastName}</p>
      </div>
      <div className="contact">
        <p>{personalData.email}</p>
        <p className="text-align-right">{personalData.phone}</p>
      </div>
    </div>
  );
};

const InputField = (props) => {
  const { personalData } = props;

  return (
    <div className="form-wrapper">
      <form>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={personalData.name}
          name="name"
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={personalData.lastName}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={personalData.email}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={personalData.phone}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
      </form>
    </div>
  );
};

export default PersonalInfo;

import React from 'react';

class PersonalInfo extends React.Component {
  handleChange = (e) => {
    const { name, value } = e.target;
    this.props.onInputChange(this.props.parentKey, name, value);
  };

  handleValidation = (e) => {
    this.props.validateOnBlur(e);
  };

  render() {
    const { personalData, editing } = this.props;
    let field = '';

    if (editing) {
      field = <InputField
        personalData={personalData}
        onChange={this.handleChange}
        onblur={this.handleValidation}
      />
    } else {
      field = <PrintedField 
        personalData={personalData}
      />
    }

    return (
      <div className="person-info">
        <h3>Personal Information</h3>
        {field}
      </div>
    );
  }
}


const PrintedField = (props) => {
  const {personalData } = props;

  return (
    <div>
      <p>{personalData.name}</p>
      <p>{personalData.lastName}</p>
      <p>{personalData.email}</p>
      <p>{personalData.phone}</p>
    </div>
  );
}

const InputField = (props) => {
  const { personalData } = props;

  return (
    <div>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          value={personalData.name}
          name="name"
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          value={personalData.lastName}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
      </div>
      <div></div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          value={personalData.email}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
      </div>
      <div>
        <label htmlFor="phone">Phone Number</label>
        <input
          type="tel"
          name="phone"
          value={personalData.phone}
          onChange={props.onChange}
          onBlur={props.onBlur}
          required
        />
      </div>
    </div>
  );
}

export default PersonalInfo;
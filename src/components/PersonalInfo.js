import React from "react";
import Error from './ErrorSpan'

class PersonalInfo extends React.Component {
  handleChange = (key, e) => {
    const { name, value } = e.target;
    this.props.onInputChange(key, name, value);
  };

  handleValidation = (e) => {
      this.props.validateOnBlur(e);
  }

  render() {
    const { personalData } = this.props;
    const { parentKey: key } = this.props;

    return (
      <div className="person-info">
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            value={personalData.name}
            name='name'
            onChange={(e) => this.handleChange(key, e)}
            onBlur={this.handleValidation}
            required
          />
          <Error isError={true}/>
        </div>
        <div>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            name="lastName"
            value={personalData.lastName}
            onChange={(e) => this.handleChange(key, e)}
            onBlur={this.handleValidation}
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
            onChange={(e) => this.handleChange(key, e)}
            onBlur={this.handleValidation}
            required
          />
        </div>
        <div>
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            name="phone"
            required
            onChange={(e) => this.handleChange(key, e)}
            onBlur={this.handleValidation}
            value={personalData.phone}
          />
        </div>
      </div>
    );
  }
}

export default PersonalInfo;

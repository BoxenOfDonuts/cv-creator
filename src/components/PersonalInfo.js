import React from 'react';

class PersonalInfo extends React.Component {
  handleChange = (key, e) => {
    const { name, value } = e.target;
    this.props.onInputChange(key, name, value);
  };

  handleValidation = (e) => {
    this.props.validateOnBlur(e);
  };

  render() {
    const { personalData, editing } = this.props;
    const { parentKey: key } = this.props;
    let className = '';

    if (editing) {
      className += 'editing'
    }

    return (
      <div className="person-info">
        <h3>Personal Information</h3>
        <div className={className}>
          <div>
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              value={personalData.name}
              name="name"
              onChange={(e) => this.handleChange(key, e)}
              onBlur={this.handleValidation}
              required
            />
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
      </div>
    );
  }
}

export default PersonalInfo;

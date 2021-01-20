import React from "react";

class PersonalInfo extends React.Component {
    render() {
        const {personalData} = this.props;

        return (
            <div className='person-info'>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={personalData.name} required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={personalData.lastName} required/>
                </div>
                <div>

                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={personalData.email} required />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" required value={personalData.phone} />
                </div>
            </div>
        );
    }
}


export default PersonalInfo;
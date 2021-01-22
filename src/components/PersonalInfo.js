import React from "react";

class PersonalInfo extends React.Component {
    handleChange = (key, name, e) => {
        this.props.onInputChange(key, name, e.target.value)
    }

    render() {
        const {personalData} = this.props;
        const {  parentKey: key } = this.props
        console.log(this.props.personalData)



        return (
            <div className='person-info'>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" value={personalData.name} onChange={(e)=> this.handleChange(key, 'name', e)} required />
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" name="lastName" value={personalData.lastName} onChange={(e)=> this.handleChange(key, 'lastName', e)} required/>
                </div>
                <div>

                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" value={personalData.email} onChange={(e)=> this.handleChange(key, 'email', e)} required />
                </div>
                <div>
                    <label htmlFor="phone">Phone Number</label>
                    <input type="tel" name="phone" required onChange={(e)=> this.handleChange(key, 'phone', e)} value={personalData.phone} />
                </div>
            </div>
        );
    }
}


export default PersonalInfo;
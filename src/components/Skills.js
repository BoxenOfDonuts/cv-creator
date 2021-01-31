import React from 'react';
import './Skills.css'

class Skills extends React.Component {
  constructor(state) {
    super(state);

    this.state = {
      list: this.props.skills,
      value: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  handleSubmit = (e) => {
    console.log(this.props);
    if (this.state.value)
      this.setState((state) => {
        const list = [...state.list, state.value];
        this.props.onSkillUpdate(list);
        e.preventDefault();
        return {
          list,
          value: '',
        };
      });
  };

  handleRemove = (index) => {
    console.log(index);
    this.setState((state) => {
      const list = state.list.filter(
        (item, currentIndex) => currentIndex !== index
      );
      this.props.onSkillUpdate(list);
      return {
        list,
      };
    });
  };

  render() {
    const { list, value } = this.state;
    const { editing } = this.props;
    let input ='';
    
    const listItems = list.map((skill, index) => {
      let btnClassName = 'delete button';
      if (editing) {
        btnClassName += ' editing'
      }
      return (
        <li key={skill.toString()}>
          {skill}
          <span
            className={btnClassName}
            onClick={() => this.handleRemove(index)}
          >
            {'Delete Me'}
          </span>
        </li>
      );
    });

    if (editing) {
      input =
        <form className={'skill-form'} onSubmit={this.handleSubmit}>
          <label>
            <input
              type="text"
              name="content"
              value={value}
              onChange={this.handleChange}
              placeholder="Press enter to add a skill"
              required
            ></input>
          </label>
          {/* <button className='button submit' type="submit">Submit</button> */}
        </form>
    }

    return (
      <div className="skill-list section">
        <h3>Technical Skills and Capalilities</h3>
        {input}
        <div>
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default Skills;

import React from 'react';

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
    e.preventDefault();
    if (this.state.value)
      this.setState((state) => {
        const list = [...state.list, state.value];
        this.props.onSkillUpdate(list);
        this.isValid(this.state.value);
        return {
          list,
          value: '',
        };
      });
    else {
      this.props.onSkillSubmit(e);
    }
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
    const listItems = list.map((skill, index) => {
      return (
        <li key={skill.toString()}>
          {skill}
          <span
            className="delete button"
            onClick={() => this.handleRemove(index)}
          >
            {'Delete Me'}
          </span>
        </li>
      );
    });

    return (
      <div>
        <h3>Technical Skills and Capalilities</h3>
        <form onSubmit={this.handleSubmit} noValidate>
          <label>
            <input
              type="text"
              name="content"
              value={value}
              onChange={this.handleChange}
              required
            ></input>
          </label>
          <button type="submit">Submit</button>
        </form>
        <div className="skill-list">
          <ul>{listItems}</ul>
        </div>
      </div>
    );
  }
}

export default Skills;

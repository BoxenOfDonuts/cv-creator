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

  skillFormatting = (count) => {
    let columns = 0;
    let rows = 0;
    
    if (count % 4 === 0 ) {
      columns = 4;
      rows = count / 4;
    } else if (count % 3 === 0) {
      columns = 3;
      rows = count / 3;
    } else if ( count === 5 || count === 10) {
      columns = 5;
      rows = count / 5;
    } else if (count === 2) {
      columns = 2;
      rows = 1
    }

    const gridStyle = {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    }

    return gridStyle;
  }


  render() {
    const { list, value } = this.state;
    const { editing } = this.props;
    let input ='';
    const gridStyle = this.skillFormatting(list.length)

    const listItems = list.map((skill, index) => {
      return (
        <li
          onClick={() =>this.handleRemove(index)}
          key={skill.toString()}
        >
          <span className='delete-skill'>{skill}</span>
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
        </form>
    }

    return (
      <div className="skill-list section">
        <h3>Technical Skills and Capalilities</h3>
        {input}
        <div>
          <ul
            style={gridStyle}
          >
            {listItems}
          </ul>
        </div>
      </div>
    );
  }
}

export default Skills;

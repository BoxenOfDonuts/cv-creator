import React, { useState }from 'react';
import './Skills.css';

const Skills = (props) => {
  const [ skillList, setSkillList ] = useState(props.skills);
  const [ value, setValue ] = useState('');
  const { editing } = props;

  const handleChange = (e) => {
    setValue(e.target.value)
  };

  const handleSubmit = (e) => {
    if (value) {
      const list = [...skillList, value]
      setSkillList(list);
      props.onSkillUpdate(list)
      setValue('');
      e.preventDefault();
    }
  };

  const handleRemove = (index) => {
    const list = skillList.filter((item, currentIndex ) => currentIndex !== index)
    props.onSkillUpdate(list)
    setSkillList(list)
  };

  const skillFormatting = (count) => {
    let columns = 0;
    let rows = 0;

    if (count % 4 === 0) {
      columns = 4;
      rows = count / 4;
    } else if (count % 3 === 0) {
      columns = 3;
      rows = count / 3;
    } else if (count === 5 || count === 10) {
      columns = 5;
      rows = count / 5;
    } else if (count === 2) {
      columns = 2;
      rows = 1;
    }

    const gridStyle = {
      gridTemplateColumns: `repeat(${columns}, 1fr)`,
      gridTemplateRows: `repeat(${rows}, 1fr)`,
    };

    return gridStyle;
  };


    let input = '';
    console.log(`skill list len: ${skillList}`)
    const gridStyle = skillFormatting(skillList.length);

    const listItems = skillList.map((skill, index) => {
      return (
        <li onClick={() => handleRemove(index)} key={skill.toString()}>
          <span className="delete-skill">{skill}</span>
        </li>
      );
    });

    if (editing) {
      input = (
        <form className={'skill-form'} onSubmit={handleSubmit}>
          <label>
            <input
              type="text"
              name="content"
              value={value}
              onChange={handleChange}
              placeholder="Press enter to add a skill"
              required
            ></input>
          </label>
        </form>
      );
    }

    return (
      <div className="skill-list section">
        <h3>Technical Skills and Capalilities</h3>
        {input}
        <div>
          <ul style={gridStyle}>{listItems}</ul>
        </div>
      </div>
    );
}

export default Skills;

// import React, { PureComponent } from 'react';
// import reactDom from 'react-dom';

// class HabitAddForm extends PureComponent {
//   inputRef = React.createRef();

//   onSubmit = (event) => {
//     event.preventDefault();
//     let name = this.inputRef.current.value;
//     name && this.props.onAdd(name);
//     this.inputRef.current.value = '';
//     this.inputRef.current.focus();
//   };

//   render() {
//     return (
//       <form className='add__form' onSubmit={this.onSubmit}>
//         <input
//           ref={this.inputRef}
//           type='text'
//           className='add__input'
//           placeholder='please enter your habit'
//         />
//         <button className='add__button'>Add</button>
//       </form>
//     );
//   }
// }

// export default HabitAddForm;

import React, { memo } from 'react';

const HabitAddForm = memo((props) => {
  const inputRef = React.createRef();

  const onSubmit = (event) => {
    event.preventDefault();
    const name = inputRef.current.value;
    name && props.onAdd(name);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  return (
    <form className='add__form' onSubmit={onSubmit}>
      <input
        ref={inputRef}
        type='text'
        className='add__input'
        placeholder='please enter your habit'
      />
      <button className='add__button'>Add</button>
    </form>
  );
});

export default HabitAddForm;

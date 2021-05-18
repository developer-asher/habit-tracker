import React, { PureComponent } from 'react';

class Navbar extends PureComponent {
  render() {
    return (
      <nav className='navbar'>
        <i className='fas fa-leaf navbar__logo'></i>
        <span className='navbar__title'>Habit Tracker</span>
        <span className='navbar__count'>{this.props.totalCount}</span>
      </nav>
    );
  }
}

export default Navbar;

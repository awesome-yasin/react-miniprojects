import React from 'react';
import SearchCountry from './SearchCountry'

class Covid extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className='title'>Covid 19 Tracker App</h1>
        <SearchCountry />
       
      </div>
    );
  }
}

export default Covid;
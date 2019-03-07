import React from 'react';
import TopMenu from '../components/TopMenu';
import BodyMenu from '../components/BodyMenu';

export default class Supreme extends React.Component {

  render() {
    return (
        <div className='background'>
          <TopMenu/>
          <BodyMenu/>
        </div>
    );
  }
}

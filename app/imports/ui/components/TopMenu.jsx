import React from 'react';
import { Container, Image } from 'semantic-ui-react';

export default class TopMenu extends React.Component {
  render() {
    return (
        <Container className='containerOne'>
          <Image centered size='small'
                 src={'https://d17ol771963kd3.cloudfront.net/assets' +
                 '/logo-supreme-x2-f707db46c563650bd04d7fe123e78d68.png'}/>
          <div className="time-block">
            <a id="styleA">00/00/0000 00:00pm NYC</a>
          </div>
        </Container>
    );
  }
}

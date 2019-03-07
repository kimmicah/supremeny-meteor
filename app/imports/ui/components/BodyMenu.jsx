import React from 'react';
import { Container, List } from 'semantic-ui-react';

export default class BodyMenu extends React.Component {
  render() {
    return (
        <Container className='containerTwo'>
          <List>
            <List.Item id="styleA1" href="http://www.supremenewyork.com/news">news <br/></List.Item>

            <List.Item id="styleA2" href="https://www.supremenewyork.com/previews/springsummer2019">spring/summer 2019
              preview <br/></List.Item>

            <List.Item id="styleA3" href="https://www.supremenewyork.com/lookbooks">spring/summer 2019
              lookbook <br/></List.Item>

            <List.Item id="styleA4" href="https://www.supremenewyork.com/shop">shop <br/></List.Item>

            <List.Item id="styleA5" href="https://github.com/kimmicah">random <br/></List.Item>

            <List.Item id="styleA6" href="https://www.supremenewyork.com/about">about <br/></List.Item>

            <List.Item id="styleA7" href="https://www.supremenewyork.com/stores">stores <br/></List.Item>

            <List.Item id="styleA8" href="https://www.supremenewyork.com/contact">contact <br/></List.Item>

            <List.Item id="styleA9" href="https://www.supremenewyork.com/mailinglist">mailinglist </List.Item>

          </List>
        </Container>
    );
  }
}

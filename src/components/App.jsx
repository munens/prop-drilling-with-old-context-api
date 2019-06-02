import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Body from './Body';
import styled from '@emotion/styled';

const theme = {
  light: {
    bgColor: 'white',
    textColor: 'black'
  },
  dark: {
    bgColor: 'black',
    textColor: 'white'
  }
};

const Container = styled.div`
  width: 1190px;
  margin: 0 auto;
`;

export class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: 'light'
    };
  }

  getChildContext = () => ({
    getTheme: () => theme[this.state.theme]
  });

  render() {
    return (
      <Container>
        <Header
          theme={theme[this.state.theme]}
          changeTheme={this.changeTheme}
        />
        <Body
          theme={theme[this.state.theme]}
        />
      </Container>
    );
  }

  changeTheme = () => {
    this.setState({
      theme: (this.state.theme === 'light') ? 'dark' : 'light'
    })
  }
}

App.childContextTypes = {
  getTheme: PropTypes.func.isRequired
};

export default App;

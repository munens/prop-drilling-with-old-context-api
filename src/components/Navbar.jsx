import React, {Component} from 'react';
import styled from '@emotion/styled';
import NavItems from './NavItems';
import {Flex} from './elements';

const NavLogo = styled.div`
  font-size: 24px;
  font-weight: bold;
  color: ${({textColor}) => textColor};
`;

const NavContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({theme: {textColor}}) => textColor};
  height: 100px;
  padding: 20px;
  background: ${({theme: {bgColor}}) => bgColor};
`;

export class Navbar extends Component {
  render() {

    const {
      theme
    } = this.props;

    return (
      <NavContainer theme={theme}>
        <NavLogo textColor={theme.textColor}>logo</NavLogo>
        <NavItems {...this.props} />
      </NavContainer>
    );
  }
}

export default Navbar

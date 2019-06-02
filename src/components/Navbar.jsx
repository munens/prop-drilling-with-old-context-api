import React from 'react';
import PropTypes from 'prop-types';
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

const Navbar = (props, {
  getTheme
}) => {
  const theme = getTheme();
  return (
    <NavContainer theme={theme}>
      <NavLogo textColor={theme.textColor}>logo</NavLogo>
      <NavItems {...props} />
    </NavContainer>
  );
}

Navbar.contextTypes = {
  getTheme: PropTypes.func.isRequired
};

export default Navbar;

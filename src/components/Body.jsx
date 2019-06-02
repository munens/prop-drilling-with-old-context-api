import React, { Component } from 'react'
import styled from '@emotion/styled';

const BodyContainer = styled.div`
  padding: 20px;
  font-size: 18px;
  color: darkgrey;
  background: ${({bgColor}) => bgColor};
`;

export class Body extends Component {
  render() {
    return (
      <BodyContainer bgColor={this.props.theme.bgColor}>
        Body
      </BodyContainer>
    )
  }
}

export default Body;

import React from 'react';
import styled from 'styled-components';

function User(props) {
    const {
        user
    }=props;

    return (
        <Container>
            <Info>{user.name}</Info>
            <Info>{user.email}</Info>
            <Info>{user.phone}</Info>
        </Container>
    )
}

const Container = styled.div`
  padding: 10px;
  margin: 10px;
  background: #f7f8f9;
`;

const Info = styled.div`
  padding: 5px;
  font-size: 14px;
  
`;

export default User;
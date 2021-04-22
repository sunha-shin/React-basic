import React from 'react'
import styled from 'styled-components';

function Popup(props) {
    const {
        onClose
    }=props;

    return (
        <Container onClick={() => onClose(false)}>
            Popup
        </Container>
    )
}

const Container = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(0,0,0,0.6);
  color: #fff;
  font-weight: 600;
  font-size: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export default Popup;
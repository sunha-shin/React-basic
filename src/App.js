import React, {useEffect, useState} from 'react'
import styled from 'styled-components';
import Popup from "./components/Popup";
import axios from "axios";
import User from "./components/User";

function App(props) {
    const {} = props;

    const [popup, handlePopup] = useState(false);
    const [users, setUsers] = useState([]);

    useEffect(()=> {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(res => {
                console.log("@@ res", res)
                const data = res.data;
                setUsers(data);
            })
    }, [])
    // useEffect -- ComponentDidMount
    // evoke after return is called

    return (
        <Container>
            <Button onClick={() => {
                handlePopup(true)
            }}>Show Popup</Button>

            {
                popup &&
                <Popup onClose={handlePopup}/>
            }

            <UserContainer>
                {
                    users.map((user, index) => {
                        return <User key={index} user={user} />
                    })
                }
            </UserContainer>


        </Container>
    )
}

const Container = styled.div`

`;


const Button = styled.div`
  border: 1px solid #ddd;
  background: #3eb9f6;
  color: #fff;
  width: 248px;
  height: 58px;
  display: flex;
  justify-content: center;
  font-size: 15px;
  cursor: pointer;
`;

const UserContainer = styled.div`
  
`;

export default App;
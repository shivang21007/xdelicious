import {FaPizzaSlice, FaHamburger} from 'react-icons/fa';
import {GiFastNoodles, GiChopsticks, GiIndiaGate, GiFrenchFries} from 'react-icons/gi';
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Category() {
  return (
    <List>
      <SLink to={'/cuisine/Indian'}>
            <GiIndiaGate/>
            <h4>Indian</h4>
        </SLink>

        <SLink to={'/cuisine/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </SLink>

        {/* <SLink to={'/cuisine/French'}>
            <GiFrenchFries/>
            <h4>French</h4>
        </SLink> */}

        <SLink to={'/cuisine/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </SLink >
        
        <SLink to={'/cuisine/Chinese'}>
            <GiFastNoodles/>
            <h4>Chinese</h4>
        </SLink>

        <SLink to={'/cuisine/Japanese'}>
            <GiChopsticks/>
            <h4>Japanese</h4>
        </SLink>
    </List>
  );
};

const List = styled.div`
display: flex;
justify-content: center;
margin: 5rem 0rem;
`;

const SLink = styled(NavLink)`
  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border-radius: 50%;
margin-right: 2rem;
text-decoration: none;
background: linear-gradient(35deg, #494949, #313131);
width: 7rem;
height: 7rem;
cursor: pointer;
transform: scale(0.8);

&:hover{
    background: linear-gradient(to right, #2772af, #b93d9c);
  }

h4 {
  color: white;
  font-size: 1rem;
}

svg {
  color: white;
  font-size: 2.2rem;
}

&.active{
    background: linear-gradient(to right, #2772af, #b93d9c);

  svg {
    color: white;
  }
  h4{
    color: white;
  }
}
`;

export default Category;

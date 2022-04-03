import styled from 'styled-components'

export const Container = styled.div`
font-family: 'oswald';
  background: #365ac0;
  width: 800px;
  height: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  border-radius: 20px;
  ::-webkit-scrollbar {
  display: none;
}

img {
  margin-top: 50px;
}
`;

export const Title = styled.div`
  font-size: 40px;
  color: gray;

`;

export const Input = styled.input`
    width: 330px;
    height: 50px;
    margin: 0 0 25px 40px;
    padding: 5px;
    flex: none;
    border-radius: 10px;
    border: none;
`;

export const Button = styled.button`
  background: ${props => props.isOn ? '#000000' : 'gray'};
  border-radius: 10px;
  margin-left: 40px;
  width: 342px;
  height: 64px;
  color: white;
  border: none;
  font-size: 17px;
  cursor: pointer;
  flex: none;
`;
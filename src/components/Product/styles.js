import styled from 'styled-components'
import { IconEdit } from '../../assets/svgs';
import { IconDelete } from '../../assets/svgs';

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
  margin-bottom: 15px;
  width: 342px;
  height: 64px;
  color: white;
  border: none;
  font-size: 17px;
  cursor: pointer;
  flex: none;
`;

export const List = styled.ul`
  li {
    background: rgba(255, 255, 255, 0.14);
    width:342px;
    height: 130px;
    margin-top: 20px;
    list-style-type: none;
    color: white;
    text-decoration-line: none;
    padding: 5px;
    overflow-wrap: break-word;
    margin-bottom: 10px;
    border-radius: 10px;
  }
`;

export const StyledIconEdit = styled(IconEdit)`
  width:30px;
  float:right;
`;

export const StyledIconDelete = styled(IconDelete)`
  width:30px;
  float:right;
`;
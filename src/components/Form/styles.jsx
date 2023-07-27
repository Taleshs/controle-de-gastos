import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  margin: 20px auto;
  width: 100%;
  background-color: #fff;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  display: flex;
  justify-content: space-around;
  padding: 2em;
  gap: 10px;

  @media (max-width: 750px) {
    width:90%;
    display: grid;
  }
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size:12px;
  padding-bottom:10px;
  color:#ccc;
`

export const Input = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #ccc;
  &.input-error {
    border: 2px solid red;
  }
`;

export const InputMask = styled.input`
  outline: none;
  border-radius: 5px;
  padding: 15px 10px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #ccc;
  &.input-error {
    border: 2px solid red;
  }
`;


export const RadioGroup = styled.div`
  display: flex;
  align-items: center;

  input {
    margin-left: 20px;
    margin-right: 5px;
    margin-top: 0;
  }

  label{
    font-size:16px;
    padding:0;
    cursor:pointer;
    &:hover{
      color:#2a2a2a;
    }
  }
  
`;

export const Button = styled.button`
  padding: 5px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #fff;
  font-weight:700;
  background-color: #175676;
  border:2px solid #175676;
  transition: all .2s ease-out;
  &:hover {
    color: #175676;
    background-color: #fff;
    transition: all .2s ease-out;
  }
  
`;
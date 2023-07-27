import styled from "styled-components";

export const Container = styled.div`
  max-width: 1000px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  gap: 20px;
  margin-top: -50px;
  justify-content: space-between;

  @media (max-width: 750px) {
    width: 90%;
    display:flex;
    flex-direction: column;
  }
`;


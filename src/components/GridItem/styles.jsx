import styled from "styled-components";

export const Tr = styled.tr`
border-bottom:1px solid red
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  word-break: break-all;

  svg {
    width: 22px;
    height: 22px;
  }
`;

export const Button = styled.button`
background:#fff;
border:none;
cursor: pointer;

&:hover {
  svg {
    fill:#c96f7b;
    transition: all .2s ease-out;
  }
}
svg {
  transition: all .2s ease-out;
  width: 16px;
  height: 16px;
  fill:#D7263D;
}
`;
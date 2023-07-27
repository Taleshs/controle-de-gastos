import * as C from "./styles";
import formatMoney from '../../utils'

const ResumeItem = ({ title, Icon, value, bg_color }) => {
  return (
        
    <C.Container  bg_color={bg_color}>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{formatMoney(value)}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
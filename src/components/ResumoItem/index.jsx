import * as C from "./styles";
const formatMoney = (value) => {
  return new Intl.NumberFormat(formatMoney, {
    style: 'currency',
    currency: 'BRL',
    minimumFractionDigits: value % 1 === 0 ? 0 : 2,
    maximumFractionDigits: value % 1 === 0 ? 0 : 2,
  }).format(value)
}

const ResumeItem = ({ title, Icon, value }) => {
  return (
    <C.Container>
      <C.Header>
        <C.HeaderTitle>{title}</C.HeaderTitle>
        <Icon />
      </C.Header>
      <C.Total>{formatMoney(value)}</C.Total>
    </C.Container>
  );
};

export default ResumeItem;
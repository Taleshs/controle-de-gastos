const formatMoney = (value) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: value % 1 === 0 ? 2 : 2,
      maximumFractionDigits: value % 1 === 0 ? 2 : 2,
    }).format(value);
  };
  
  export default formatMoney;
import * as C from "./styles";
import formatMoney from '../../utils'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaTrash,
} from "react-icons/fa";

const GridItem = ({ item, onDelete }) => {
  return (
    <C.Tr>
      <C.Td>{item.desc}</C.Td>
      <C.Td>{formatMoney(item.amount)}</C.Td>
      <C.Td alignCenter>
        {item.expense ? (
          <FaRegArrowAltCircleDown color="red" />
        ) : (
          <FaRegArrowAltCircleUp color="green" />
        )}
      </C.Td>
      <C.Td alignCenter>
        <C.Button onClick={() => onDelete(item.id)}><FaTrash/></C.Button>
      </C.Td>
    </C.Tr>
  );
};

export default GridItem;
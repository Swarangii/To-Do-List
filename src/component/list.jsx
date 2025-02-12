const List = ({ item, onDeleteItems, handleDoneItems }) => {
  const { quantity, product, packed, id } = item;
  return (
    <li className="listWrapper">
      <span>{quantity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button onClick={() => handleDoneItems(id)} className="doneBtn">
          Done
        </button>
        <button onClick={() => onDeleteItems(id)} className="deleteBtn">
          Delete
        </button>
      </div>
    </li>
  );
};
export default List;

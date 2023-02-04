export const NumberedList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <>
          <p>Numbered</p>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
};

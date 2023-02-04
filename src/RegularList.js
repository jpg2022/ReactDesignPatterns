export const RegularList = ({
  items,
  resourceName,
  itemComponent: ItemComponent,
}) => {
  return (
    <>
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} /> //turns into ex. people={items}, which passes through smallpersonlistitem
      ))}
    </>
  );
};

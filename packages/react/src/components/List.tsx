import React, { FC } from "react";
interface ListProps {
  items: Array<any>;
  itemComponent: React.JSXElementConstructor<any>;
  data: string;
}
export const List = ({
  items,
  itemComponent: ItemComponent,
  data,
}: ListProps) => {
  return (
    <div>
      {items.map((item, i) => {
        return <ItemComponent key={i} {...{ [data]: item }} />;
      })}
    </div>
  );
};

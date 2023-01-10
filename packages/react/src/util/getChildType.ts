import React, { JSXElementConstructor, ReactElement, ReactPortal } from "react";

interface TabChild {
  type: {
    name: string;
  };
}
export const getChildType = (
  child:
    | string
    | number
    | boolean
    | {}
    | ReactElement<any, string | JSXElementConstructor<any>>
    | ReactPortal
    | null
    | undefined
) => {
  if (React.isValidElement<TabChild>(child)) {
    return (child as TabChild).type.name;
  }
};

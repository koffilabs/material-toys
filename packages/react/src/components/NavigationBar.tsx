import React, { cloneElement, ReactElement, ReactNode, useState } from "react";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { NavigationBarItem } from "./NavigationBarItem";
import { useComponentClass } from "../hooks/useComponentClass";

interface NavigationBarArgs {
  children?: ReactNode;
  activeItem?: number;
  labels?: "show" | "selected" | "none";
  className?: string;
}

export const NavigationBar = ({
  children,
  activeItem,
  labels = "show",
  className = "",
}: NavigationBarArgs) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const [selectedIndex, setSelectedIndex] = useState(activeItem);
  const onClick = (activeIndex: number) => {
    setSelectedIndex(activeIndex);
  };
  const NavigationItemMapperFactory = () => {
    let itemIndex = 0;
    const NavigationItemMapper = (child: ReactElement): ReactNode => {
      if (child.type === NavigationBarItem) {
        itemIndex++;
        return cloneElement(child, {
          active: itemIndex - 1 === selectedIndex,
          label: labels,
          onClick: ((idx) => (e: MouseEvent) => {
            onClick(idx);
            if (typeof child.props.onClick === "function") {
              return child.props.onClick(e);
            }
          })(itemIndex - 1),
        });
      }
      if (child.props && child.props.children) {
        return cloneElement(child, {
          children: React.Children.map(
            child.props.children,
            NavigationItemMapper
          ),
        });
      }
      return child;
    };
    return NavigationItemMapper;
  };
  const { className: barTheme } = useComponentClass({
    path: "components.NavigationBar",
  });

  const NavigationItemMapper = NavigationItemMapperFactory();

  return (
    <div
      data-mode="bar"
      className={`${barTheme}${className ? ` ${className}` : ""}`}
    >
      {React.Children.map(children as ReactElement, NavigationItemMapper)}
    </div>
  );
};

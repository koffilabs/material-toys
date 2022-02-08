import React, {
  cloneElement,
  ReactElement,
  ReactNode,
  useContext,
  useState,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useTheme } from "../hooks/useTheme";
import { NavigationBarItem } from "./NavigationBarItem";
interface NavigationBarArgs {
  children?: ReactNode;
  activeItem?: number;
  labels?: "show" | "selected" | "none";
}
export const NavigationBar = ({
  children,
  activeItem,
  labels = "show",
}: NavigationBarArgs) => {
  const { ThemeContext, VariantContext } = useTheme();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
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
  const barTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationBar,
      theme,
    })
  );
  const NavigationItemMapper = NavigationItemMapperFactory();

  return (
    <div data-mode="bar" className={`${barTheme}`}>
      {React.Children.map(children as ReactElement, NavigationItemMapper)}
    </div>
  );
};

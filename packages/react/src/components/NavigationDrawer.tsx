import React, {
  cloneElement,
  useState,
  ReactNode,
  ReactElement,
  ComponentType,
} from "react";
import { FAB } from "./FAB";
import { css } from "@emotion/css";
import { usePrevious } from "../hooks/usePrevious";
import { useThemeContexts } from "../hooks/useThemeContexts";
import { NavigationItem } from "./NavigationItem";
import { Ripple } from "./Ripple";
import { useComponentClass } from "../hooks/useComponentClass";
const scrim = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 5,
  // TODO: use tokens instead
  background: "rgba(0, 0, 0, .4)",
});

const Scrim = ({ ...props }) => {
  return <div className={`scrim ${scrim}`} {...props} />;
};

interface NavigationDrawerProps {
  onDismiss?: () => void;
  collapsed?: boolean;
  activeItem?: number;
  fab?: ComponentType<typeof FAB>;
  menu?: ReactNode;
  header?: ReactNode;
  children?: ReactNode;
  railLabels?: "show" | "selected" | "none";
  mode?: "drawer" | "modal" | "rail";
  justify?: "start" | "center" | "end";
  className?: string;
}

export const NavigationDrawer = ({
  collapsed,
  activeItem,
  children,
  fab,
  menu,
  header,
  onDismiss = () => {},
  railLabels = "selected",
  mode = "drawer",
  justify = "start",
  className = "",
  ...props
}: NavigationDrawerProps) => {
  // TODO: refactor, should reuse NavigationItemMapperFactory in NavigationBar
  const [selectedIndex, setSelectedIndex] = useState(activeItem);
  const onClick = (activeIndex: number) => {
    setSelectedIndex(activeIndex);
  };
  const NavigationItemMapperFactory = () => {
    let itemIndex = 0;
    const NavigationItemMapper = (child: ReactElement): ReactNode => {
      if (child.type === NavigationItem) {
        itemIndex++;
        return cloneElement(child, {
          active: itemIndex - 1 === selectedIndex,
          railLabel: railLabels,
          onClick: ((idx) => (e: MouseEvent) => {
            onClick(idx);
            if (typeof child.props.onClick === "function") {
              return child.props.onClick(e);
            }
          })(itemIndex - 1),
        } as any);
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

  let styleObj: any = {
    width: `${mode === "rail" ? "80" : "360"}px`,
  };
  const { className: drawerTheme } = useComponentClass({
    path: "components.NavigationDrawer",
  });

  const previousMode = usePrevious(mode);
  if (mode === "modal") {
    styleObj = {
      ...styleObj,
      position: "fixed",
      top: 0,
      left: 0,
      bottom: 0,
      zIndex: 110,
    };
  }
  // const drawer = css(styleObj);

  const NavigationItemMapper = NavigationItemMapperFactory();
  return (
    <>
      {mode === "modal" && !collapsed && <Scrim onClick={onDismiss} />}
      <div
        data-mode={mode}
        data-collapsed={collapsed}
        data-justify={justify}
        {...props}
        className={`${drawerTheme}${className ? ` ${className}` : ""}`}
      >
        <header>{header}</header>
        <div className="scroller">
          <div className="buttonsContainer">
            <>
              {menu && (
                <Ripple>
                  <div className="menuContainer">
                    {menu}
                    <div className="state" />
                  </div>
                </Ripple>
              )}
              {fab}
            </>
          </div>
          <div className="listContainer">
            {React.Children.map(children as ReactElement, NavigationItemMapper)}
          </div>
        </div>
      </div>
    </>
  );
};

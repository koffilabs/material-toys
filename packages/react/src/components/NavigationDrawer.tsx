import React, {
  cloneElement,
  useContext,
  useEffect,
  useState,
  ReactFragment,
  ReactNode,
  ReactElement,
} from "react";
import { css } from "@emotion/css";
import { usePrevious } from "../hooks/usePrevious";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { useTheme } from "../hooks/useTheme";
import { NavigationItem } from "./NavigationItem";

const scrim = css({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 100,
  // TODO: use tokens instead
  background: "rgba(0, 0, 0, .4)",
});

const Scrim = () => {
  return <div className={scrim} />;
};

interface NavigationDrawerProps {
  collapsed?: boolean;
  activeItem?: number;
  children: ReactNode;
  railLabels?: "show" | "selected" | "none";
  mode?: "drawer" | "modal" | "rail";
}

export const NavigationDrawer = ({
  collapsed = false,
  activeItem,
  children,
  railLabels = "selected",
  mode = "drawer",
}: NavigationDrawerProps) => {
  const { ThemeContext, VariantContext } = useTheme();
  const [selectedIndex, setSelectedIndex] = useState(activeItem);
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const onClick = (activeIndex: number) => {
    setSelectedIndex(activeIndex);
  };
  const NavigationItemMapperFactory = () => {
    let itemIndex = 0;
    const NavigationItemMapper = (child: ReactElement): ReactNode => {
      // if (!React.isValidElement(child)) {
      //   console.log("kaboom");
      //   return child;
      // }
      if (child.type === NavigationItem) {
        // console.log("item index", itemIndex);
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

  let styleObj: any = {
    width: `${mode === "rail" ? "80" : "360"}px`,
  };
  const theme = m3(tokens, { variant });

  const drawerTheme = css(
    applyReactiveStyle({
      target: m3(tokens, { variant }).components.NavigationDrawer,
      theme,
    })
  );

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

  // useEffect(() => {
  //   if (mode === "drawer" && previousMode === "rail") {
  //     console.log("animation: rail to drawer");
  //   }
  //   if (mode === "rail" && previousMode === "drawer") {
  //     console.log("animation: drawer to rail");
  //   }
  // }, [mode]);
  const NavigationItemMapper = NavigationItemMapperFactory();
  return (
    <>
      {mode === "modal" && <Scrim />}
      <div
        data-mode={mode}
        data-collapsed={collapsed}
        className={`${drawerTheme}`}
      >
        {React.Children.map(children as ReactElement, NavigationItemMapper)}
      </div>
    </>
  );
};

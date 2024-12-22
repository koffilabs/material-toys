"use client";
import React, { ReactNode, useContext, useState } from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-toys/common";
import { useThemeContexts } from "../../hooks/useThemeContexts";
import merge from "lodash-es/merge";

interface TabProps {
  children?: ReactNode;
  icon?: ({ size }: { size: string }) => JSX.Element;
}
export const Tab = ({ children, icon: TabIcon }: TabProps) => {
  const { ThemeContext, VariantContext, UserThemeContext } = useThemeContexts();
  const tokens = useContext(ThemeContext);
  const variant: string = useContext(VariantContext);
  const theme = m3(tokens, { variant });
  const userTheme: any = useContext(UserThemeContext);
  const [tabClass, setTabClass] = useState(
    css(
      applyReactiveStyle({
        target: "components.Tab",
        theme: merge(theme, userTheme(variant)),
      })
    )
  );

  return (
    <div className={`${tabClass}${TabIcon ? " withIcon" : ""}`}>
      <span className={"mt-tab-content"}>
        {TabIcon && (
          <div className="mt-tab-icon">
            <TabIcon size="24" />
          </div>
        )}
        <div className="mt-tab-text">{children}</div>
      </span>
    </div>
  );
};

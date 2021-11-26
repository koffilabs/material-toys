import React, {useContext, useEffect} from "react";
import {computed} from "vue";
import {css} from "@emotion/css";
import { setDynamic, m3 } from "@material-yue/common";
import {useTheme} from "../hooks/useTheme";
interface ButtonArgs{
  icon: any;
  children: any;
  className: string;
}
export const Button = ({icon, children, className}: ButtonArgs) => {
  const {ThemeContext, VariantContext} = useTheme()
  const tokens = useContext(ThemeContext);
  const variant = useContext(VariantContext);

  const theme = m3(tokens, {variant});
  //
  // useEffect(() => {
    const btn = css(
      setDynamic({target: m3(tokens, {variant}).components.Button, theme}),
    );
    // console.log("btn", btn)
  // }, [tokens])
  return (
    <button className={`${btn} ${className}`}>
      <div className="state">
      </div>
      {icon}
      <div>{children}</div>
    </button>
  )
}
import React, { FC, SyntheticEvent, useContext, useEffect, useRef } from "react";
import {css} from "@emotion/css";
import { setDynamic, m3 } from "@material-yue/common";
import {useTheme} from "../hooks/useTheme";
import { Ripple } from './Ripple';
interface ButtonProps{
  icon: any;
  className: string;
  onClick?: Function;
}
export const Button: FC<ButtonProps> = ({icon, children, className}) => {
  const {ThemeContext, VariantContext} = useTheme()
  const tokens = useContext(ThemeContext);
  const variant = useContext(VariantContext);


  const theme = m3(tokens, {variant});

    const btn = css(
      setDynamic({target: m3(tokens, {variant}).components.Button, theme}),
    );
  return (
    <Ripple color={m3(tokens, {variant}).components.Button[`&.${className}`][".ripple"].backgroundColor}>
      <button className={`${btn} ${className}`}>
      <div className="state">
      </div>
      {icon}
      <div>{children}</div>
    </button></Ripple>
  )
}

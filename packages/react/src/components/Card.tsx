import React, {
    useContext,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface CardProps {
    disabled: boolean;
    className: string;
    onClick?: Function;
}
export const Card = ({ children, className }: CardProps) : JSX.Element => {
    const { ThemeContext, VariantContext } = useTheme();
    const tokens = useContext(ThemeContext);
    const variant = useContext(VariantContext);

    const theme = m3(tokens, { variant });

    const card = css(applyReactiveStyle({ target: m3(tokens, { variant }).components.Card, theme }));
    return (
        <Ripple>
            <div className={`${card} ${className}`}>
                <div className="state" />
                {children}
            </div>
        </Ripple>
    );
};

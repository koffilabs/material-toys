import React, {
    useContext,
} from "react";
import { css } from "@emotion/css";
import { applyReactiveStyle, m3 } from "@material-yue/common";
import { useTheme } from "../hooks/useTheme";
import { Ripple } from "./Ripple";
interface FABProps {
    disabled: boolean;
    className: string;
    onClick?: Function;
}
export const FAB = ({ children, disabled, className }: FABProps) : JSX.Element => {
    const { ThemeContext, VariantContext } = useTheme();
    const tokens = useContext(ThemeContext);
    const variant = useContext(VariantContext);

    const theme = m3(tokens, { variant });

    const fab = css(applyReactiveStyle({ target: m3(tokens, { variant }).components.FAB, theme })
    );
    return (
        <Ripple>
            <button disabled={disabled} className={`${fab} ${className}`}>
                <div className="state" />
                {children}
            </button>
        </Ripple>
    );
};

import React, {
    FC,
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
export const ExtendedFAB: FC<FABProps> = ({ children, disabled, className }) => {
    const { ThemeContext, VariantContext } = useTheme();
    const tokens = useContext(ThemeContext);
    const variant = useContext(VariantContext);

    const theme = m3(tokens, { variant });

    const efab = css(applyReactiveStyle({ target: m3(tokens, { variant }).components.ExtendedFAB, theme })
    );
    return (
        <Ripple>
            <button disabled={disabled} className={`${efab} ${className}`}>
                <div className="state" />
                {children}
            </button>
        </Ripple>
    );
};

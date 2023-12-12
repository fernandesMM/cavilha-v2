import React, { ComponentProps } from "react";
export interface ButtonProps extends ComponentProps<'button'> {
    label: string;
    primary: boolean;
    backgroundColor?: string;
}
declare function Button({ label, primary, backgroundColor, ...rest }: ButtonProps): React.JSX.Element;
export default Button;

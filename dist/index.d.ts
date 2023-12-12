import React, { InputHTMLAttributes, ComponentProps } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    label: string;
}
declare function TextField(props: Props): React.JSX.Element;

interface ButtonProps extends ComponentProps<'button'> {
    label: string;
    primary: boolean;
    backgroundColor?: string;
}
declare function Button({ label, primary, backgroundColor, ...rest }: ButtonProps): React.JSX.Element;

export { Button, TextField };

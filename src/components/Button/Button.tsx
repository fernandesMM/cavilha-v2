import React, { ComponentProps, ReactElement } from "react";
import { VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: 'flex items-center gap-2 rounded-md px-5 py-2 font-medium text-white',
  variants: {
      variant: {
          primary:
              'hover:bg-primary-500-hover bg-primary-500 shadow-lg shadow-primary-500/40 hover:shadow-md hover:shadow-primary-500/20',
          secondary: 'hover:bg-secondary-800-hover bg-secondary-800'
      },
      size: {
        small: 'px-2 py-1',
        medium: 'px-5 py-2',
        large: 'px-6 py-4'
      }
  },
  defaultVariants: {
      variant: 'primary',
      size: 'medium'
  }
});

export interface ButtonProps extends ComponentProps<'button'>, VariantProps<typeof styles>  {
  label: string | ReactElement;
  variant: 'primary' | 'secondary';
  size?: 'small' | 'medium' | 'large'
}

function Button({
  label,
  size = 'medium',
  className,
  variant,
  ...rest
}: ButtonProps) {
  return (
    <button className={styles({ variant, size, className })} {...rest} >
      {label}
    </button>
  );
}

export default Button;
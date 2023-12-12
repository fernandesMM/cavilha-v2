import React, { ComponentProps, useEffect } from "react";
import { VariantProps, tv } from "tailwind-variants";

const styles = tv({
  base: 'border px-5 py-2',
});

export interface TextInputProps extends ComponentProps<'input'>, VariantProps<typeof styles> {
  label: string;
}

function TextInput({
  label,
  className,
  ...rest
}: TextInputProps) {
  return (
    <div className="p-4 bg-primary-800">
      <input className={styles({ className })} {...rest} />
    </div>
  );
}

export default TextInput;
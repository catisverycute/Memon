import type { ButtonHTMLAttributes, JSX } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | 'primary'
    | 'secondary'
    | 'disabled'
    | 'text'
    // | 'text2'
    | 'confirm'
    | 'cancel';
  size?: 'sm' | 'md' | 'lg';
}

export default function Button({
  children,
  variant = 'primary',
  className = '',
  disabled,
  size = 'sm',
  ...props
}: ButtonProps): JSX.Element {
  const styleSet = {
    primary: `
      w-[350px] h-[46px]
      rounded-[4px]
      px-[22px] py-[14px]
      text-white
      bg-primary
    `,
    secondary: `
      w-[350px] h-[46px]
      rounded-[4px]
      px-[22px] py-[14px]
      border border-[#6790FF]
      bg-white text-primary
    `,
    disabled: `
      w-[350px] h-[46px]
      rounded-[4px]
      px-[22px] py-[14px]
      text-white
      bg-[#DBDBDB]
      cursor-not-allowed
    `,
    text: `
			text-primary
			text-h4
			bg-transparent
		`,
    text2: `
			text-[#777777]
			text-h4
		`,
    confirm: `bg-btnConfirm text-black w-20 h-10 rounded-md`,
    cancel: `bg-btnCancel text-black w-20 h-10 rounded-md`,
  };

  const sizeSet = {
    sm: `w-20 h-10 rounded-lg`,
    md: `w-28 h-14 rounded-xl`,
    lg: ``,
  };

  return (
    <button
      {...props}
      disabled={disabled || variant === 'disabled'}
      className={`${styleSet[variant]}  ${sizeSet[size]} ${className}`}
    >
      {children}
    </button>
  );
}

// interface ButtonProps {
//   size?: 'sm' | 'lg';
// }

// export default function Button({ size }: ButtonProps) {
//   const SIZEVARINT = { sm: 'button' };
//   return <button className={`${size}`}>{childern}</button>;
// }

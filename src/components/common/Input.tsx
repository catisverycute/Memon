import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  id?: string;
  name: string;
  inputName?: string;
  type?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  errorMessage?: string;
}
export default function Input({
  id,
  inputName,
  placeholder,
  onChange,
  type = 'text',
  errorMessage,
  ...other
}: InputProps) {
  return (
    <>
      {inputName && (
        <label className="m-3" htmlFor={id}>
          {inputName}
        </label>
      )}
      <input
        type={type}
        className="m-3 border"
        placeholder={placeholder}
        id={id}
        onChange={onChange}
        {...other}
      />
      {errorMessage && (
        <p className="text-red-500 text-sm ml-3">{errorMessage}</p>
      )}
    </>
  );
}

import { FC } from 'react';

interface ButtonProps {
  value: string;
}
export const Button: FC<ButtonProps> = ({ value }) => {
  return (
    <button className="w-full max-w-[315px] h-[60px] bg-darkBlue rounded-[12px] flex items-center justify-center text-white leading-none uppercase tracking-wider font-buttons font-bold">
      {value}
    </button>
  );
};

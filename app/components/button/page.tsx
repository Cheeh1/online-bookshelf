import { FC, ReactNode } from "react";

interface Props {
  text: string;
}

const Button: FC<Props> = ({ text }) => {
  return (
    <>
      <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-full tracking-widest">
        {text}
      </button>
    </>
  );
};

export default Button;


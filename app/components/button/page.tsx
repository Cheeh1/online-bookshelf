const Button = ({ text }: { text: string }) => {
  return (
    <>
      <button className="bg-secondary rounded-3xl text-white font-bold py-2 px-4 text-sm w-full tracking-widest">
        {text}
      </button>
    </>
  );
};

export default Button;

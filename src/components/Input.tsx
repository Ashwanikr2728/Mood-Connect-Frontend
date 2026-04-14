type InputProps = {
  type?: string;
  placeholder: string;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  type = "text",
  placeholder,
  value,
  onChange,
}: InputProps) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 rounded-lg bg-white/70 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-200 placeholder-gray-400"
    />
  );
};

export default InputField;
interface SelectInterface {
  options: string[];
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const Select = ({ options, placeholder, value, onChange }: SelectInterface) => {
  return (
    <select
      style={{
        border: "2px solid #CCC",
        height: 45,
        width: '102%',
        borderRadius: 5,
        paddingLeft: 6,
      }}
      value={value}
      onChange={onChange}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {options.map((option, index) => (
        <option key={index} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};
export default Select
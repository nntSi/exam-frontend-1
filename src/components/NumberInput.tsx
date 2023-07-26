interface Props {
  value: number;
  onChange: (value: number) => void
}

const NumberInput = ({ value, onChange }: Props) => {
  const handleIncrease = () => {
    onChange(value += 1)
  }
  const handleDecrease = () => {
    if(value === 0) {
      return onChange(0)
    }
    onChange(value -= 1)
  }
  return (
    <div className="flex rounded-sm ring-1 ring-zinc-200 bg-white overflow-hidden">
      <input
        readOnly
        value={value ? value : 1}
        className="py-2 text-lg px-3 text-end w-full"
        type="number"
      />
      <div className="border-l">
        <button onClick={handleIncrease} type="button" className="border-b px-2 hover:bg-zinc-100 duration-200">+</button>
        <button onClick={handleDecrease} type="button" className="flex items-center justify-center w-full hover:bg-zinc-100 duration-200">-</button>
      </div>
    </div>
  );
};

export default NumberInput;

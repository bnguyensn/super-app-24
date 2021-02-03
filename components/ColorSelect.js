export default function ColorSelect({ value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label>
      <span className="pr-2 w-20">Text color:</span>
      <select
        className="w-40"
        name="text-color"
        value={value}
        onChange={handleChange}
      >
        <option value="white">White</option>
        <option value="red">Red</option>
        <option value="green">Green</option>
        <option value="blue">Blue</option>
        <option value="yellow">Yellow</option>
        <option value="magenta">Magenta</option>
        <option value="cyan">Cyan</option>
      </select>
    </label>
  );
}

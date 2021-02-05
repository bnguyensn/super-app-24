export default function Checkbox({ label, checked, setValue, ...props }) {
  const handleChange = (e) => {
    setValue(e.target.checked);
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === 'Enter' || key === 'Space') {
      setValue(e.target.checked);
    }
  };

  return (
    <label className="flex items-center w-100">
      <span className="pr-2 w-20">{label}</span>
      <input
        type="checkbox"
        checked={checked}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        {...props}
      />
    </label>
  );
}

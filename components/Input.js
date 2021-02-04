export default function Input({
  label,
  value,
  setValue,
  placeholder,
  maxlength,
  submit,
}) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    const key = e.key;

    if (key === 'Enter' && submit) {
      submit();
    }
  };

  return (
    <label className="flex items-center w-100">
      <span className="pr-2 w-20">{label}</span>
      <input
        className="mr-4 p-2 border rounded flex-grow"
        value={value}
        placeholder={placeholder}
        maxLength={maxlength}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </label>
  );
}

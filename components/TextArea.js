export default function TextArea({ label, value, setValue, ...props }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <label className="flex items-center w-100">
      <span className="pr-2 w-20">{label}</span>
      <textarea
        className="mr-4 p-2 border rounded flex-grow"
        value={value}
        onChange={handleChange}
        cols={42}
        rows={2}
        {...props}
      />
    </label>
  );
}

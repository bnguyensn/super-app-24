export default function MessageInput({ value, setValue }) {
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <input
      className="mr-4 p-2 border rounded"
      value={value}
      onChange={handleChange}
    />
  );
}

export default function ReplIframe() {
  return (
    <div className="w-full h-full py-2">
      <iframe
        width="100%"
        height="100%"
        title="Chat history"
        src="https://blog.repl.it/__logs"
      />
    </div>
  );
}

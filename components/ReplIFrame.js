export default function ReplIframe() {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <iframe
        className="absolute top-0 left-0 w-full h-full border-0"
        title="Chat history"
        src="https://blog.repl.it/__logs"
        sandbox
      />
    </div>
  );
}

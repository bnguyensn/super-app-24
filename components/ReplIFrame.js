export default function ReplIframe() {
  return (
    <div className="w-full flex flex-grow">
      <iframe
        className="h-full w-full flex-grow"
        width="100%"
        height="100%"
        title="Chat history"
        src="https://blog.repl.it/__logs"
      />
    </div>
  );
}

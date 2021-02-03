import Head from 'next/head';

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <header className="bg-green-500 p-2">
          <div className="wrapper">
            <h1 className="text-2xl text-white">Repl Chat</h1>
          </div>
        </header>

        <main className="p-2 w-full wrapper flex flex-grow">{children}</main>
      </div>

      <footer className="p-2">
        <div className="wrapper">
          Made by{' '}
          <a
            href="https://github.com/bnguyensn"
            target="_blank"
            rel="noreferrer"
          >
            @bnguyensn
          </a>{' '}
          for{' '}
          <a
            href="https://blog.repl.it/__logs"
            target="_blank"
            rel="noreferrer"
          >
            blog.repl.it/__logs
          </a>
          .{' '}
          <a
            href="https://github.com/bnguyensn/super-app-24"
            target="_blank"
            rel="noreferrer"
          >
            Source code.
          </a>
        </div>
      </footer>
    </div>
  );
}

import Head from 'next/head';

function Wrapper({ children }) {
  return <div className="my-0 mx-auto max-w-screen-sm">{children}</div>;
}

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="bg-green-500 p-2">
        <Wrapper>
          <h1 className="text-2xl text-white">Repl Chat</h1>
        </Wrapper>
      </header>

      <main className="p-2">
        <Wrapper>{children}</Wrapper>
      </main>

      <footer className="p-2">
        <Wrapper>
          <div>
            Powered by{' '}
            <a href="https://blog.repl.it" target="_blank" rel="noreferrer">
              blog.repl.it/__logs
            </a>
          </div>
        </Wrapper>
      </footer>
    </div>
  );
}

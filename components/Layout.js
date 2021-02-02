import Head from 'next/head';

export default function Layout({ pageTitle, children }) {
  return (
    <div>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>{children}</main>

      <footer>
        Powered by{' '}
        <a href="https://blog.repl.it" target="_blank" rel="noreferrer" />
      </footer>
    </div>
  );
}

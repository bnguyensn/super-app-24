import Head from 'next/head';
import ExternalLink from './ExternalLink';

export default function Layout({ pageTitle, children }) {
  return (
    <div className="h-full">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="h-full flex flex-col">
        <header className="bg-green-500 p-2">
          <div className="wrapper">
            <h1 className="text-2xl text-white">Repl Chat</h1>
          </div>
        </header>

        <main className="p-2 w-full wrapper flex flex-grow">{children}</main>
      </div>

      <footer className="p-2 bg-green-50">
        <div className="wrapper text-center">
          Made by{' '}
          <ExternalLink href="https://github.com/bnguyensn">
            @bnguyensn
          </ExternalLink>{' '}
          for{' '}
          <ExternalLink href="https://blog.repl.it/__logs">
            blog.repl.it/__logs
          </ExternalLink>
          .{' '}
          <ExternalLink href="https://github.com/bnguyensn/super-app-24">
            Source code.
          </ExternalLink>{' '}
          Inspired by{' '}
          <ExternalLink href="https://twitter.com/amasad">@amasad</ExternalLink>
          &#39;s{' '}
          <ExternalLink href="https://blog.repl.it/internet-of-fun">
            blog
          </ExternalLink>
          .
        </div>
      </footer>
    </div>
  );
}

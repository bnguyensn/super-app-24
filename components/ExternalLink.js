export default function ExternalLink({ children, href, ...props }) {
  return (
    <a target="_blank" rel="noreferrer" href={href} {...props}>
      {children}
    </a>
  );
}

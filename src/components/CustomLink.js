import Link from 'next/link';

const CustomLink = ({ href, children, ...props }) => {
  return (
    <Link href={href} legacyBehavior {...props}>
      {children}
    </Link>
  );
};

export default CustomLink;

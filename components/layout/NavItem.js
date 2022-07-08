import Link from "next/link";

export default function NavItem({title,  url}) {
  return (
    <>
      <Link href={url}>
        <a className="navItem has-text-white mx-2">
            <span className="navItem_title">{title}</span>
        </a>
      </Link>
    </>
  );
}

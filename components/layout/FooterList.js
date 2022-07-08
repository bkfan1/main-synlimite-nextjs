import Link from "next/link";

export default function FooterList({ listTitle, listItems }) {
  return (
    <>
      <ul>
        <li>
          <label className="label">{listTitle}</label>
        </li>
        {listItems.map((item, index) => (
          <li key={index}>
            <Link href={item.url}>
              <a className="has-text-dark">{item.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

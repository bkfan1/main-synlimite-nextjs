import Link from "next/link";

const sections = [
  { name: "Cuenta", url: "/account" },
  { name: "Compras", url: "/account/purchases" },
  { name: "Reembolsos", url: "/account/refunds" },
];

export default function AccountPanel() {
  return (
    <>
      <aside className="accountPanel has-background-white">
          <h1 className="title is-size-4 m-2">Configuración</h1>
        <ul>
          {sections.map((section, index) => (
            <Link href={section.url} key={index}>
              <li className="accountPanel__option">
                <a className="accountPanel__optionText has-text-black ml-3">{section.name}</a>
              </li>
            </Link>
          ))}
        </ul>
      </aside>
    </>
  );
}

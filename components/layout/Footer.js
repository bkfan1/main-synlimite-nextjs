import FooterList from "./FooterList";

const emblem = [
    {title: "2022", url:"#"},
    {title:"Venezuela", url:"#"}
]

const politics = [
  { title: "Términos y condiciones", url: "/" },
  { title: "Política de privacidad", url: "/" },
  { title: "Soporte al cliente", url: "/" },
  { title: "Política de reembolsos", url: "/" },
];

const aboutUs = [
  { title: "¿Qué es Synlimite?", url: "/" },
  { title: "Misión y objetivos", url: "/" },
  { title: "Nuestro equipo", url: "/" },
];

export default function Footer() {
  return (
    <>
      <footer className="customFooter is-flex is-justify-content-space-between has-background-grey-lighter p-5">
          <FooterList listTitle={"Synlimite C.A"} listItems={emblem} />
        <FooterList listTitle={"Acerca de"} listItems={aboutUs} />

        <FooterList listTitle={"Legalidad"} listItems={politics} />
      </footer>
    </>
  );
}

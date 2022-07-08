import Image from "next/image";
import NavSearchForm from "../forms/NavSearchForm";
import NavItem from "./NavItem";
export default function Navbar({ isLogged }) {
  return (
    <div className="is-flex is-flex-direction-column">
      <nav className="mainNav is-flex is-align-items-center is-justify-content-space-between is-fullwidth p-3">
        <section className="is-flex is-align-items-center">

          <Image src={"/assets/img/synlimite-logo.png"} width={100} height={50} alt="Synlimite" />

          <NavItem title="Categorías" url="/" />
        </section>

        <section>
          <NavSearchForm />
        </section>

        <section>
          {isLogged ? (
            <></>
          ) : (
            <menu className="m-0 p-0">
              <button className="button is-size-6 mr-3">Registrarse</button>
              <button className="button is-size-6 is-info">
                Iniciar sesión
              </button>
            </menu>
          )}
        </section>
      </nav>
      <menu className="secondaryMenu is-flex is-justify-content-space-evenly p-2 is-fullwidth m-0">
        <NavItem title="Productos" url="/" />
        <NavItem title="Ofertas" url="/" />
        <NavItem title="Ayuda" url="/" />
        {isLogged ? (
          <>
          <NavItem title="Comprar" url="/" />
          <NavItem title="Vender" url="/" />
          </>
        ) : ""}
      </menu>
    </div>
  );
}

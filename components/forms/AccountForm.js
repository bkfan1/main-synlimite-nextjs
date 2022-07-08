import { useRouter } from "next/router";

export default function AccountForm() {
  const router = useRouter();
  const { pathname } = router;

  return (
    <>
      <form className="accountForm has-background-white p-3">
        <div className="field">
          <label className="label">Correo electrónico</label>
          <input type="text" className="input" />
        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <input type="password" className="input" />
        </div>

        {pathname === "/login" || pathname === "/account" ? (
          <button className="button is-info is-fullwidth">
            {pathname === "/login"
              ? "Iniciar sesión"
              : pathname === "/account"
              ? "Actualizar"
              : ""}
          </button>
        ) : (
          ""
        )}
      </form>
    </>
  );
}

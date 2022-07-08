import Link from "next/link";

export default function VerticalProductCard({ img, price, description, postUrl }) {
  return (
    <>
      <Link href={postUrl ? postUrl : "/"}>
        <figure className="verticalProductCard">
          <section className="verticalProductCard__imgContainer"></section>

          <section className="verticalProductCard__infoContainer px-2 ">
            <h1 className="verticalProductCard__price is-title is-size-5 m-0 p-0 pt-2 has-text-weight-bold">
              {price ? price : "Cargando precio..."}
            </h1>

            <p className="verticalProductCard__description">{description ? description : "Cargando descripción..."}</p>
          </section>
        </figure>
      </Link>
    </>
  );
}

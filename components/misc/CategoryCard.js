import Image from "next/image";
import Link from "next/link";


export default function CategoryCard({title, imgUrl ,url}){
    return(
        <>
        <figure className="categoryCard">
            <Image src={imgUrl} width={300} height={300} />

            <footer className="categoryCard__footer is-flex is-align-items-center is-justify-content-center p-3">
                <h1 className="is-size-6 has-text-white">{title}</h1>

            </footer>
        </figure>
        </>
    )
}
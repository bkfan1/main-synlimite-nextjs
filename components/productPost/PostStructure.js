import CommentForm from "../forms/CommentForm";
import ProductCarrousell from "../misc/ProductCarrousell";
import BuyProductForm from "./BuyProductForm";
import CommentsRecipient from "./CommentsRecipient";
import DescriptionRecipient from "./DescriptionRecipient";
import ImagesRecipient from "./ImagesRecipient";
import ProductInfoRecipient from "./ProductInfoRecipient";

export default function PostStructure(){
    return(
        <>
        <div>

            <section className="is-flex pl-5 pt-5">
                <div className="mr-5">
                <ImagesRecipient />
                </div>

                <div className="is-flex is-flex-direction-column">
                <ProductInfoRecipient/>

                <menu className="m-0 p-0">
                    <BuyProductForm />
                </menu>
                </div>
            </section>

            <section className="pl-5 pt-5">
                <DescriptionRecipient />
            </section>

            <section className="is-flex is-flex-direction-column pl-5 pt-5">
                <h1 className="title is-size-4">Reseñas y comentarios de este producto</h1>
                <CommentsRecipient/>
                <section className="mt-5">
                <CommentForm/>
                </section>
            </section>

            <section className="is-flex is-flex-direction-column pl-5 pt-5 pb-5">
                <h1 className="title is-size-4">Otros productos recomendados</h1>
                <ProductCarrousell />
            </section>
        </div>
        </>
    )
}
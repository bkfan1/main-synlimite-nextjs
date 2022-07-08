

export default function ImagesRecipient(){

    return(
        <>
        <section className="imagesRecipient is-flex is-flex-direction-column">

            <div>
                <figure className="productPost__PrimaryImageContainer"></figure>

            </div>

            <aside className="is-flex is-justify-content-space-between my-2" style={{overflowX:"scroll"}}>
                <figure className="productPost__SecondaryImageContainer"></figure>
                <figure className="productPost__SecondaryImageContainer"></figure>

                <figure className="productPost__SecondaryImageContainer"></figure>
            </aside>



        </section>


        </>
    )

}


export default function NavSearchForm(){
    return(
        <>
        <form className="navSearchForm is-flex">
            <input type="text" className="input is-fullwidth" placeholder="¿Qué estás buscando?" />
            <button className="navSearchForm__button button">B</button>
        </form>
        </>
    )
}
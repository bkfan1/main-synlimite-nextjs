export default function CommentForm() {
  return (
    <>
      <form>
        <div className="control mb-3">
          <textarea
            className="textarea has-fixed-size"
            placeholder="Escribe un comentario..."
          ></textarea>
        </div>
        <button className="button is-info">Enviar comentario</button>
      </form>
    </>
  );
}

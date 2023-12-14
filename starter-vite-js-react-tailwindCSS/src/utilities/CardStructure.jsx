const CardStructure = (handleDeleteUser, handleAnswerNo) => {
  return (
    <section className="Fondo">
        <div className="Contenedor">
            <div className="img">
                <img className="imagen" src="/img/Ellipse 9.png" alt="" />
            </div>
            <div className="info">
                <div className="contenedordos">
                    <p>Are you sure you want to delete this user?</p>

                    <button onClick={() => handleDeleteUser()}  className="btn__delete">Yes, delete</button>
                    <button onClick={() => handleAnswerNo()} className="btn__cancel">or cancel</button>
                </div>
            </div>
        </div>
      </section>
  )
}
export default CardStructure
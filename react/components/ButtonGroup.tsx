import React from "react";

const ButtonGroup = () => {
    return (
        <div>
        <div className="ma2">
            <a className="gray" href="/">
                Ir al CHECKOUT
            </a>
        </div>
        <div className="db">
            <button className="b--none bg-gray pa3 br2 ma2">
                SEGUIR COMPRANDO
            </button> <br></br>
            <button className="b--none bg-yellow pa3 br2 ma2">
                VER RESUMEN DEL CARRITO
            </button>
            
            {/* <a href="/">
                VER RESUMEN DEL CARRITO
            </a> */}
        </div>
        </div>
    )
}

export default ButtonGroup
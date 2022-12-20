import React from "react";

type Total = {
    total: {
    id: string
    name: string
    value: number
    }
}

const Totalizers = (totalizers: Total) => {
    const {id, name, value} = totalizers.total
    console.log("Mis totales son iguales a: ", id, name, value)
    return (
        <div>
            <p>Tenemos x items en tu carro</p>
            <p>Total: x</p>
        </div>

    )
}

export default Totalizers
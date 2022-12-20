import React from "react";

type Props = {
    products: [{}]
}

const ProductGroup = (products:Props) => {
    console.log("Mis productos en ProductGroup son: ", products)
    return (
        <p>MI LISTADO DE PRODUCTOS</p>

    )
}

export default ProductGroup
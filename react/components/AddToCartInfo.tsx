import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup";

const AddToCartInfo = () => {
    const productInfo = useProduct();
    const { orderform: {
        items,
        totalizers
    } } = useOrderForm();
    console.log("este producto tiene esta info: ", productInfo)
    console.log("esta es la información de la orden: ", items, totalizers)
    return(
        <>
        <ProductGroup/> {/*Listado de productos*/}
        <Totalizers/>   {/*Valor total*/}
        <ButtonGroup/> {/*Acciones*/}
        </>
    )
}

export default AddToCartInfo
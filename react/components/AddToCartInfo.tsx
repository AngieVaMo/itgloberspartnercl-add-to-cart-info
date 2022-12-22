import React from "react";
import { useProduct } from "vtex.product-context";
import { useOrderForm } from "vtex.order-manager/OrderForm"
import ButtonGroup from "./ButtonGroup";
import { generateBlockClass } from "@vtex/css-handles";
import styles from "./styles.css"

const AddToCartInfo = ({blockClass}: {blockClass: string}) => {
    const container = generateBlockClass(styles.container, blockClass)
    const container__item = generateBlockClass(styles.container__item, blockClass)
    const container__image = generateBlockClass(styles.container__image, blockClass)

    const productInfo = useProduct();
    const { orderForm: {
        items,
        totalizers
    } } = useOrderForm();
    console.log("este producto tiene esta info: ", productInfo)
    console.log("estos son mis totales: ", totalizers[0])
    return(
        <div className={container}>
        {/*<ProductGroup products={item}/> Listado de productos*/}
        {
        items.map((item: any, index: number) => {
            return (
                <div key={index} className={container__item}>
                    <div className={container__image}>
                        <img src={item.imageUrls.at1x}/>
                    </div>
                    <div>
                        <p>{item.name}</p>
                        {/* <p>{item.id}</p> */}
                        <p>${item.price/100}</p>
                        <p>Cant: {item.quantity}</p>

                    </div>
                </div>
            )
        })
        }
        <div className="bl b--gray pa3">
            <h3 className="ma0">AGREGADO AL CARRITO:</h3>
            <p>{items.length} artículos</p>
            <h4>Subtotal: ${totalizers[0]?.value/100}</h4>
        </div>
        {/*<Totalizers totalizers={totalizers[0]}/>   Valor total*/}
        <ButtonGroup/> {/*Acciones*/}
        </div>
    )
}

export default AddToCartInfo
export function MenuProduct(props) {
    const {product} = props;
    const size = product.size ? "(" + product.size + "cl)" : "";
    if (!product?.name) return;
    return <div style={{margin: "2vw 0", fontSize: "smaller", display: "flex", justifyContent: "space-between", width: "200px"}}>
        <div>{product.name} {size} </div>
        <div>{product.price} &euro; </div>
    </div>;
}
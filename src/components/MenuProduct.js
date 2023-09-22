
export function MenuProduct(props) {
    const {product} = props;
    const size = product.size ? "(" + product.size + "cl)" : "";
    if (!product?.name) return;
    return <div> {product.name} {size} {product.price} &euro; </div>;
}
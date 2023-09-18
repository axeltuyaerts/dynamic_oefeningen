export function MenuProduct(props) {
    const {productName} = props;
    const {price} = props
    return <div>{productName} {price}</div>;
}
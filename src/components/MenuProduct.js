import * as PropTypes from "prop-types";

function ProductSize(props) {
    const {product} = props;
    const size = product.size ? "(" + product.size + "cl)" : "";

    return <span style={{color: "blue"}}>{size}</span>;
}

ProductSize.propTypes = {size: PropTypes.string};

export function MenuProduct(props) {
    const {product} = props;
    if (!product?.name) return;
    return <div style={{
        margin: "2vw 0",
        fontSize: "smaller",
        display: "flex",
        justifyContent: "space-between",
        width: "200px",
        flex: "1"
    }}>
        <div>{product.name} <ProductSize product={product}/></div>
        <div>{product.price} &euro; </div>
    </div>;
}
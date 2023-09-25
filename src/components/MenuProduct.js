import * as PropTypes from "prop-types";

function ProductSize(props) {
    const {product} = props;
    const size = product.size ? "(" + product.size + "cl)" : "";

    return <span style={{color: "blue"}}>{size}</span>;
}

ProductSize.propTypes = {size: PropTypes.string};

function ProductNote(props) {
    const {product} = props;
    const note = product.note ? product.note : "";

    return <span style={{color: "blue"}}>{note}</span>;
}

ProductSize.propTypes = {note: PropTypes.string};

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
        <div>{product.name} <ProductSize product={product}/> <br/> <ProductNote product={product}/> </div>
        <div>{product.price} &euro; </div>
    </div>;
}
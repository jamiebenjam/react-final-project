function FarmItems({id, name, image, price, type}) {

    return (
        <div>
            <p>{name}</p>
            <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
            <p>{price}</p>
            <p>{type}</p>
        </div>
    )
}

export default FarmItems;

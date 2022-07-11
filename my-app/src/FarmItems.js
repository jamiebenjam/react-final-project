function FarmItems({id, name, image, price, type}) {

    return (
        <div>
            <p>{name}</p>
            <img src={image}></img>
            <p>{price}</p>
            <p>{type}</p>
        </div>
    )
}

export default FarmItems;

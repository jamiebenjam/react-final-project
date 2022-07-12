function FarmItems({id, name, image, price, type, setMyFarmItems, item, setFarmItems}) {

    function handleClick() {
        setFarmItems(item)
        // funciton from App two functions passed as one prop with two names and where it was derived (farm/garden or town) will execute the diff functions +$ or -$
        // generate a dynamic state const const state = `${item.name}Life const setState = set`${item.name}Life
        // console.log(item)
    }

    return (
        <div >
            <button onClick={handleClick}> Purchase
            <p>{name}</p>
            <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
            <p>{price}</p>
            <p>{type}</p>
            </button>
        </div>
    )
}

export default FarmItems;

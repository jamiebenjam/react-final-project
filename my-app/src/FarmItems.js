function FarmItems({id, name, image, price, type, setMyFarmItems, item, setFarmItems, bank, setBank, count}) {

    function handleClick() {
        if (bank < item.price) {
            return alert("You do not have enough money")
        } else {
            item.birthday = count; 
            console.log(item)
            setFarmItems(item)
        }
       
        
    }


    return (
        <div >
            <button onClick={handleClick}> Purchase
            <p>{name}</p>
            <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
            <p>${price}</p>
            <p>ROI: {item.roi}</p>
            <p>{type}</p>
            </button>
        </div>
    )
}


export default FarmItems;
import { Card } from "semantic-ui-react";

function FarmItems({id, name, image, price, type, setMyFarmItems, item, setFarmItems, bank, setBank, count}) {

    function handleClick() {
        if (bank < item.price) {
            return alert("You do not have enough money, go back to Codee Ranch and check under the sofa cushion! ")
        } else {
            item.birthday = count; 
            console.log(item)
            setFarmItems(item)
        }
       
        
    }


    return (
        <Card>
            <div >
                <button onClick={handleClick}> Purchase
                <p>{name}</p>
                <img style={{height : 150, width: 150}} src={image} alt="it worked"></img>
                <p>${price}</p>
                <p>{type}</p>
                <p>ROI: {((item.roi - 1)*100).toFixed(0)}%</p>
                <p>Growth period: {item.mature} days</p>
                </button>
            </div>
        </Card>
    )
}


export default FarmItems;
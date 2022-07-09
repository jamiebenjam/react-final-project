
    
    
    const alertsArray = [
        {
        "id": 1,
        "name": "Rainbow",
        "copy": "Rain + Sun = Rainbow! Enjoy!!! Your farm def is! You crops will harvest 5 days sooner!",
        "result": `${setPosiGrowthClock(50000)}`,
        "img": "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/240/google/313/rainbow_1f308.png",
        
    }, {
        "id": 2,
        "name": "IRS Overloards",
        "copy": "You forgot to pay your taxes... ever!!! The IRS will auto-withdraw $250 from your account.",
        "result": setTimeout('', 5000)`${setBank(-250)}`,
        "img": "https://www.gannett-cdn.com/-mm-/1576467f4f57a8477abd233ca86c71d7e4a8182e/c=0-114-2116-1304/local/-/media/2019/03/14/USATODAY/usatsports/check-to-irs-for-all-my-money-tax.jpg?width=1320&height=744&fit=crop&format=pjpg&auto=webp",
        
    },
    {
        "id": 3,
        "name": "Diamond Mind",
        "copy": "Your dog has the right mindset! He dug up a Diamond Mine in your backyard!",
        "result": `${setBank(1000000)}`,
        "img": "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2F0029ee14-c0c5-11ec-8413-422ef6319ad0.jpg?crop=1600%2C900%2C0%2C0&resize=1500",
        
    },
    {
        "id": "",
        "name": "",
        "copy": "",
        "result": "",
        "img": "",
        
    },
    {
        "id": "",
        "name": "",
        "copy": "",
        "result": "",
        "img": "",
        
    },
   

]

export const getRandomAlert = () => 
  alertsArray[Math.floor(Math.random() * alertsArray.length)]
import React, {useState, useEffect} from  'react';


import './style.scss';
import CardsBack from '../../assets/MemoryCard/blue_back.png';

const MemoryGame  =()=>{
    const [cards, setCards] = useState([
        {
            id: 0,
            value: "1",
            flip: false
        },
        {
            id:1,
            value: "1",
            flip: false
        },
        {
            id: 2,
            value: "2",
            flip: false
        },
        {
            id: 3,
            value: "2",
            flip: false
        },
        {
            id: 4,
            value: "3",
            flip: false
        },
        {
            id: 5,
            value: "3",
            flip: false
        },

    ])

    const [pair, setPair]= useState([
        
    ]);

    const getRandomCards = ()=>{
        for(let i = cards.length-1; i > 0 ; i--){
            const j = Math.floor(Math.random() * i);
            const temp = cards[i];
            cards[i] = cards[j];
            cards[j] = temp;
        }
        setCards([...cards]);
        console.log(cards)
    }



    const flipCard = (card)=>{
        card.flip = !card.flip;
        console.log(card.flip);
        let value = card.flip;
        let cardId = '';
        if(value ===true){
            cardId = card.id;
            console.log('1:',cardId);
            if( card.id !== cardId){
                console.log('Add')
                pair.push(card);  
                examine(card)
            }           
        }
        
        // if(pair[0] != pair[1]){
        //     pair.push(card);
        //     setPair([...pair])
        // }
        setPair(pair);
        console.log('Pair:',pair)
        setCards([...cards]);
    }


    const examine=(pair)=>{
        console.log(pair);

    }

    useEffect(()=>{
        getRandomCards();
    },[])

    return(
       
            <div className="cards-container">
                {
                    cards.map( (card,index) =>
                        <div key={index} className={card.flip ? 'playCard isFliped' : 'playCard' }  onClick={()=>flipCard(card)} >
                            <div className="card-back">
                                <img src={CardsBack} alt="back"></img>
                                {card.value}
                            </div>
                            <div className="card-front">
                                    Card: Front {card.value}
                            </div>
                        </div>              
                    )
                }
                  {pair} 
            </div>
  
    )
}

export default MemoryGame;
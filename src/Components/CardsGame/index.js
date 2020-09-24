import React,{useState,useRef, useEffect} from 'react';
import Card from './card';
import cssClass from './style.scss';

const createRandomArray = (length) =>{
    let res = Array.from({length:length*2}).map((e,index)=>{
      return Math.floor((index)/2 + 1);
    });
    res.forEach((e,index)=>{
      let temp = res[index];
      let random = Math.floor(Math.random() * length);
      res[index] = res[random];
      res[random] = temp;
    });
    return res;
}

const CardsGame =()=>{
    const randomItems = useRef([])
    const init = useRef(true);

    if(init.current == true){
        randomItems.current = createRandomArray(6);
        init.current = false;
    }

    const [lastRef, setLastRef] = useState(null)

    
    const flipCard=(ref)=>{
       if(ref.className == cssClass.front){
            ref.className = cssClass.back;
            console.log('ref:',ref.className)
       }else if(ref.className == cssClass.back){
            ref.className = cssClass.front
       }
    };


    const hold = ref =>{
        ref.className = cssClass.hold
    }

    const determine = ref =>{
        ref.className = cssClass.determine
    }

    const wrong = ref =>{
        ref.className = cssClass.wrong
    }

    const clickToFlip = (e, ref) =>{
        console.log('clickref:',ref);
        if(ref.className == determine) return;
        if(lastRef == null){
            flipCard(ref);
            setLastRef({
                ref:ref,
                value:e
            })
        }else{
            if(ref == lastRef.ref){
                flipCard(ref);
                setLastRef(null);
                return;
            }
            if(e = lastRef.value){
                determine(lastRef.ref);
                determine(ref);
                setLastRef(null);
            }else{
                wrong(ref);
                hold(lastRef.ref);
                setLastRef(null)
            }
        }
    }

  

    return(
        <div className="cards-container">
       
        {
            randomItems.current.map((e,index) => (
                <div className={cssClass.card_container}>
                    <Card 
                        key={index}
                        number={e}
                        clickHandler = { ref => clickToFlip(e, ref.current)}
                    
                    />
                </div>
            ))
        }

            
        </div>
    )
}

export default CardsGame;
import React, {useState} from 'react'
import classes from "./style.scss";
import container from "../../App.scss";

const Card =(props)=>{
    const [stuck, setStuck] = useState(false);
    const ref = React.createRef();

    const animationEndHandler = () => {
        if (ref.current.className == container.wrong) {
        ref.current.className = container.front;
    }
    if (ref.current.className == container.hold)
        ref.current.className = container.front;
    setStuck(false);
  };

  const clickHandler = () => {
    if (stuck == true) return;
    setStuck(true);
    props.clickHandler(ref);
  };

    return(
        <div
            className={container.front}
            ref={ref}
            onClick={clickHandler}
            onAnimationEnd={animationEndHandler}
            onTransitionEnd={animationEndHandler}
        >
            <div className={classes.back}>Cards Back:{props.number}</div>
            <div className={classes.front}></div>
        </div>
    )
}

export default Card;
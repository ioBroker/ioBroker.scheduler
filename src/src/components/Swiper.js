
import React, { useState } from "react";
import { Fragment } from "react";
import { useSwipeable } from "react-swipeable"; // https://www.npmjs.com/package/react-swipeable
import DayNightSwitcher from "./DayNightSwitcher"
import SliderSingle from "./SliderSingle";

const Swiper = ( props ) => {
    const [range, setRange] = useState( 6 )
    const [ data, setData ] = useState( props.data || [] );
    const [ slide_id, setSlide_id ] = useState( 0 );
    const [ selected, setSelected ] = useState( [ ] );
    const handlers = useSwipeable({
      onSwiped: () => { },
      onSwipedLeft: () =>
      {
        console.log('swiped left')
        if( slide_id < 24 - range )
          setSlide_id( (slide_id + range) % data.length );
        else
        setSlide_id( 0 );
      },
      onSwipedRight: () =>
      {
        console.log('swiped right')  
        if(slide_id > 0)
          setSlide_id( (slide_id - range) % data.length )
        else
          setSlide_id( 24 - range );
      }
    });
    const myRef = React.useRef();
  
    const refPassthrough = (el) => {
      handlers.ref(el);
      myRef.current = el;
    }
    function onChange( field, value, i ) 
    {       
      /* 
        let state = {...this.state };
        if( selected.filter( e  => e ).length == 0 || field == "selected")
        {
            state[ field ][i] = value; 
        }
        else
        {
            state[ field ].forEach((element, index) => {
                if( .selected[index] )
                {
                    state[ field ][index] =  value;
                }
            });
        }
        console.log( selected );
        console.log( value);
        console.log( state[ field ] );
        this.setState( state )
        */
    }
    function getSlide()
    {
        let sliders = []
        for( let i = slide_id; i <= slide_id + range; i++ )
        {
          sliders.push(
            <SliderSingle
                key={ i }
                value={ data[ i ] } 
                selected= { selected[ i ] }
                label={ "" }
                i={ i }
                on={ onChange }
                type={ props.type }
            /> 
          )
        }
        return sliders;
    }


    return <Fragment>
      <div 
        {...handlers} 
        ref={refPassthrough} 
        style={{width:"100%", height:"100%", display:"flex" }}
      >
          { getSlide() }
      </div>
      <DayNightSwitcher

      />
    </Fragment>
  }
  export default Swiper;
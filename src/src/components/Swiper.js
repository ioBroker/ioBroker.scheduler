
import React, { useEffect, useState } from "react"; 
import { useSwipeable } from "react-swipeable"; // https://www.npmjs.com/package/react-swipeable
import DayNightSwitcher from "./DayNightSwitcher"
import SliderSingle from "./SliderSingle";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const Swiper = ( props ) => {
    const [ count, setCount ] = useState( 6 )
    const [ range, setRange ] = useState( props.range )
    const [ sections, setSections ] = useState( 1 )
    const [ data, setData ] = useState( props.data || [] );
    const [ slide_id, setSlide_id ] = useState( 0 );
    const [ selected, setSelected ] = useState( [ ] ); 
    useEffect(() =>
    {
      sectionsByRange();
      if(props.range != range)
      {
        setRange( props.range )
        sectionsByRange();
      }
    })
    const handlers = useSwipeable({
      onSwiped: () => { },
      onSwipedLeft: () => prev(),
      onSwipedRight: () => next() 
    });
    const myRef = React.useRef();
  
    const refPassthrough = (el) => {
      handlers.ref(el);
      myRef.current = el;
    }
    function prev()
    {
        console.log('swiped left')
        if( slide_id < 24 - count )
          setSlide_id( (slide_id + count) % data.length );
        else
        setSlide_id( 0 );
    }
    function next()
    {
      console.log('swiped right')  
        if(slide_id > 0)
          setSlide_id( (slide_id - count) % data.length )
        else
          setSlide_id( 24 - count );
    }
    function sectionsByRange()
    {
      switch(props.range)
        {
          case 0:
            setSections(8);
            setCount(5);
            break;
          case 1:
            setSections(4)
            setCount(5);
            break;
          case 2:
            setSections(4)
            setCount(2);
            break;
          case 4:
            setSections(1)
            setCount(3);
            break;
          case 3:
          default:
            setSections(2)
            setCount(3);
            break;
        }
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
        for( let i = slide_id; i <= slide_id + count; i++ )
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
    
    return <>
      <div className="swiper-content">
        <div className="left-button flow" onClick={ prev }>
          <ChevronLeftIcon/>
        </div>
        <div 
          {...handlers} 
          ref={refPassthrough} 
          style={{ height:"100%", display:"flex" }}
        >
            { getSlide() }
        </div>
        <div className="right-button flow" onClick={ next }>
          <ChevronRightIcon/>
        </div>
      </div>
      {  slide_id + " " + range  } 
      <DayNightSwitcher
        sections={ sections }
        quorte_id={ slide_id / range }
        on={ quorte_id => setSlide_id (range * quorte_id) }
      />
    </>
  }
  export default Swiper;
import React, { Component } from "react"; 
import { Fragment } from "react";
import {Swipe} from 'react-swipe-component';
import DayNightSwitcher from "./DayNightSwitcher"
import SliderSingle from "./SliderSingle";

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CodeIcon from '@material-ui/icons/Code'; 
import ClearIcon from '@material-ui/icons/Clear';

class Swiper extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            ...props,
            count : this.getCountByRange( props.range || 0 ) , 
            sections: this.getSectionByRange( props.range || 0 ) ,
            selected : [],
            _width : props._width
        }
        window.Swiper = this;
        
    }
    componentDidUpdate()
    {
    setTimeout(() => {
        this.setState({ 
            count : this.getCountByRange( this.state.range ),
            sections: this.getSectionByRange( this.state.range ) ,
            isLoading:true 
        })
    }, 200 )
    }
    componentWillUpdate(nextProps)
    {
        if(nextProps.type != this.state.type)
        {
            this.setState({ type : nextProps.type });
        }
        if(nextProps.theme != this.state.theme)
        {
            this.setState({ theme : nextProps.theme });
        }
        if(nextProps.range != this.state.range)
        {
            this.setState({ range : nextProps.range });
            this.sectionsByRange( nextProps.range );
            this.setState({slide_id:0})
        }
        if(nextProps._width != this.state._width)
        {
            this.setState({ _width : nextProps._width });
        }
    }
    //
    setSections = sections =>
    {
        this.setState({sections})
    }
    setCount = count =>
    {
        this.setState({ count })
    }
    getSectionByRange = range =>
    {
        if( this.state ? this.state._width >= 720 : this.props._width >= 720 )
        {
            return range == 0 ? 2 : 1;
        }
        switch( range )
        {
          case 0: 
            return 8; 
          case 1: 
            return 4; 
          case 2: 
            return 3; 
          case 4: 
            return 1; 
          case 3:
          default: 
            return 2; 
        }
    }
    getCountByRange = range =>
    {
        if( this.state ? this.state._width >= 720 : this.props._width >= 720 )
        {
            return range == 0 ? 24 : this.getMaxByRange( range );
        }
        switch( range )
        {
          case 0: 
            return 6;
          case 1:
            return 6;
          case 2:
            return 4;
          case 4:
            return 6;
          case 3:
          default:
            return 4;
        }
    }
    getMaxByRange = range =>
    {
        return 24 / this.getStepByRange( range ) 
    }
    getStepByRange = range =>
    {
        switch( range )
        {
          case 0: 
            return .5;
          case 1:
            return 1;
          case 2:
            return 2;
          case 4:
            return 4;
          case 3:
          default:
            return 3;
        }
    }

    sectionsByRange = range =>
    {
        this.setSections( this.getSectionByRange( range ) );
        this.setCount( this.getCountByRange( range ) );
    }

    //
    prev = () =>
    {
        const{ slide_id, count, data, range } = this.state;
        console.log('swiped right')  
        if(slide_id > 0)
          this.setSlide_id( slide_id - 1 )
        else
          this.setSlide_id( this.getMaxByRange(range) / count );
    }
    next = () =>
    {
        const{ slide_id, count, data, range } = this.state;
        console.log('swiped left')
            if( slide_id < this.getMaxByRange(range) / count - 1 )
        this.setSlide_id( slide_id + 1 );
        else
            this.setSlide_id( 0 );
    }
    selectAll = () =>
    {
        const{ range } = this.state;
        this.setState( {selected: Array( this.getMaxByRange( range ) + 1).fill( 1 ).map( ( e, i ) => i ) } )
    }
    selectNone = () =>
    {
        this.setState( {selected: [] } )
    }

    setSlide_id = slide_id =>
    {
        this.setState( { slide_id : parseInt( slide_id ) } );
    }
    onChange = ( field, value, i ) =>
    {     
        const {slide_id, count, data, selected, type, sections, range} = this.state;
        let state = {...this.state };
        if( selected.filter( e  => e ).length == 0 || field == "selected")
        {
            state[ field ][i] = value; 
        }
        else
        {
            state[ field ].forEach((element, index) => {
                if( selected[index] )
                {
                    state[ field ][index] =  value;
                }
            });
        } 
        this.setState( state )
       
    }
    getSlide()
    {
        const {slide_id, count, data, selected, type, theme, _width, range, isLoading} = this.state;
       
        let sliders = []
        for( let i = slide_id * count; i < ( slide_id + 1 ) * count; i++ )
        {
          sliders.push(
            <SliderSingle
                key={ i }
                value={ data[ i ] } 
                selected= { selected[ i ] }
                label={ "" }
                i={ i }
                step={this.getStepByRange( range )}
                on={ this.onChange }
                type={ type }
                theme={ theme }
                _width={ _width / count }
            /> 
          )
        }
        return sliders;
    }
    // 
    onSwipedDown = evt =>
    { 

    }
    onSwipeEnd = evt =>
    { 

    }
    onSwipeLeftListener()
    {
        console.log("Swiped left");
        window.Swiper.prev();
    }
    onSwipeRightListener()
    {
        console.log("Swiped right");
        window.Swiper.next();
    }
    onSwipingRight()
    {
        console.log("onSwipingRight");
    }
    onSwipingLeft() 
    {
        console.log("onSwipingLeft");
    }
    onSwipeListener = e =>
    { 
        console.log("Swipe x: ", e.x, " -- " ); 
        
    }
    onTransitionEnd = () =>
    {
        console.log("onTransitionEnd");
    } 
    render()
    {
        const {slide_id, count, data, selected, type, sections, range, isLoading} = this.state;
        if(!isLoading)  return " ";
        const selectorBtn = selected.length == 0
            ?
            <div className="left-button-add flow" onClick={ this.selectAll }>
                <CodeIcon/>
            </div>
            :
            <div className="left-button-add flow" onClick={ this.selectNone }>
                <ClearIcon/>
            </div>
        return <Fragment> 
        <div className="swiper-content"> 
            <Swipe
                nodeName="div"
                className="h-100 w-100"
                mouseSwipe={false}
                onSwipedDown={this.onSwipedDown}
                onSwipeEnd={this.onSwipeEnd}
                onSwipe={this.onSwipeListener}
                onSwipedLeft={this.onSwipeLeftListener}
                onSwipedRight={this.onSwipeRightListener} 
                onTransitionEnd={this.onTransitionEnd}
            >
                <div className="swiper"> 
                    { this.getSlide() }
                </div>            
            </Swipe> 
        </div>
        <DayNightSwitcher
            sections={ sections }
            quorte_id={ parseInt(slide_id ) }
            on={ quorte_id => this.setSlide_id ( quorte_id ) }
        />
      </Fragment> ;
    }
}
export default Swiper;
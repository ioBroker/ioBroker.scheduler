import React, { Component } from "react"; 
import { Fragment } from "react";
import {Swipe} from 'react-swipe-component';
import DayNightSwitcher from "./DayNightSwitcher"
import SliderSingle from "./SliderSingle";

import CodeIcon from '@material-ui/icons/Code'; 
import ClearIcon from '@material-ui/icons/Clear';

class Swiper extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            slide_id: 0,
            selected : [],
            data: props.data
        }
        window.Swiper = this;
        
    }
    componentWillUpdate(nextProps)
    {
        if(nextProps.range !== this.props.range)
        {
            this.setState({
                slide_id:0
            })
        }
    }
    getSectionByRange = range =>
    {
        if( this.props._width >= 720 )
        {
            return range === 0 ? 2 : 1;
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
        if( this.props._width >= 720 )
        {
            return range === 0 ? 24 : this.getMaxByRange( range );
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

    //
    prev = () =>
    {
        const{ slide_id } = this.state;
        const{ range } = this.props;
        const count = this.getCountByRange(range);
        console.log('swiped right')  
        if(slide_id > 0)
          this.setSlide_id( slide_id - 1 )
        else
          this.setSlide_id( this.getMaxByRange(range) / count );
    }
    next = () =>
    {
        const{ slide_id } = this.state;
        const{ range } = this.props;
        const count = this.getCountByRange(range);
        console.log('swiped left')
            if( slide_id < this.getMaxByRange(range) / count - 1 )
        this.setSlide_id( slide_id + 1 );
        else
            this.setSlide_id( 0 );
    }
    selectAll = () =>
    {
        const{ range } = this.props;
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
        const {selected} = this.state;
        let state = {...this.state };
        if( selected.filter( e  => e ).length === 0 || field === "selected")
        {
            console.log(field);
            console.log(i);
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
        const {slide_id, selected} = this.state;
        const {type, _width, theme, data, range} = this.props;
        const count = this.getCountByRange(range);
       
        let sliders = []
        for( let i = slide_id * count; i < ( slide_id + 1 ) * count; i++ )
        {
          sliders.push(
            <SliderSingle
                key={ i + 'step' + this.getStepByRange(range) }
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
        if (!this.props._width) {
            return null;
        }
        const {slide_id, selected} = this.state;
        const {range} = this.props;
        const sections = this.getSectionByRange(range);
        const selectorBtn = selected.length === 0
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
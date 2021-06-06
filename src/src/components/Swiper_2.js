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
            selected : []
        }
        window.Swiper = this;
        
    }
    componentWillUpdate(nextProps)
    {
        if(nextProps.type != this.state.type)
        {
            this.setState({ type : nextProps.type });
        }
        if(nextProps.range != this.state.range)
        {
            this.setState({ range : nextProps.range });
            this.sectionsByRange( nextProps.range );
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
        return 24 / this.getStepByRange( range ) - 1;
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
        console.log( selected );
        console.log( value);
        console.log( state[ field ] );
        this.setState( state )
       
    }
    getSlide()
    {
        const {slide_id, count, data, selected, type, sections, range} = this.state;
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
        const {slide_id, count, data, selected, type, sections, range} = this.state;
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
            <div className="btn-cont">
                <div className="left-button flow" onClick={ this.prev }>
                    <ChevronLeftIcon/>
                </div>
                { selectorBtn }
            </div>
            <Swipe
                nodeName="div"
                className="h-100 w-100"
                mouseSwipe={true}
                onSwipedDown={this.onSwipedDown}
                onSwipeEnd={this.onSwipeEnd}
                onSwipe={this.onSwipeListener}
                onSwipedLeft={this.onSwipeLeftListener}
                onSwipedRight={this.onSwipeRightListener} 
                onTransitionEnd={this.onTransitionEnd}
            >
                <div className="swiper" > 
                    { this.getSlide() }
                </div>            
            </Swipe>
            <div className="btn-cont">
                <div className="right-button flow" onClick={ this.next }>
                    <ChevronRightIcon/>
                </div>
            </div>
        </div>
        {/*
        <div>
            SLIDE_ID = {slide_id}, QUORTE_ID = { parseInt(slide_id ) }
        </div>
        <div>
            COUNT = { count }
        </div>
        */}
        <DayNightSwitcher
            sections={ sections }
            quorte_id={ parseInt(slide_id ) }
            on={ quorte_id => this.setSlide_id ( quorte_id ) }
        />
      </Fragment> ;
    }
}
export default Swiper;
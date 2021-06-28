import React, { Component } from 'react'; 
import { Fragment } from 'react';
import {Swipe} from 'react-swipe-component';
import DayNightSwitcher from './DayNightSwitcher'
import Interval from './Interval';

class Intervals extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            slide_id: 0,
            selected : []
        }
    }
    componentDidUpdate(prevProps)
    {
        if(prevProps.range !== this.props.range)
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
            return range === 0.5 ? 2 : 1;
        }
        switch( range )
        {
          case 0.5: 
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
            return range === 0.5 ? 24 : this.getMaxByRange( range );
        }
        switch( range )
        {
          case 0.5: 
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
        return 24 / range;
    }

    //
    prev = () =>
    {
        const{ slide_id } = this.state;
        const{ range } = this.props;
        const count = this.getCountByRange(range);
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
        if (field === 'selected') {
            state[ field ][i] = value;
            this.setState( state )
        }
        if (field === 'data') {
            let data = [...this.props.data];
            let inSelected = selected[i];
            if (!inSelected) {
                this.setState({selected: []});
            }
            if( !inSelected || selected.filter( e  => e ).length === 0)
            {
                data[i] = value; 
            }
            else
            {
                data.forEach((element, index) => {
                    if( selected[index] )
                    {
                        data[index] =  value;
                    }
                });
            }
            this.props.onChange(data);
        }
    }
    getSlide()
    {
        const {slide_id, selected} = this.state;
        const {type, _width, theme, range, data} = this.props;
        const count = this.getCountByRange(range);
       
        let sliders = []
        for( let i = slide_id * count; i < ( slide_id + 1 ) * count; i++ )
        {
          sliders.push(
            <Interval
                key={ i + 'step' + range }
                value={ data[ i ] } 
                selected= { selected[ i ] }
                label={ '' }
                i={ i }
                step={range}
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
    onSwipeLeftListener = () => 
    {
        this.prev();
    }
    onSwipeRightListener = () =>
    {
        this.next();
    }
    onSwipingRight()
    {
    }
    onSwipingLeft() 
    {
    }
    onSwipeListener = e =>
    { 
    }
    onTransitionEnd = () =>
    {
    } 
    render()
    {
        if (!this.props._width) {
            return null;
        }
        const {slide_id} = this.state;
        const {range} = this.props;
        const sections = this.getSectionByRange(range);
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
export default Intervals;
import { Component } from "react";
import { withStyles, makeStyles, useStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import defaultOptopns from "../data/defaultOptopns.json"
import defaultData from "../data/defaultData.json" 
import chroma from "chroma-js"; 
import { Button, Checkbox, Fab, FormControlLabel, Typography } from "@material-ui/core"; 
import { PhonelinkRingSharp } from "@material-ui/icons";

const styles = theme => ({
    
});
class SliderSingle extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            options : props.options
                ?
                props.options
                :
                defaultOptopns.options,
            value : props.value,
            label : props.label,
            step : props.step,
            selected : props.selected,
            i : props.i,
            postfix : props.postfix,
            type : props.type,
            theme : props.theme,
            _width : props._width
        }
    }
    componentWillMount()
    {
        this.redraw();  
    }

    redraw()
    {   
        const { options, _width, theme } = this.state; 
        // console.log( theme ) 
        this.PrettoSlider = withStyles({
            root: {
              //color: options.backgrounds[ 2 ],
              color: theme.palette.primary.dark,
              width: _width + "px!important",
              borderRadius: 0,
              height: "calc(100% - 165px)!important",
              transition: "all 100ms ease-out",
              position: "relative"
            },
            thumb: {
                display:"none"
            },
            active: {
                
            },
            valueLabel: {
              left: "calc(-50% + " + _width/2 + "px)!important",
              '& *': {
                background: 'transparent',
                fontWeight: 100,
                borderRadius:0,
                fontSize: "1.0rem", 
                width: "90%!important",
                transition: "all 100ms ease-out" 
              },
            },
            track: {
                width: "90%!important",
                transition: "all 100ms ease-out",
                borderRadius:4                
            },
            rail: { 
                transition: "all 100ms ease-out",
                width: "90%!important",
                borderRadius: 4, 
                borderBottomLeftRadius: "0px!important",  
                borderBottomRightRadius: "0px!important",  
                height:"calc(100% + " + _width + "px)",
                // backgroundColor:"#FFF",
                backgroundColor:theme.palette.primary.light,
            },
        })(Slider);
    }
    componentWillUpdate(nextProps, nextState )
    {
        if( nextProps.selected != this.state.selected )
        { 
            this.setState({ selected: nextProps.selected });
        }
        if( nextProps.step != this.state.step )
        { 
            this.setState({ step: nextProps.step });
        }
        if( nextProps.value != this.state.value )
        {
            this.setState({ value: nextProps.value })
        }    
        if( nextProps.theme != this.state.theme )
        {
            this.setState({ theme: nextProps.theme })
        }       
        if( nextProps._width != this.state._width )
        {
            console.log( nextProps._width );            
            this.setState({ _width: nextProps._width });            
            setTimeout( () => {
                this.redraw();
                this.render()
            }, 30 )
        }       
        if( nextProps.type != this.state.type)
        {
            const { max }= this.getMinMax(nextProps.type);
            let state = { type : nextProps.type };
            if(max < this.state.value)
            {
                console.log(max, this.state.value)
                state.value = max;
                console.log( state )
            }
            this.setState( state )
            this.redraw();
        }
    }
    handleSliderChange = ( event, data) =>
    {
        //this.setState({value: data});
        this.on( "data", data );
    }
    handleSelected = evt =>
    { 
        this.on( "selected", !this.state.selected );
    }
    on = (field, value) =>
    {
        if(this.props.on)
        {
            this.props.on( field, value, this.props.i );
        }
    }
    getPostfix(value)
    {
        switch(this.state.type)
        {
            case "temperature":
                return value.toString() + "º";
            case "onnoff":
                return value 
                    ? 
                    <span className="text-success">on</span> 
                    : 
                    <span className="text-danger">off</span>
            case "persent":
            default:
                return value.toString() + "%";
        }
    }
    getMinMax( type = undefined)
    {
        const t = type ? type : this.state.type;
        switch( t )
        {
            case "temperature":
                return defaultOptopns.options;
            case "onnoff":
                return { min:0, max: 1 };
            default:
            case "persent":
                return { min:0, max:100 };
        }
    }
    getLabel = () =>
    {
        const {i, step} = this.state;
        let label = i * step;
        const hrs = parseInt(label)
        const secs = ( "0" + ( label % 1 * 60) ).slice( -2 ) ;
        return [hrs, secs];
    }
    render()
    {
        const {i, value, step, selected, options } = this.state;
        if(i < 0 )
        {
            return "";
        }
        const{min, max} = this.getMinMax();
        const __Slider = this.PrettoSlider;
        const label = this.getLabel();
        return <span className="pretto" >
            <span className="pretto-label" style={{ marginBottom: options.staff.width / 2 + 20 }}>
                { this.getPostfix( value || 0 ) } 
            </span>
            <__Slider
                key={i}
                orientation="vertical"  
                aria-label="pretto slider"
                value={ value }
                min={min}
                max={max}
                selected= { selected }
                onChange={ this.handleSliderChange }
            /> 
            <div 
                className={"pretto-time flow-square" + ( selected ? " active" : "" )} 
                style={{                           
                    bottom:-(options.staff.width + 0),
                    marginLeft:7,
                    width:"calc(100% - 14px)" 
                }}
                i={i}
                onClick={this.handleSelected}
            >
                <span>{ label[0] }</span><span className="pretto-secs">{label[1]}</span>
                    
            </div>
        </span>  
    }
}
export default withStyles(styles)(SliderSingle);
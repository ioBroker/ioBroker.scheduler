import { Component } from "react";
import { withStyles, makeStyles, useStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import defaultOptopns from "../data/defaultOptopns.json"
import defaultData from "../data/defaultData.json" 
import chroma from "chroma-js"; 
import { Button, Checkbox, Fab, FormControlLabel, Typography } from "@material-ui/core"; 

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
            selected : props.selected,
            i : props.i,
            postfix : props.postfix,
            type : props.type
        }
    }
    componentWillMount()
    {
        this.redraw();
    }

    redraw()
    {   
        const { options } = this.state;
        const { staff } = options;
        const bg1 = options.backgrounds[ 0 ];
        const bg2 = chroma( bg1 ).darken(.33);
        const bg22 = chroma( bg1 ).darken(.5);
        const bg3 = chroma( bg1 ).brighten(4);
        const bg4 = options.backgrounds[ 2 ];
        const bg5 = chroma( bg4 ).darken(.33);
        this.PrettoSlider = withStyles({
            root: {
              color: options.backgrounds[ 2 ],
              width: staff.width + "px!important",
              borderRadius:0
            },
            thumb: {
              height: staff.width-10,
              width: staff.width-10,
              background: "radial-gradient(circle at 2% 2%, "+ bg2 +" 0%, "+ bg1 +" 40%, " + bg3 + "  80% )",
              border: "3px solid " + bg1,
              marginLeft: "5px!important",
              marginBottom: "-" + ( staff.width / 2 - 5 ) + "px!important",
              opacity:0,
              transform: "scale(0)",
              transition: "transform 300ms ease-out, box-shadow 100ms ease-out, background 100ms ease-out",
              transitionDelay: "100ms",
              boxShadow: "3px 8px 10px 0 rgba(0,0,0,.22)",
              '&:hover, &$active': {
                boxShadow: "3px 8px 10px 0 rgba(0,0,0,.22)",
                opacity:1,
                transform: "scale(1)"
              },
              '&:active': {
                background: "radial-gradient(circle at 8% 8%, "+ bg22 +" 0%, "+ bg1 +" 50%, " + bg3 + "  80% )",
                boxShadow: "1px 1px 3px 0 rgba(0,0,0,.33)",
                opacity:1,
                transform: "scale(1.2)"
              },
              '&:after': {
                content: "''",
                position: "absolute",
                width: "50%",
                height: "50%",
                background: bg4,
                margin: "auto",
                boxShadow: "1px 3px 4px 0 rgba(0,0,0,.22)",
                transition: "all 300ms ease-out",
                display:"none"
              },
              '&:active:after': {
                content: "''",
                position: "absolute",
                width: "45%",
                height: "45%",
                background: options.backgrounds[ 3 ], 
                boxShadow: "1px 1px 2px 0 rgba(0,0,0,.33)"
              }
            },
            active: {},
            valueLabel: {
              left: "calc(-50% + " + staff.width/2 + "px)!important",
              '& *': {
                background: 'transparent',
                fontWeight: 500,
                transform: "scale(1) translateY(0px) rotate(0deg)",
                borderRadius:0,
                fontSize: "1.0rem",
                width: staff.width
              },
            },
            track: {
              width: staff.width + "px!important", 
              borderRadius:"0px!important", 
              '&:before': {
                  content: "''",
                  backgroundColor: bg4, 
                  width: staff.width,
                  height:staff.width,
                  borderRadius:"100%",
                  position:"absolute",
                  top:-staff.width/2,
                  left:0
              }, 
              '&:after': {
                  content: "''",
                  backgroundColor: bg4, 
                  width: staff.width,
                  height:staff.width,
                  borderRadius:"100%",
                  position:"absolute",
                  bottom:-staff.width/2,
                  left:0
              },
            },
            rail: {
                backgroundColor: options.backgrounds[ 0 ],
                width: staff.width + "px!important",
                borderRadius: staff.width + "px!important", 
                borderBottomLeftRadius: "0px!important",  
                borderBottomRightRadius: "0px!important",  
                height:"calc(100% + " + staff.width/2 + "px)!important",
                transform: "translateY(-" + staff.width / 2 + "px)",
                boxShadow: "2px 2px 4px 0 #f5fbffed, -2px -2px 4px 0 #8693acad, inset -2px -2px 2px 0 #ffffff5c, inset 2px 2px 2px 0 #00000033 !important"
            },
        })(Slider);
    }
    componentWillUpdate(nextProps, nextState )
    {
        if( nextProps.selected != this.state.selected )
        { 
            this.setState({ selected: nextProps.selected });
        }
        if( nextProps.value != this.state.value )
        {
            //this.setState({ value: nextProps.value })
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
        this.setState({value: data});
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
            case "persent":
                return { min:0, max:100 };
        }
    }

    render()
    {
        const {i, value, selected, options } = this.state;
        const{min, max} = this.getMinMax();
        const __Slider = this.PrettoSlider;
        return <span className="pretto">
            <span className="pretto-label">
                { this.getPostfix( value ) } 
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
                <span>{ i } : </span><span className="pretto-secs">00</span>
                    
            </div>
        </span>  
    }
}
export default withStyles(styles)(SliderSingle);
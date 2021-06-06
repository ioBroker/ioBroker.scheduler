import React, { Component } from "react";
import { withStyles, makeStyles, useStyles } from '@material-ui/core/styles'; 
import defaultOptopns from "../../src/data/defaultOptopns.json"
import defaultData from "../../src/data/defaultData.json"  
import { Button, Checkbox, Fab, FormControlLabel, Typography } from "@material-ui/core"; 
import SliderSingle from "../../src/components/SliderSingle";  
import Swiper from "../../src/components/Swiper_2";

const styles = theme => ({
    tab: {
        width: '100%',
        minHeight: '100%'
    },
    column: {
        display: 'inline-block',
        verticalAlign: 'top',
        marginRight: 20
    },
    columnSettings: {
        width: 'calc(100% - 370px)',
    },
});

class Sliders extends Component
{
    constructor(props)
    {
        super(props);
        window.Sliders = this;
        this.state ={
            data : props.data
                ?
                props.data
                :
                defaultData.data,
            labels : props.data
                ?
                props.labels
                :
                defaultData.labels,
            options : props.options
                ?
                props.options
                :
                defaultOptopns.options,
                type : props.type ? props.type : "persent",
            range : props.range,
            selected: [],
            slide_id : 0
        }
		this.car = React.createRef();
    }
    componentWillMount()
    {
        window.addEventListener('resize', this.updateWindowDimensions);
        this.updateWindowDimensions();
    }
    omponentWillUnmount() 
	{ 
        window.removeEventListener('scroll', this.updateWindowDimensions);
    }
    updateWindowDimensions( evt )
	{
        window.Sliders.setState({
            _width : window.innerWidth,
            _height: window.innerHeight
        })
    }
    componentWillUpdate(nextProps, nextState )
    {
        if(nextProps.type != this.state.type )
        {
            this.setState({ type: nextProps.type })
        }
        if(nextProps.range != this.state.range )
        {
            this.setState({ range: nextProps.range })
        }
    } 
    
    render()
    { 
        const { data, options, type, range, slide_id } = this.state; 
        const { staff } = options;  
        return  <div 
            className={"tapper-grid tapper-shadow m-1 p-1 h-100 "}
            style={{
                padding : 0,
                paddingBottom:0,
                backgroundColor : options.backgrounds[0],

            }}    
        >
            <div 
                className="tapper-inside"
                style={{ 
                    padding: 0,
                    width:"100%" 
                }}
            > 
                <Swiper 
                    data={ data }
                    type={ type }
                    range={ range }
                    slide_id={slide_id}
                />
            </div>
        </div> 
    }

}
export default withStyles(styles)(Sliders);
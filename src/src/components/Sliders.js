import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles'; 
import defaultOptions from "../../src/data/defaultOptions.json"
import defaultData from "../../src/data/defaultData.json"  
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
                defaultOptions.options,
                type : props.type ? props.type : "persent",
            range : props.range,
            selected: [],
            theme: props.theme,
            slide_id : 0,
            _width:props._width
        }
		this.car = React.createRef();
    }
    componentDidMount()
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
        const w = document.getElementById('tapper-inside').getBoundingClientRect().width; 
        window.Sliders.setState({
            _width : window.innerWidth,
            _height: window.innerHeight,
            _w : w ? w * .85 : 30 
        })
    }
    componentWillUpdate(nextProps, nextState )
    {
        if(nextProps.type !== this.state.type )
        {
            this.setState({ type: nextProps.type })
        }
        if(nextProps.range !== this.state.range )
        { 
            this.setState({ range: nextProps.range });
            this.updateWindowDimensions( );
        } 
        if(nextProps.theme !== this.state.theme )
        { 
            this.setState({ theme: nextProps.theme }); 
        } 
    } 
    
    render()
    { 
        const { data, options, type, theme, range, slide_id } = this.state; 
        // console.log(this.state);
        const { staff } = options;  
        return  <div 
            className={"tapper-grid tapper-shadow m-1 p-1 h-100 "}
            style={{
                padding : 0,
                paddingBottom:0,
                backgroundColor : theme.palette.background.default,

            }}    
        >
            <div 
                className="tapper-inside"
                id="tapper-inside"
                style={{ 
                    padding: 0,
                    width:"100%" 
                }}
            > 
                <Swiper 
                    data={ data }
                    theme={ theme }
                    type={ type }
                    range={ range }
                    _width={this.state._w}
                    slide_id={slide_id}
                />
            </div>
        </div> 
    }

}
export default withStyles(styles)(Sliders);
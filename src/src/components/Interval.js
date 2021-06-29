import { Component } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/core/Slider';
import defaultOptions from '../data/defaultOptions.json'
import minmax from '../data/minmax.json'

const styles = theme => ({
    
});
const usePrettoSliderStyles = makeStyles({
    root: (props) => {return {
        //color: options.backgrounds[ 2 ],
        color: props.theme.palette.primary.dark,
        width: props.intervalsWidth + 'px!important',
        borderRadius: 0,
        height: 'calc(100% - 165px)!important',
        transition: 'all 100ms ease-out',
        position: 'relative'
    }},
    thumb: {
        display:'none'
    },
    active: {
        
    },
    valueLabel: (props) => {return {
        left: 'calc(-50% + ' + props.intervalsWidth/2 + 'px)!important',
        '& *': {
        background: 'transparent',
        fontWeight: 100,
        borderRadius:0,
        fontSize: '1.0rem', 
        width: '90%!important',
        transition: 'all 100ms ease-out' 
        },
    }},
    track: {
        width: '90%!important',
        transition: 'all 100ms ease-out',
        borderRadius:4                
    },
    rail: (props) => {return {
        transition: 'all 100ms ease-out',
        width: '90%!important',
        borderRadius: 4, 
        borderBottomLeftRadius: '0px!important',  
        borderBottomRightRadius: '0px!important',  
        height:'calc(100% + ' + props.intervalsWidth + 'px)',
        // backgroundColor:'#FFF',
        backgroundColor:props.theme.palette.primary.light,
    }},
});


const PrettoSlider = props => {
    return <Slider classes={usePrettoSliderStyles({intervalsWidth: props.intervalsWidth, theme: props.theme})} {...props}/>
}
class Interval extends Component
{
    
    handleSliderChange = ( event, data) =>
    {
        //this.setState({value: data});
        this.on( 'data', data );
    }
    handleSelected = evt =>
    { 
        this.on( 'selected', !this.props.selected );
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
        switch(this.props.type)
        {
            case 'temperature':
                return value.toString() + 'º';
            case 'onoff':
                return value 
                    ? 
                    <span className='text-success'>on</span> 
                    : 
                    <span className='text-danger'>off</span>
            case 'percent':
            default:
                return value.toString() + '%';
        }
    }
    getMinMax()
    {
        return minmax[this.props.type];
    }
    getLabel = () =>
    {
        const {step, i} = this.props;
        let label = i * step;
        const hrs = parseInt(label)
        const secs = ( '0' + ( label % 1 * 60) ).slice( -2 ) ;
        return [hrs, secs];
    }
    render()
    {
        const options = this.props.options
                ?
                this.props.options
                :
                defaultOptions.options;
        const { value, i, selected, theme, intervalsWidth } = this.props;
        if(i < 0 )
        {
            return '';
        }
        const{min, max} = this.getMinMax();
        const label = this.getLabel();
        return <span className="pretto" >
            <span className="pretto-label" style={{ marginBottom: options.staff.width / 2 + 20 }}>
                { this.getPostfix( value || 0 ) } 
            </span>
            <PrettoSlider
                key={i}
                theme={theme}
                intervalsWidth={intervalsWidth}
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
export default withStyles(styles)(Interval);
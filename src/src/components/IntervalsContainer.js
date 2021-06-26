import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles'; 
import Intervals from './Intervals';

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

class IntervalsContainer extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            selected: []
        }
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
    updateWindowDimensions = () =>
	{
        const w = document.getElementById('tapper-inside').getBoundingClientRect().width; 
        this.setState({
            _w : w ? w * .85 : 30 
        })
    }
    componentDidUpdate(prevProps)
    {
        if(prevProps.range !== this.props.range )
        { 
            this.updateWindowDimensions( );
        } 
    } 
    
    render()
    { 
        const { type, theme, range, intervals } = this.props; 
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
                <Intervals 
                    data={ intervals }
                    onChange={this.props.onChange}
                    theme={ theme }
                    type={ type }
                    range={ range }
                    _width={this.state._w}
                />
            </div>
        </div> 
    }

}
export default withStyles(styles)(IntervalsContainer);
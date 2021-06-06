import { Component } from "react";
import day_night from "../assets/img/day-night.jpg"

class DayNightSwitcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quorte_id : props.quorte_id || 0,
            sections  : props.sections
        }
    }
    componentWillUpdate(nextProps, nextStyle)
    {
        if(nextProps.sections != this.state.sections)
        {
            this.setState({ 
                sections : nextProps.sections, 
                quorte_id : this.state.quorte_id < nextProps.sections
                    ? 
                    this.state.quorte_id
                    :
                    nextProps.sections - 1
            })
        } 
        
        if(nextProps.quorte_id != this.state.quorte_id)
        {
            this.setState({ 
                quorte_id : nextProps.quorte_id 
            })
        } 
        /**/
    }
    onSlide = quorte_id =>
    {
        
        if(this.props.on)
        {
            this.props.on( quorte_id )     
        }
        
       /*this.setState({ quorte_id })*/
    }
    render()
    {
        const {sections} = this.state;
        const region = 100 / sections;
        const quortes = Array( sections ).fill().map((_, i) => 
        {
            return <div 
                key={i}
                className="day-night-quorte" 
                onClick={()=> this.onSlide( i )}
            >

            </div>
        })
        return <div className="day_night_cont">
            <div>
                <img src={ day_night } alt="day-night" />
                <div className="day_night">
                    
                    { quortes }
                    <div
                        className="day-night-slide"
                        style={{ 
                            maxWidth: region + "%", 
                            width: region + "%", 
                            left: "calc("+(this.state.quorte_id * region) +"% - 5px)" }}
                    >
                    </div>
                </div>
            </div>  
        </div>
    }
}
export default DayNightSwitcher;
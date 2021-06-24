import { Component } from "react";
import day_night from "../assets/img/day-night.jpg"

class DayNightSwitcher extends Component
{
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
        const {sections} = this.props;
        const height = sections === 1 ? 0 : 78;
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
        return <div className="day_night_cont" style={{ height }}>
            <div>
                <img src={ day_night } alt="day-night" id="day-night"/>
                <div className="day_night">
                    
                    { quortes }
                    <div
                        className="day-night-slide"
                        style={{ 
                            maxWidth: region + "%", 
                            width: region + "%", 
                            left: "calc("+(this.props.quorte_id * region) +"% - 5px)" }}
                    >
                    </div>
                </div>
            </div>  
        </div>
    }
}
export default DayNightSwitcher;
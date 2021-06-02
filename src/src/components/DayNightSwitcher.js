import { Component } from "react";
import day_night from "../assets/img/day-night.jpg"

class DayNightSwitcher extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            quorte_id : 0,
            range : 4
        }
    }
    onSlide = quorte_id =>
    {
        this.setState({ quorte_id })
    }
    render()
    {
        const {range} = this.state;
        const region = 100 / range;
        const quortes = Array( range ).fill().map((_, i) => 
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
import { Component } from "react";
import TapperStaff from "./TapperStaff";
import defaultOptions from "../data/defaultOptions.json"
import defaultData from "../data/defaultData.json"

class Tapper extends Component
{
    render()
    {
        const data = this.props.data
                ?
                this.props.data
                :
                defaultData.data;
        const labels = this.props.data
                ?
                this.props.labels
                :
                defaultData.labels;
        const options = this.props.options
                ?
                this.props.options
                :
                defaultOptions.options;
        console.log( "options", options );
        const staffs = Array.isArray(data)
            ?
            data.map((staff, i) =>
            {
                return <TapperStaff
                    key={ i }
                   { ...options.staff }
                   min={options.min}
                   max={options.max}
                   label={ labels[i] } 
                   data={staff}
                   i={ i }
                   offsetY ={ options.staff.offsetY }
                   backgrounds={ options.backgrounds }
                />
            })
            :
            null
        return <div 
            style={{
                backgroundColor: options.backgrounds[ 1 ],
                padding:30
            }}
        >
            <div 
                className="tapper-container tapper-shadow"
                style={{
                    backgroundColor: options.backgrounds[ 0 ] 
                }}
                id="tapper"
            >
                { staffs}
            </div>
        </div>
    }
}
export default Tapper;
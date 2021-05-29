import { Component } from "react";
import TapperStaff from "./TapperStaff";
import defaultOptopns from "../data/defaultOptopns.json"
import defaultData from "../data/defaultData.json"

class Tapper extends Component
{

    constructor(props)
    {
        super(props);
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
                defaultOptopns.options
        }
    }
    render()
    {
        const {data, options} = this.state;
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
                   label={ this.state.labels[i] } 
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
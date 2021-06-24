import I18n from "@iobroker/adapter-react/i18n";
import { Component } from "react";

class EditPanel extends Component
{
    on = () =>
    {
        if(this.props.on)
        {
            this.props.on( this.props.isEdit )
        }
    }
    render()
    {
        return <div className="flow-menu mt-auto">
            <div 
                className={"tapper-edit w-100" + (this.props.isEdit ? " active" : "") }
                onClick={this.on}
            >
                {I18n.t( this.props.isEdit ? "Finish edit" : "Edit Menu")}
            </div>            
        </div>
    }
}
export default EditPanel;
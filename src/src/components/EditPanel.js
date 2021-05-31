import I18n from "@iobroker/adapter-react/i18n";
import { Component } from "react";

class EditPanel extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            isEdit:props.isEdit
        }
    }
    componentWillUpdate(nextProps)
    {
        if(nextProps.isEdit != this.state.isEdit )
        {
            this.setState({ isEdit: nextProps.isEdit })
        }
    }
    on = () =>
    {
        if(this.props.on)
        {
            this.props.on( this.state.isEdit )
        }
    }
    render()
    {
        return <div className="flow-menu mt-auto">
            <div 
                className={"tapper-edit w-100" + (this.state.isEdit ? " active" : "") }
                onClick={this.on}
            >
                {I18n.t( this.state.isEdit ? "Finish edit" : "Edit Menu")}
            </div>            
        </div>
    }
}
export default EditPanel;
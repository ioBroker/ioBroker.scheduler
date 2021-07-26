import Theme from "@iobroker/adapter-react/Theme";
export default (type) => {
    const danger = "#dd5325";
    const success = "#73b6a8";
    let theme = { ...Theme(type) }
    if(!theme) return theme
    console.log(theme);
    theme.palette.text.danger = {
        color: danger
    }
    theme.palette.text.success = {
        color:success
    }

    return theme;
}
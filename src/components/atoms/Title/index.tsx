
type Props = {
    title?: String;
    fontWeight?: any;
    fontSize?: any;
    color?: any;
}

export default function Title({title, fontWeight, fontSize, color}: Props) {
    const titleProps = {
        margin: 0,
        padding: 0,
        fontFamily: "Roboto",
        fontWeight: fontWeight? fontWeight : 700,
        fontSize: fontSize ? fontSize : '15px',
        color: color ? color : ''
    }
    return(
        <h1 style={titleProps}>{title}</h1>
    );
}
import { makeStyles } from "@material-ui/core";

const footerStyles = makeStyles((theme) => ({
    footerContainer: {
        height: `10em`,
        backgroundColor: `#00355F`,
        display: `flex`,
        flexDirection: `column`,
        justifyContent: `center`
    },
    footerText: {
        color: `#ffffff`,
    }
}))

export default footerStyles;
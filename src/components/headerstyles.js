import { makeStyles } from "@material-ui/core";
import headerImage from "../assets/hero-section-image.png";

const headerStyles = makeStyles((theme) => ({
    headerContainer: {
        backgroundImage: `url(${headerImage})`,
        backgroundSize: "cover",
        width: `100%`,
        height: `500px`,
        backgroundRepeat: `no-repeat`,
        display: `flex`,
        flexDirection: `row`,
        paddingLeft: `4%`,
        ["@media (max-width: 450px)"]: {
            flexDirection: `column`,
            justifyContent: `space-evenly`,
            height: `auto`,
            padding: `5%`
        }
    },
    headerTexts: {
        backgroundRepeat: `no-repeat`,
        display: `flex`,
        flexDirection: `column`,
        flexWrap: `wrap`,
        alignContent: `center`,
        justifyContent: `center`,
        ["@media (max-width: 450px)"]: {
            margin: `4em 0`
        }
    },
    headerTitle1: {
        fontSize: "2px",
    },
    userInput_container: {
        backgroundColor: `#ffffff`,
        width: `30%`,
        display: `flex`,
        flexWrap: `wrap`,
        alignContent: `space-around`,
        justifyContent: `space-evenly`,
        flexDirection: `column`,
        height: `60%`,
        margin: `7em auto`,
        border: `5px solid #00355F`,
        ["@media (max-width: 450px)"]: {
            width: `100%`,
            margin: `20px 0`,
            height: `40%`,
            paddingTop: `20px`
        },
    },
    formInput: {
        width: `85%`,
    },
    findButton: {
        backgroundColor: `#00355F`,
        borderRadius: `20px`,
        color: `#FFFFFF`,
        fontWeight: `700`,
        padding: `20px 10px`,
        width: `55%`,
        margin: `20px auto`,
        cursor: `pointer`
    }

}));

export default headerStyles;
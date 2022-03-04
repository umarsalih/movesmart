import { makeStyles } from "@material-ui/core";

const infoAreaStyles = makeStyles((theme) => ({
    cardGrid: {
        padding: `20px 0`,
        display: `flex`,
        backgroundColor: `#ECECEC`,
        margin: `3em auto`,
        ["@media (max-width: 450px)"]: {
            margin: `30px 0`
        }
    },
    card: {
        height: `100%`,
        display: `flex`,
        flexDirection: `column`,
        backgroundColor: `#ffffff`,
    },
    cardContent: {
        flexGrow: 1,
    },
    bigContainer: {
        marginTop: `2.5em`
    },
    cardHolder: {
        margin: `10px`,
        backgroundColor: `#ECECEC`
    }
}));

export default infoAreaStyles
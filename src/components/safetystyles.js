import { makeStyles } from "@material-ui/core";

const safetyStyles = makeStyles((theme) => ({
    safetyContainer: {
        backgroundColor: `#00355F`,
        padding: `3.5rem 4%`,
    },
    safetyHeading1: {
        color: `#ffffff`,
        marginTop: `0`,
        fontSize: `2em`
    },
    safetyHeading2: {
        color: `#ffffff`,
        fontSize: `1.5em`,
    },
    learnMoreBtn: {
        padding: `1.5em 3em`,
        fontSize: `1.2em`,
        cursor: `pointer`
    },
    link: {
        textDecoration: `none`,
        color: `black`
    }
}))

export default safetyStyles;
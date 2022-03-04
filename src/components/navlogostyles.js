import { makeStyles } from "@material-ui/core";

const navlogoStyles = makeStyles((theme) => ({
    logoImage: {
        width: `12%`,
        padding: `10px`,
        margin: `0 auto`,
        textAlign: `center`,
        ["@media (max-width: 450px)"]: {
            width: `40%`
        }
    },
    logoContainer: {
        display: `flex`,
        justifyContent: `center`
    }
}))

export default navlogoStyles;
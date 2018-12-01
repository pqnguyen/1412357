import pagePaths from "src/constants/pagePaths";
import App from "src/App";
import PersonalTweet from "src/containers/PersonalTweet/PersonalTweet"
import Home from "src/pages/Home/Home";

const routeMapping = [
    {
        "path": pagePaths.HOME,
        "component": Home
    },
    {
        "path": "/test",
        "component": PersonalTweet
    }
];

export default routeMapping;

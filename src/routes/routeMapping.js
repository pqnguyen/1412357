import pagePaths from "src/constants/pagePaths";
import Home from "src/pages/Home/Home";
import Profile from "src/pages/Profile/Profile";
import ProfileTweet from "src/pages/Profile/components/ProfileTweet/ProfileTweet";
import ProfileFollowing from "src/pages/Profile/components/ProfileFollowing/ProfileFollowing";
import ProfileFollower from "src/pages/Profile/components/ProfileFollower/ProfileFollower";
import Login from "src/pages/Login/Login";
import AboutUs from "../pages/AboutUs/AboutUs";

const routeMapping = [
    {
        "path": `${pagePaths.HOME}`,
        "component": Home
    },
    {
        "path": pagePaths.PROFILE,
        "component": Profile,
        "routes": [
            {
                path: `${pagePaths.PROFILE}/tweet`,
                component: ProfileTweet
            },
            {
                path: `${pagePaths.PROFILE}/following`,
                component: ProfileFollowing
            },
            {
                path: `${pagePaths.PROFILE}/follower`,
                component: ProfileFollower
            }
        ]
    },
    {
        "path": pagePaths.LOGIN,
        "component": Login,
    },
    {
        "path": pagePaths.ABOUT_US,
        "component": AboutUs,
    }
];

export default routeMapping;

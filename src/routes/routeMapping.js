import pagePaths from "src/constants/pagePaths";
import Home from "src/pages/Home/Home";
import Profile from "src/pages/Profile/Profile"
import ProfileTweet from "src/pages/Profile/components/ProfileTweet/ProfileTweet"
import ProfileFollowing from "src/pages/Profile/components/ProfileFollowing/ProfileFollowing"
import ProfileFollower from "src/pages/Profile/components/ProfileFollower/ProfileFollower"

const routeMapping = [
    {
        "path": "/home",
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
    }
];

export default routeMapping;

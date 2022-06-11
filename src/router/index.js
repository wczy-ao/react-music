import WanDiscover from "@/pages/discover"
import WanFriend from "@/pages/friend"
import WanMine from "@/pages/mine"


const routes = [
    {
        path: "/",
        exact: true,
        component: WanDiscover
    },
    {
        path: "/mine",
        exact: true,
        component: WanMine
    },
    {
        path: "/friend",
        exact: true,
        component: WanFriend
    },
]

export default routes
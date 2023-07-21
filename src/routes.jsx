import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Courses from "./pages/courses/courses"

const routes = [
    {path: "/",element:<Home/>},
    {path: "/shop",element:<Shop/>},
    {path: "/courses",element:<Courses/>},
]
export default routes
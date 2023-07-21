import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Courses from "./pages/courses/courses"
import CourseInfo from "./pages/CourseInfo/CourseInfo"

const routes = [
    {path: "/",element:<Home/>},
    {path: "/shop",element:<Shop/>},
    {path: "/courses/",children:[
        {path: "", element:<Courses/>},
        {path: "course-info/:courseName", element:<CourseInfo/>},
    ],},
]
export default routes
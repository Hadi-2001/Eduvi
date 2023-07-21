import Home from "./pages/Home/Home"
import Shop from "./pages/Shop/Shop"
import Courses from "./pages/courses/courses"
import CourseInfo from "./pages/CourseInfo/CourseInfo"
import Mentors from "./pages/Mentors/Mentors"
import MentorInformation from "./pages/MentorInformation/MentorInformation"
import Pricing from "./pages/Pricing/Pricing"

const routes = [
    {path: "/",element:<Home/>},
    {path: "/shop",element:<Shop/>},
    {path: "/courses/",children:[
        {path: "", element:<Courses/>},
        {path: "course-info/:courseName", element:<CourseInfo/>},
    ],
    },
    {path: "/mentors/",children:[
        {path: "", element:<Mentors/>},
        {path: "mentor-information/:mentorName", element:<MentorInformation/>},
    ]},
    {path: "/pricing",element:<Pricing/>},

]
export default routes
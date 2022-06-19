import Home from "../components/Home/Home";
import About from "../components/About/About";
import Projects from "../components/Projects/Projects";
import Resume from "../components/Resume/ResumeNew";
import Login from "../components/Login";
import CodeEditor from "../components/CodeEditor";

export const routers = [
    {
        "title": "Home",
        "path": "/",
        "element": (<Home/>),
        "private": false
    },
    {
        "title": "About",
        "path": "/about",
        "element": (<About/>),
        "private": false
    },
    {
        "title": "Projects",
        "path": "/project",
        "element": (<Projects/>),
        "private": false
    },
    {
        "title": "Resume",
        "path": "/resume",
        "element": (<Resume/>),
        "private": false
    },
    {
        "title": "Login",
        "path": "/login",
        "element": (<Login/>),
        "private": false
    },
    {
        "title": "Editor",
        "path": "/code-editor",
        "element": (<CodeEditor/>),
        "private": false
    }
]

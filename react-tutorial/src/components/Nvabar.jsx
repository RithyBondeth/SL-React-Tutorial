import { Link } from "react-router-dom"

export default function Navbar() {

    const navbarLists = [
        {
            label: "useState",
            link: "/",
        },
        {
            label: "useEffect",
            link: "/use_effect",
        },
        {
            label: "useRef",
            link: "/use_ref"
        },
        {
            label: "useMemo",
            link: "/use_memo"
        },
        {
            label: "useCallback",
            link: "/use_callback"
        },
        {
            label: "useContext",
            link: "/use_context"
        },
        {
            label: "useReducer",
            link: "/use_reducer"
        },
        {
            label: "useLayoutEffect",
            link: "/use_layouteffect"
        },
        {
            label: "CustomHook",
            link: "/customhook"
        },
        {
            label: "Fetch",
            link: "/datafetching/fetch_method/user_page"
        },
        {
            label: "SWR",
            link: "/datafetching/swr_library/post_page"
        },
        {
            label: "SWR More",
            link: "/datafetching/swr_library/users/users_page"
        }
    ]

    return (
        <nav className="w-full flex flex-wrap px-2 py-4 bg-blue-400">
           {navbarLists.map((e) => ( 
                <Link to={e.link} key={e.label} className="text-sm mr-2 my-2 p-2 cursor-pointer rounded-md bg-white">{e.label}</Link>
           ))}
        </nav> 
    )
}
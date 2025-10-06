import ContextContact from "./components/ContextContact";
import ContextFooter from "./components/ContextFooter";
import ContextProfile from "./components/ContextProfile";

export default function UseContextPage() {
    return (
        <div className="absolute top-20 left-0 bottom-0 right-0 flex flex-col justify-center items-center">
            <ContextProfile/>
            <ContextFooter/>
        </div>
    )
}
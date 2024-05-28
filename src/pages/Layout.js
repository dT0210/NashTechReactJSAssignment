import Nav from "../components/Nav"
import AppRoutes from "../routes/AppRoutes";

const Layout = () => {
    return (
        <div className="h-[100vh]">
            <Nav/>
            <AppRoutes/>
        </div>
    )
};

export default Layout
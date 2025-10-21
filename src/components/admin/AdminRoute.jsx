import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const AdminRoute = ({ children }) => {
    const user = useSelector((state) => state.user.user);
    if (!user || !user.isAdmin) {
        return <Navigate to="/" replace />;
    }
    return children;
};

export default AdminRoute;

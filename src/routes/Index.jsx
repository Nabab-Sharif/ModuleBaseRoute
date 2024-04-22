import { createBrowserRouter } from "react-router-dom";
import home from "./Home";
import login from "./Login";
import registration from "./Registration";


const router = createBrowserRouter([registration, login, home]);

export default router;
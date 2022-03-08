import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddUser from "../component/AddUser";
import ListUser from "../component/ListUser";

const Router = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="*" element={<ListUser />} />
                    <Route path="/list" element={<ListUser />} />
                    <Route path="/addUser" element={<AddUser />} />
                    <Route path="/addUser/:id" element={<AddUser />} />
                </Routes>
            </BrowserRouter>
        </>
    );
};
export default Router;

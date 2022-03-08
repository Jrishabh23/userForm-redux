import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteUSER } from "./action";

const ListUser = () => {
    useSelector((list: any) => console.log(list["list"]));
    const userList: any = useSelector((list: any) => list["list"]);
    const dispatch = useDispatch();
    console.log({ userList });
    return (
        <>
            <div>
                <div>List of user</div>
                <Link to="/addUser">Add User</Link>
                <div>
                    {userList.map((item: any, index: any) => {
                        return (
                            <div className="todo-container" key={item.id}>
                                <p>{item.name}</p>
                                <p>
                                    <span
                                        className="action-button"
                                        onClick={() =>
                                            dispatch(deleteUSER(item.id))
                                        }
                                    >
                                        Delete
                                    </span>
                                    <span className="action-button">
                                        <Link to={`/addUser/${item.id}`}>
                                            Edit
                                        </Link>
                                    </span>
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};
export default ListUser;

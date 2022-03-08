import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addUSER } from "./action";

const AddUser = () => {
    const [user, setUser] = useState({
        id: new Date().getTime(),
        name: "",
        email: "",
        gender: "",
    });

    const userList = useSelector((select: any) => select["list"]);
    const dispatch = useDispatch();
    const param = useParams();
    const navigate = useNavigate();

    /**
     * @desc check for update user
     */
    useEffect(() => {
        const id: any = param.id;
        if (!isNaN(id)) {
            const currentUser = userList.filter(
                (item: any, index: any) => item.id == id
            );
            if (currentUser.length > 0) {
                const { name, email, gender } = currentUser[0];
                setUser({
                    ...user,
                    id,
                    name,
                    email,
                    gender,
                });
            }
        }
    }, []);
    /**
     * @desc add value in Todo List
     */
    const updateCurrentuser = (e: any) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };
    /**
     * submit user
     */
    const submit = () => {
        if (user["name"] != "" && user["email"] != "") {
            dispatch(addUSER(user));
            navigate("/list");
        }
    };

    return (
        <>
            <div className="container">
                <Link to="/list"> TODO</Link>
                <div className="form-group">
                    <label htmlFor="name">name</label>
                    <input
                        type="text"
                        name="name"
                        value={user["name"]}
                        onChange={(e: any) => updateCurrentuser(e)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">email</label>
                    <input
                        type="text"
                        name="email"
                        value={user["email"]}
                        onChange={(e: any) => updateCurrentuser(e)}
                    />
                </div>
                <div className="formGroup">
                    <label>Gender</label>
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        checked={"male" == user["gender"]}
                        onChange={(e: any) => updateCurrentuser(e)}
                    />{" "}
                    Male
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        checked={"female" == user["gender"]}
                        onChange={(e: any) => updateCurrentuser(e)}
                    />{" "}
                    Female
                    <input
                        type="radio"
                        value="other"
                        name="gender"
                        checked={"other" == user["gender"]}
                        onChange={(e: any) => updateCurrentuser(e)}
                    />{" "}
                    Other
                </div>
                <div className="form-group">
                    <button onClick={() => submit()}>Submit</button>
                </div>
            </div>
        </>
    );
};
export default AddUser;

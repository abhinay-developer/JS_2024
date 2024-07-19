import { useState } from "react";

function CreateAccount() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mobileNumber, setMobileNumber] = useState(null);
    const [users, setUsers] = useState([]);

    const createAccount = (e) => { //CREATE THE USERS
        e.preventDefault(); //NO referesh
        // const form = { name:name, email:email, password:password, mobileNumber:mobileNumber };
        const form = { name, email, password, mobileNumber };
        setUsers(prev => [...prev, form]); //immutabailty
    }

    const handleDelete = (index) => { //DELETE  THE USERS //index 0
        setUsers(users.filter((_, i) => index !== i));////immutabailty
        // [ filter [user]
        //     {name:"sai",email:"sai@gmail.com"} //0
        // {name:"raj",email:"raj@gmail.com"}  //1
        // ] index
        //1
        // [{name:"raj",email:"raj@gmail.com"}]
        //users=  //setUsers( [{name:"raj",email:"raj@gmail.com"}])
        //[0,1,2,3,4]
        //[2,4]
    }

    const handleUpdate = (user) => {  //UPDATE THE USERS
        const { name, email, password, mobileNumber } = user;
        setName(name);
        setEmail(email);
        setPassword(password);
        setMobileNumber(mobileNumber);
    }
    return (
        <div>
            <form onSubmit={(e) => createAccount(e)}>
                <div>
                    <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div>
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <div>
                    <input type="number" placeholder="Mobile Number" value={mobileNumber} onChange={(e) => setMobileNumber(e.target.value)} />
                </div>
                <div>
                    <button type="submit">Create Account</button>
                </div>
            </form>

            <div>
                { //READ THE USERS
                    users && users.map((user, index) => <ul>
                        <li>Name:{user.name}</li>
                        <li>Email:{user.email}</li>
                        <li>Password:{user.password}</li>
                        <li>Mobile Number:{user.mobileNumber}</li>
                        <li><button type="button" onClick={() => handleDelete(index)}>Delete</button>
                            <button type="button" onClick={() => handleUpdate(user)}>Update</button></li>

                    </ul>)
                }
            </div>
        </div>
    )
}

export default CreateAccount;
import React from "react";
function Signup(){
    return (
        <div>
            <h1>SIGNUP</h1>
            <div>
                <label htmlFor="">username</label>
                <input type="text" />
            </div>
            <div>
                <label htmlFor="">password</label>
                <input type="password" />
            </div>
            <div>
                <label htmlFor="">confirm password</label>
                <input type="password" />
            </div>
        </div>
    );
}
export default Signup;
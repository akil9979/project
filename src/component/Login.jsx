import React from "react";

function Login() {
    return (
        <div className="flex flex flex-col justify-center  space-y-20 items-center  border border-black-500 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 min-h-screen">
           <div className="bg-white justify-center items-center p-6 bg-white rounded-lg shadow">
           <h1 className="font-bold text-3xl text-center">LOGIN</h1>
            <div className="flex flex-col ">
                <div className="mt-3">
                    <label htmlFor="">username</label>
                    <input className="m-2  border border-black-500" type="text" />
                </div>
                <div className="my-5">
                    <label htmlFor="">password</label>
                    <input  className="m-2  border border-black-500" type="password" />
                </div>
                <div className=" mx-auto mt-3">
                    <button className="bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-700">Submit</button>
                </div>
            </div>
           </div>

        </div>
    )
}
export default Login;
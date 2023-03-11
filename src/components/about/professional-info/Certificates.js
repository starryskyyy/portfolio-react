import React from 'react'

export default function Certificates() {

    return (
        <div className=" w-full h-full">
            <div className="border-solid border-b border-lines p-5"></div>
            <div className="text-secondary-1 text-base p-10">
                <div className="flex items-center pl-6 pb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="mr-2" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z" /><path d="M19 22H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v12h4v4a3 3 0 0 1-3 3zm-1-5v2a1 1 0 0 0 2 0v-2h-2zM6 7v2h8V7H6zm0 4v2h8v-2H6zm0 4v2h5v-2H6z" fill="rgba(96,123,150,1)" /></svg>
                    <a href={require("../../../assets/files/python.pdf")} download="python-certificate"><span className="text-white">python</span> {'//'} kaggle</a>
                </div>
            </div>
        </div>
    )
}

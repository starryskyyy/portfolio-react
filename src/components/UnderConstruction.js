import React from 'react'


class UnderConstruction extends React.Component {

    render() {
        return (
            <div className="w-full bg-primary-2 border-solid border border-lines rounded-md h-full w-full">
                <div className="flex flex-col h-full justify-between w-full">

                    <main className="w-full h-full flex items-center justify-center">
                        <div class="m-auto flex flex-col items-center justify-center">
                            <h1 class="text-5xl text-white font-bold  animate-pulse">
                                Coming Soon
                            </h1>
                            <p class="text-white text-lg ">
                                I'am working hard to bring you something amazing. Stay tuned!
                            </p>
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}


export default UnderConstruction;

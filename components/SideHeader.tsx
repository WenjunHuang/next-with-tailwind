import React, {ComponentProps, useState} from 'react'
import classNames from "classnames"

const SideHeader: React.FC<ComponentProps<any>> = (props: ComponentProps<any>) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <header className="bg-gray-900 sm:flex sm:items-center sm:justify-between xl:bg-white">
            <div className="flex justify-between px-4 py-3 xl:w-72 xl:bg-gray-900 xl:justify-center">
                <div>
                    <img className="h-8 w-auto" src="/img/logo.svg"/>
                </div>
                <div className="flex sm:hidden">
                    <button onClick={() => setIsOpen(!isOpen)}
                            className="px-2 text-gray-500 hover:text-white focus:outline-none focus:text-white ">
                        <svg className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 448 512">
                            {
                                isOpen ? <path
                                        d="M505.3 247.4l-192.5-48.1L264.6 6.7c-2.2-9-15-9-17.2 0l-48.1 192.6L6.7 247.4c-9 2.2-9 15 0 17.2l192.5 48.1 48.1 192.5c2.2 9 15 9 17.2 0l48.1-192.5 192.6-48.1c9-2.2 9-15 .1-17.2zm-352.4-69.5l19.9-5 5-19.9L109 97.9c-7.5-6-17.2 3.7-11.2 11.2l55.1 68.8zm206.2 156.2l-19.9 5-5 19.9 68.8 55.1c7.5 6 17.2-3.7 11.2-11.2l-55.1-68.8zm0-156.2l55.1-68.8c6-7.5-3.7-17.2-11.2-11.2l-68.8 55 5 19.9 19.9 5.1zM152.9 334.1l-55 68.8c-6 7.5 3.7 17.2 11.2 11.2l68.8-55.1-5-19.9-20-5z"/>
                                    : <path
                                        d="M442 114H6a6 6 0 0 1-6-6V84a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6zm0 160H6a6 6 0 0 1-6-6v-24a6 6 0 0 1 6-6h436a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6z"/>
                            }
                        </svg>
                    </button>
                </div>
            </div>
            <nav className={classNames("sm:flex sm:items-center", {"hidden": !isOpen, "block": isOpen})}>
                <div className="px-2 pt-2 pb-5 border-b border-gray-800 sm:flex sm:border-0 sm:py-0">
                    <a href="#" className="block py-1 px-3 rounded leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 xl:text-gray-900">List
                        your
                        property</a>
                    <a href="#"
                       className="mt-1 sm:mt-0 py-1 px-3 rounded block leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900">Tips</a>
                    <a href="#"
                       className="mt-1 sm:mt-0 py-1 px-3 rounded block leading-tight font-semibold text-white hover:bg-gray-800 sm:text-sm sm:px-2 sm:ml-2 xl:text-gray-900">Messages</a>
                </div>
                <div className="px-5 py-3 sm:py-0">
                    <div className="flex items-center">
                        <img className="h-10 w-10 object-cover rounded-full border-2 border-gray-600 sm:h-8 sm:w-8 xl:border-gray-300"
                             src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                             alt=""/>
                        <span className="ml-4 font-semibold text-gray-200 sm:hidden">Isla Schoger</span>
                    </div>
                    <div className="mt-5 sm:hidden">
                        <a href="#" className="block text-gray-400 hover:text-white">Account Settings</a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">Support</a>
                        <a href="#" className="mt-3 block text-gray-400 hover:text-white">Sign out</a>
                    </div>
                </div>
            </nav>
        </header>

    )
}

export default SideHeader

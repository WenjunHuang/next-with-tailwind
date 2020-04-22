import React, {ComponentProps, useState,useEffect} from 'react'
import classNames from 'classnames'

const DropDown: React.FC<ComponentProps<any>> = (props: ComponentProps<any>) => {
    const [isOpen, setIsOpen] = useState(false)
    useEffect(()=>{
        const handleEscape = (e:KeyboardEvent) => {
            if (e.key ==='Esc'||e.key === 'Escape')
                setIsOpen(false)
        }
        console.log("add listener")
        document.addEventListener('keydown',handleEscape)
        return ()=>{
            console.log("remove listener")
            document.removeEventListener('keydown',handleEscape)
        }
    })

    return (
        <div  {...props} className={classNames(props.className, "relative")}>
            <button onClick={() => {
                setIsOpen(!isOpen)
            }}
                    className="relative z-10 block h-8 w-8 rounded-full overflow-hidden focus:outline-none focus:border-white border-2 border-gray-600">
                <img className="h-full w-full object-cover"
                     src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=256&q=80"
                     alt="Your avatar"/>
            </button>
            {
                isOpen ?
                    <>
                        <button onClick={() => setIsOpen(false)}
                                tabIndex={-1}
                                className="fixed inset-0 bg-black opacity-50 cursor-default w-full h-full"></button>
                        <div className="absolute  right-0 bg-white rounded-lg py-2 w-48 mt-2 shadow-xl">
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Account
                                settings</a>
                            <a href="#"
                               className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Support</a>
                            <a href="#" className="block px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white">Sing
                                out</a>
                        </div>
                    </> : <></>
            }
        </div>
    )
}

export default DropDown
import React, {ComponentProps, FC} from 'react'
import classNames from "classnames"

const Contact: FC<ComponentProps<any>> = (props) => {
    const items = [
        {name: "Tighten Co.", kind: "Team", selected: false, checked: false},
        {name: "Taylor Otwell", kind: "Member", selected: true, checked: false},
        {name: "Adam Wathan", kind: "Member", selected: false, checked: false},
        {name: "Duke Street Studio Inc.", kind: "Team", selected: false, checked: true},
        {name: "Jeffrey Way", kind: "Member", selected: true, checked: false},
    ];

    return (
        <div className="h-screen w-screen bg-gray-400 pt-8">
            <div className="bg-white mx-auto rounded-lg shadow-xl overflow-hidden" style={{
                width: '24rem',
            }}>
                <header className="px-4 pt-6 px-3">Contacts</header>
                <div className="relative py-3 px-2">
                    <div className="absolute flex items-center inset-y-0 left-0 pl-3">
                        <svg className="w-5 h-5 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"></path>
                        </svg>
                    </div>
                    <input placeholder="Search teams or members"
                           className="block bg-gray-100 w-full rounded-md pr-2 py-2 pl-10 focus:outline-none"
                           type="text"/>
                </div>
                <ul className="px-2 py-2">
                    {
                        items.map(item => (
                            <li className={classNames("flex justify-between px-4 py-2 rounded-md hover:bg-indigo-100 hover:text-blue-500", item.checked ? " bg-indigo-100 text-blue-500" : "")}>
                                <div className="flex items-center">
                                    <div
                                        className={classNames("h-2 w-2 rounded-full", item.selected ? "bg-teal-500" : "bg-gray-500")}/>
                                    <div className="ml-3">{item.name}</div>
                                </div>
                                <span className="text-gray-400 text-xs">{item.kind}</span>
                            </li>
                        ))
                    }
                </ul>
                <div className="bg-gray-300 p-2 flex justify-end">
                    <button type="button" className="p-4 focus:outline-none"
                            style={{textShadow:'0 1px 2px rgba(0,0,0,0.20)'}}
                    >Cancel</button>
                    <button type="button"
                            className="ml-1 focus:outline-none py-1 px-6 rounded-md bg-blue-500 text-white">Invite
                    </button>
                </div>
            </div>
        </div>
    )
}
export default Contact;
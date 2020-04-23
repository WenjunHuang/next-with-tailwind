import React, {ComponentProps} from 'react'
import SideHeader from "../components/SideHeader"
import SearchFilter from "../components/SearchFilter"

const Workation: React.FC<ComponentProps<any>> = (props) => {
    return (<div id="app" className="min-h-screen bg-gray-200 antialiased">
        <SideHeader/>
        <SearchFilter />
        <main className="px-4 py-6">
            <h3 className="text-gray-900 text-xl">Los Angeles</h3>
            <p className="text-gray-600">Live like the starts in these luxurious Southern California estates.</p>
            <div className="mt-6">
                <div>
                    <img className="block h-64 w-full rounded-lg shadow-md object-cover object-center"
                         src="/img/chicago.jpg"/>
                </div>
                <div className="relative px-4 -mt-16">
                    <div className="bg-white rounded-lg px-4 py-4 shadow-lg">
                        <div className="flex">
                            <span
                                className="inline-block px-2 py-1 leading-none bg-teal-200 text-teal-800 font-semibold rounded-full uppercase tracking-wide text-xs">Plus</span>
                            <div className="ml-2 text-xs text-gray-600 font-semibold uppercase tracking-wide">
                                3 beds &bull; 2 paths
                            </div>
                        </div>
                        <h4 className="text-gray-900 font-semibold text-lg">Modern home in city center</h4>
                        <div className="mt-1">
                            <span className="text-gray-900">$1,400</span>
                            <span className="ml-1 text-sm text-gray-600">/wk</span>
                        </div>
                        <div className="mt-2 flex items-center text-sm text-gray-600">
                            <svg className="w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <svg className="w-4 h-4 text-teal-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                                 viewBox="0 0 576 512">
                                <path
                                    d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"/>
                            </svg>
                            <span className="ml-2">34 reviews</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>)
}

export default Workation
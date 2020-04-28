import React, {ComponentProps, useState} from 'react'
import classNames from "classnames"

const SearchFilter: React.FC<ComponentProps<any>> = (props: ComponentProps<any>) => {
    const [isOpen, setIsOpen] = useState(true)
    return (
        <section className="bg-gray-800">
            <div className="flex justify-between px-4 py-3">
                <div className="relative w-full max-w-sm">
                    <div className="absolute flex items-center inset-y-0 left-0 pl-3">
                        <svg className="w-6 h-6 fill-current text-gray-600" xmlns="http://www.w3.org/2000/svg"
                             viewBox="0 0 512 512">
                            <path
                                d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z"/>
                        </svg>
                    </div>
                    <input
                        className="block w-full bg-gray-900  focus:outline-none focus:bg-white focus:text-gray-900 text-white rounded-lg pl-10 pr-2 py-2"
                        placeholder="Search by keywords"/>
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={classNames("ml-4 inline-flex items-center bg-gray-700 focus:outline-none focus:shadow-outline rounded-lg  pl-3 pr-4", {
                        "bg-gray-900": isOpen,
                        "hover:bg-gray-600 shadow": !isOpen
                    })}>
                    <svg className="w-6 h-6 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 576 512">
                        <path
                            d="M480 320c-10.4 0-20.3 2.1-29.7 5.2 18.2-17.5 29.7-41.9 29.7-69.2 0-53-43-96-96-96-10.4 0-20.3 2.1-29.7 5.2 18.3-17.5 29.7-42 29.7-69.2 0-53-43-96-96-96s-96 43-96 96c0 27.2 11.4 51.7 29.7 69.2-9.4-3.1-19.2-5.2-29.7-5.2-53 0-96 43-96 96 0 27.2 11.4 51.7 29.7 69.2-9.4-3.1-19.2-5.2-29.7-5.2-53 0-96 43-96 96s43 96 96 96 96-43 96-96c0-27.2-11.4-51.7-29.7-69.2 9.4 3.1 19.2 5.2 29.7 5.2s20.3-2.1 29.7-5.2c-18.3 17.5-29.7 42-29.7 69.2 0 53 43 96 96 96s96-43 96-96c0-27.2-11.4-51.7-29.7-69.2 9.4 3.1 19.2 5.2 29.7 5.2s20.3-2.1 29.7-5.2c-18.3 17.5-29.7 42-29.7 69.2 0 53 43 96 96 96s96-43 96-96-43-96-96-96zM288 32c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm29.7 293.2c-9.4-3.1-19.3-5.2-29.7-5.2s-20.3 2.1-29.7 5.2c18.2-17.5 29.7-41.9 29.7-69.2s-11.4-51.7-29.7-69.2c9.4 3.1 19.2 5.2 29.7 5.2s20.3-2.1 29.7-5.2c-18.3 17.5-29.7 42-29.7 69.2s11.4 51.7 29.7 69.2zM96 480c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm96-160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm96 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm96-160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64zm96 160c-35.3 0-64-28.7-64-64s28.7-64 64-64 64 28.7 64 64-28.7 64-64 64z"/>
                    </svg>
                    <span className="ml-1 text-white font-medium">filters</span>
                </button>
            </div>
            {isOpen ? <form>
                <div  className="lg:flex">
                    <div className="px-4 py-4 border-t border-gray-900">
                        <div className="flex flex-wrap -mx-2">
                            <label className="block w-1/2 px-2 sm:w-1/4">
                                <span className="text-sm font-semibold text-gray-500">Bedrooms</span>
                                <select className="text-white mt-1 form-select block w-full">
                                    <option>4</option>
                                </select>
                            </label>
                            <label className="block w-1/2 px-2 sm:w-1/4">
                                <span className="text-sm font-semibold text-gray-500">Bathrooms</span>
                                <select className="text-white mt-1 form-select block w-full">
                                    <option>2</option>
                                </select>
                            </label>
                            <label className="block w-full mt-4  px-2 sm:mt-0 sm:w-1/2">
                                <span className="text-sm font-semibold text-gray-500">Price Range</span>
                                <select className="text-white mt-1 form-select block w-full">
                                    <option>Up to $2,000/wk</option>
                                </select>
                            </label>
                        </div>
                    </div>
                    <div className="px-4 py-4 border-t border-gray-900">
                        <span className="block text-sm font-semibold text-gray-500">Property Type</span>
                        <div className="sm:flex sm:-mx-2">
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-radio" type="radio" name="propertyType"
                                       value="house"/>
                                <span className="ml-2 text-white">House</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-radio" type="radio" name="propertyType"
                                       value="apartment"/>
                                <span className="ml-2 text-white">Apartment</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-radio" type="radio" name="propertyType"
                                       value="loft"/>
                                <span className="ml-2 text-white">Loft</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-radio" type="radio" name="propertyType"
                                       value="townhouse"/>
                                <span className="ml-2 text-white">Townhouse</span>
                            </label>
                        </div>

                    </div>
                    <div className="px-4 py-4 border-t border-gray-900">
                        <span className="block text-sm font-semibold text-gray-500">Amenities</span>
                        <div className="sm:flex sm:flex-wrap sm:-mx-2">
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="balcony"/>
                                <span className="ml-2 text-white">Balcony</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="pool"/>
                                <span className="ml-2 text-white">Pool</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="beach"/>
                                <span className="ml-2 text-white">Beach</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="petFriendly"/>
                                <span className="ml-2 text-white">Pet friendly</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="kidFriendly"/>
                                <span className="ml-2 text-white">Kid friendly</span>
                            </label>
                            <label className="mt-3 sm:w-1/4 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="parking"/>
                                <span className="ml-2 text-white">Parking</span>
                            </label>
                            <label className="mt-3 sm:w-1/2 sm:px-2 flex items-center">
                                <input className="bg-gray-900 form-checkbox" type="checkbox" name="airConditioning"/>
                                <span className="ml-2 text-white">Air conditioning</span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className="bg-gray-900 px-4 py-4">
                    <button
                        className="block w-full sm:w-auto sm:inline-block bg-indigo-500 hover:bg-indigo-400 font-semibold text-white px-4 py-2 rounded-lg">Update
                        Result
                    </button>
                </div>
            </form> : <></>
            }
        </section>
    )
}
export default SearchFilter
/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
*/

import { useState } from "react"


export default function Step3() {
    const [value, setValue] = useState([{ "id": 1, "value": "" }])

    const handleOnclick = () => {
        setValue([...value, { "id": 2, "value": "" }])
    }

    const handleDelete = () => {
        setValue(value.splice(0, 1))

    }


    return (
        <div>
            <button
                type="button"
                className=" rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 float-right"
                onClick={handleOnclick}
            >
                Add
            </button>
            <div className="mt-11">
                {value && value.map(() => {
                    return (
                        <div className="flex flex-row">
                            <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Category
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="enter category"
                                        aria-describedby="email-description"
                                    />
                                </div>
                            </div>
                            <div className="ml-5">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Tags
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                        placeholder="enter tags"
                                        aria-describedby="email-description"
                                    />
                                </div>

                            </div>

                            <div className="ml-5">
                                <button
                                    type="button"
                                    className="mt-9 rounded bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                    onClick={handleDelete}
                                >
                                    Delete
                                </button>
                            </div>


                        </div>

                    )
                })}
            </div>

        </div>

    )
}

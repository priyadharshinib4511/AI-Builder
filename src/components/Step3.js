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

        <div className="overflow-hidden rounded-lg bg-white shadow h-full">
            <div className="py-5 sm:p-6">
                <div className="">
                    <h3 className="text-base font-semibold leading-6 text-gray-900">Create Tags</h3>
                </div>
                <div className="mt-2 flex flex-col">
                    <div>
                        <button
                            type="button"
                            className=" rounded bg-indigo-600 px-2 py-1 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 float-right"
                            onClick={handleOnclick}
                        >
                            Add
                        </button>
                    </div>
                    <div className="mt-2">
                        {value && value.map(() => {
                            return (
                                <div className="flex flex-row mt-1 w-full">
                                    <div className="w-1/2">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Category
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder=""
                                                aria-describedby="email-description"
                                            />
                                        </div>
                                    </div>
                                    <div className="ml-5 w-1/2">
                                        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                            Tags
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                placeholder=""
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
            </div>
        </div>

    )
}

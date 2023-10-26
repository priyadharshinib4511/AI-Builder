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
export default function Step2() {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow h-full">
      <div className="py-5 sm:p-6">
        <div className="">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Choose Column</h3>
        </div>
        <div>
          <select
            id="location"
            name="location"
            className="mt-2 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-indigo-600 sm:text-sm sm:leading-6"
            defaultValue="Canada"
          >
            <option>Short Description</option>
            <option>Notes</option>
            <option>Description</option>
          </select>
        </div>
      </div>
    </div>
  )
}

import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/react/solid'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'



const stats = [
    { id: 1, name: 'Total Subscribers', stat: '71,897', icon: ArrowUpIcon, change: '122', changeType: 'increase' },
    { id: 2, name: 'Avg. Open Rate', stat: '58.16%', icon: ArrowUpIcon, change: '5.4%', changeType: 'increase' },
    { id: 3, name: 'Avg. Click Rate', stat: '24.57%', icon: ArrowUpIcon, change: '3.2%', changeType: 'decrease' },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const people = [
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' }
    // More people...
]


const statuses = {
    Paid: 'text-green-700 bg-green-50 ring-green-600/20',
    Withdraw: 'text-gray-600 bg-gray-50 ring-gray-500/10',
    Overdue: 'text-red-700 bg-red-50 ring-red-600/10',
}
const clients = [
    {
        id: 1,
        name: 'Tuple',
        imageUrl: 'https://tailwindui.com/img/logos/48x48/tuple.svg',
        lastInvoice: { date: 'December 13, 2022', dateTime: '2022-12-13', amount: '$2,000.00', status: 'Overdue' },
    }
]

export default function Outcome() {

    return (
        <div>
            <div className='flex flex-col mt-2'>

                <div>
                    <button
                        type="button"
                        className="float-right rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Upload
                    </button>
                </div>
                <div className='-mt-4 flex flex-row'>
                    <div className='w-9/12'>
                        <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                            {stats.map((item) => (
                                <div
                                    key={item.id}
                                    className="relative overflow-hidden rounded-lg bg-white px-4 pb-12 pt-5 shadow sm:px-6 sm:pt-6"
                                >
                                    <dt>
                                        <div className="absolute rounded-md bg-indigo-500 p-3">
                                            <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                        </div>
                                        <p className="ml-16 truncate text-sm font-medium text-gray-500">{item.name}</p>
                                    </dt>
                                    <dd className="ml-16 flex items-baseline pb-6 sm:pb-7">
                                        <p className="text-2xl font-semibold text-gray-900">{item.stat}</p>
                                        <p
                                            className={classNames(
                                                item.changeType === 'increase' ? 'text-green-600' : 'text-red-600',
                                                'ml-2 flex items-baseline text-sm font-semibold'
                                            )}
                                        >
                                            {item.changeType === 'increase' ? (
                                                <ArrowUpIcon className="h-5 w-5 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                                            ) : (
                                                <ArrowDownIcon className="h-5 w-5 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                                            )}

                                            <span className="sr-only"> {item.changeType === 'increase' ? 'Increased' : 'Decreased'} by </span>
                                            {item.change}
                                        </p>
                                        <div className="absolute inset-x-0 bottom-0 bg-gray-50 px-4 py-4 sm:px-6">
                                            <div className="text-sm">
                                                <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                                                    View all<span className="sr-only"> {item.name} stats</span>
                                                </a>
                                            </div>
                                        </div>
                                    </dd>
                                </div>
                            ))}
                        </dl>
                        <div className="">
                            <div className="mt-8 flow-root">
                                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                    <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                        <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
                                            <table className="min-w-full divide-y divide-gray-300">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                            Name
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Title
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Email
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Role
                                                        </th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-gray-200 bg-white">
                                                    {people.map((person) => (
                                                        <tr key={person.email}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                {person.name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.title}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.email}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{person.role}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='py-5 w-3/12'>
                        <div className='px-2 flex flex-col h-full'>

                            <ul role="list" className="h-1/2">
                                {clients.map((client) => (
                                    <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                            <img
                                                src={client.imageUrl}
                                                alt={client.name}
                                                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                                            />
                                            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                                            <Menu as="div" className="relative ml-auto">
                                                <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Open options</span>
                                                    <ArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-50' : '',
                                                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                    )}
                                                                >
                                                                    View<span className="sr-only">, {client.name}</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-50' : '',
                                                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                    )}
                                                                >
                                                                    Edit<span className="sr-only">, {client.name}</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">Last invoice</dt>
                                                <dd className="text-gray-700">
                                                    <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                                                </dd>
                                            </div>
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">Last invoice</dt>
                                                <dd className="text-gray-700">
                                                    <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                                                </dd>
                                            </div>
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">Amount</dt>
                                                <dd className="flex items-start gap-x-2">
                                                    <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                                                    <div
                                                        className={classNames(
                                                            statuses[client.lastInvoice.status],
                                                            'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                                        )}
                                                    >
                                                        {client.lastInvoice.status}
                                                    </div>
                                                </dd>
                                            </div>
                                        </dl>
                                    </li>
                                ))}
                            </ul>
                            <ul role="list" className="mt-5">
                                {clients.map((client) => (
                                    <li key={client.id} className="overflow-hidden rounded-xl border border-gray-200">
                                        <div className="flex items-center gap-x-4 border-b border-gray-900/5 bg-gray-50 p-6">
                                            <img
                                                src={client.imageUrl}
                                                alt={client.name}
                                                className="h-12 w-12 flex-none rounded-lg bg-white object-cover ring-1 ring-gray-900/10"
                                            />
                                            <div className="text-sm font-medium leading-6 text-gray-900">{client.name}</div>
                                            <Menu as="div" className="relative ml-auto">
                                                <Menu.Button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                                                    <span className="sr-only">Open options</span>
                                                    <ArrowDownIcon className="h-5 w-5" aria-hidden="true" />
                                                </Menu.Button>
                                                <Transition
                                                    as={Fragment}
                                                    enter="transition ease-out duration-100"
                                                    enterFrom="transform opacity-0 scale-95"
                                                    enterTo="transform opacity-100 scale-100"
                                                    leave="transition ease-in duration-75"
                                                    leaveFrom="transform opacity-100 scale-100"
                                                    leaveTo="transform opacity-0 scale-95"
                                                >
                                                    <Menu.Items className="absolute right-0 z-10 mt-0.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-50' : '',
                                                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                    )}
                                                                >
                                                                    View<span className="sr-only">, {client.name}</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                        <Menu.Item>
                                                            {({ active }) => (
                                                                <a
                                                                    href="#"
                                                                    className={classNames(
                                                                        active ? 'bg-gray-50' : '',
                                                                        'block px-3 py-1 text-sm leading-6 text-gray-900'
                                                                    )}
                                                                >
                                                                    Edit<span className="sr-only">, {client.name}</span>
                                                                </a>
                                                            )}
                                                        </Menu.Item>
                                                    </Menu.Items>
                                                </Transition>
                                            </Menu>
                                        </div>
                                        <dl className="-my-3 divide-y divide-gray-100 px-6 py-4 text-sm leading-6">
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">Last invoice</dt>
                                                <dd className="text-gray-700">
                                                    <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                                                </dd>
                                            </div>
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">Last invoice</dt>
                                                <dd className="text-gray-700">
                                                    <time dateTime={client.lastInvoice.dateTime}>{client.lastInvoice.date}</time>
                                                </dd>
                                            </div>
                                            <div className="flex justify-between gap-x-4 py-3">
                                                <dt className="text-gray-500">Amount</dt>
                                                <dd className="flex items-start gap-x-2">
                                                    <div className="font-medium text-gray-900">{client.lastInvoice.amount}</div>
                                                    <div
                                                        className={classNames(
                                                            statuses[client.lastInvoice.status],
                                                            'rounded-md py-1 px-2 text-xs font-medium ring-1 ring-inset'
                                                        )}
                                                    >
                                                        {client.lastInvoice.status}
                                                    </div>
                                                </dd>
                                            </div>
                                        </dl>
                                    </li>
                                ))}
                            </ul>



                        </div>

                    </div>

                </div>

            </div>




        </div>
    )
}
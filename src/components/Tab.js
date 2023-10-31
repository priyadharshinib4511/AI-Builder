import { CubeTransparentIcon, ChartSquareBarIcon, ArchiveIcon } from '@heroicons/react/solid'


const tabs = [
    { id: 1, name: 'Analyser', href: '#', icon: CubeTransparentIcon, current: false },
    { id: 2, name: 'Outcome', href: '#', icon: ChartSquareBarIcon, current: false },
    { id: 3, name: 'History', href: '#', icon: ArchiveIcon, current: true },
    { id: 4, name: 'Default', href: '#', icon:ArchiveIcon, current: true },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Tabs({ onTabClick, tabValue }) {


    return (
        <div>
            <div className="sm:hidden">
                <label htmlFor="tabs" className="sr-only">
                    Select a tab
                </label>
                {/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
                <select
                    id="tabs"
                    name="tabs"
                    className="block w-full rounded-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500"
                    defaultValue={tabs.find((tab) => tab.current).name}
                >
                    {tabs.map((tab) => (
                        <option key={tab.name} onClick={() => onTabClick(tab.id)}
                        >{tab.name}</option>
                    ))}
                </select>
            </div>
            <div className="hidden sm:block">
                <div className="border-b border-gray-200">
                    <nav className="-mb-px flex space-x-8" aria-label="Tabs">
                        {tabs.map((tab) => (
                            <a
                                key={tab.name}
                                href={tab.href}
                                onClick={() => onTabClick(tab.id)}
                                className={classNames(
                                    tabValue === tab.id
                                        ? 'border-indigo-500 text-indigo-600'
                                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700',
                                    'group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium'
                                )}
                                aria-current={tab.current ? 'page' : undefined}
                            >
                                <tab.icon
                                    className={classNames(
                                        tabValue === tab.id ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500',
                                        '-ml-0.5 mr-2 h-5 w-5'
                                    )}
                                    aria-hidden="true"
                                />
                                <span>{tab.name}</span>
                            </a>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    )
}

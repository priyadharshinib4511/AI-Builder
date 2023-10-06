export default function Stepper({onStepClick}) {

    return (
        <nav aria-label="Progress">
            <ol role="list" class="overflow-hidden">
                <li class="relative pb-10">
                    <div class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-indigo-600" aria-hidden="true"></div>
                    <a href="#" class="group relative flex items-start" onClick={() => onStepClick(1)}>
                        <span class="flex h-9 items-center" >
                            <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 group-hover:bg-indigo-800">
                                <svg class="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                    <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
                                </svg>
                            </span>
                        </span>
                        <span class="ml-4 flex min-w-0 flex-col">
                            <span class="text-sm font-medium">Upload File</span>
                            <span class="text-sm text-gray-500">Upload all the incident details in .xlsx file</span>
                        </span>
                    </a>
                </li>
                <li class="relative pb-10">
                    <div class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
                    <a href="#" class="group relative flex items-start" aria-current="step" onClick={() => onStepClick(2)}>
                        <span class="flex h-9 items-center" aria-hidden="true">
                            <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white">
                                <span class="h-2.5 w-2.5 rounded-full bg-indigo-600"></span>
                            </span>
                        </span>
                        <span class="ml-4 flex min-w-0 flex-col">
                            <span class="text-sm font-medium text-indigo-600">Choose Column</span>
                            <span class="text-sm text-gray-500">Choose absolute column to classify the incident tickets</span>
                        </span>
                    </a>
                </li>
                <li class="relative pb-10">
                    <div class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
                    <a href="#" class="group relative flex items-start" onClick={() => onStepClick(3)}>
                        <span class="flex h-9 items-center" aria-hidden="true">
                            <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
                            </span>
                        </span>
                        <span class="ml-4 flex min-w-0 flex-col">
                            <span class="text-sm font-medium text-gray-500">Create Tags</span>
                            <span class="text-sm text-gray-500">Enter Tags and the classifying attributes of these tags.</span>
                        </span>
                    </a>
                </li>
                <li class="relative pb-10">
                    <div class="absolute left-4 top-4 -ml-px mt-0.5 h-full w-0.5 bg-gray-300" aria-hidden="true"></div>
                    <a href="#" class="group relative flex items-start" onClick={() => onStepClick(4)}>
                        <span class="flex h-9 items-center" aria-hidden="true">
                            <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
                            </span>
                        </span>
                        <span class="ml-4 flex min-w-0 flex-col">
                            <span class="text-sm font-medium text-gray-500">Preview Model</span>
                            <span class="text-sm text-gray-500">Verify If the classification is appropriate</span>
                        </span>
                    </a>
                </li>
                <li class="relative">
                    <a href="#" class="group relative flex items-start" onClick={() => onStepClick(5)}>
                        <span class="flex h-9 items-center" aria-hidden="true">
                            <span class="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400">
                                <span class="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-gray-300"></span>
                            </span>
                        </span>
                        <span class="ml-4 flex min-w-0 flex-col">
                            <span class="text-sm font-medium text-gray-500">Result</span>
                            <span class="text-sm text-gray-500">Model Result</span>
                        </span>
                    </a>
                </li>
            </ol>
        </nav>

    )
}
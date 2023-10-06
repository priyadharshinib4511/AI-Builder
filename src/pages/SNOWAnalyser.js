import { Fragment, useEffect, useState } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import Sidebar from '../components/Topbar'
import Stepper from '../components/Stepper'
import Step1 from '../components/Step1'

import Step2 from '../components/Step2'

import Step3 from '../components/Step3'
import Step4 from '../components/Step4'

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}
const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
  { name: 'Reports', href: '#', current: false },
]
const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {

  const [step, setStep] = useState(1)

  const onStepClick = (setValue) => {
    setStep(setValue)
  }

  useEffect(() => {

  }, [step])


  console.log("stepppp", step)


  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}

      <div className="min-h-full">
        <Sidebar onStepClick={onStepClick} />
        <header className="bg-white shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-gray-900">SNOW Analyser</h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2">
              <div>
                <Stepper onStepClick={onStepClick} />
              </div>
              <div>
                {(() => {
                  switch (step) {
                    case 1:
                      return <Step1 />
                    case 2:
                      return <Step2 />
                    case 3:
                      return <Step3 />
                    case 4:
                      return <div className='w-max'><Step4 /></div>;break;
                    default:
                      return null
                  }
                })()}
              </div>


            </div>

          </div>
        </main>
      </div>
    </>
  )
}

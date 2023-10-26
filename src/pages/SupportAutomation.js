import { useEffect, useState } from 'react'
import Tabs from '../components/Tab'
import AIBuilder from '../components/AIBuilder'

export default function SupportAutomation() {

  const [tab, setTab] = useState(1)


  const onTabClick = (setValue) => {
    setTab(setValue)
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className="mx-auto max-w-full sm:px-6 lg:px-8">
        <Tabs onTabClick={onTabClick} tabValue={tab} />
        <main>
          {(() => {
            switch (tab) {
              case 1:
                return <AIBuilder />
              case 2:
                return <></>
              case 3:
                return <></>
              default:
                return null
            }
          })()}
        </main>


      </div>


    </>
  )
}

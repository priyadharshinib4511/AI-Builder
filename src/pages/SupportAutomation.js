import { useEffect, useState } from 'react'
import Tabs from '../components/Tab'
import AIBuilder from '../components/AIBuilder'
import Outcome from '../components/Outcome'
import History from '../components/History'

export default function SupportAutomation() {

  const [tab, setTab] = useState(1)


  const onTabClick = (setValue) => {
    setTab(setValue)
  }

  useEffect(() => {

  }, [])

  return (
    <>
      <div className="max-w-full sm:px-6 lg:px-8">
        <Tabs onTabClick={onTabClick} tabValue={tab} />
        <main>
          {(() => {
            switch (tab) {
              case 1:
                return <AIBuilder />
              case 2:
                return <Outcome />
              case 3:
                return <History />
              default:
                return null
            }
          })()}
        </main>


      </div>


    </>
  )
}

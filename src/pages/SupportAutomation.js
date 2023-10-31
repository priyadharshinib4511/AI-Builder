import { useEffect, useState } from 'react'
import Tabs from '../components/Tab'
import Analyser from '../components/Analyser'
import Outcome from '../components/Outcome'
import History from '../components/History'
import Default from '../components/Default'

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
                return <Analyser />
              case 2:
                return <Default />
              case 3:
                return <Outcome />
              case 4:
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

import axios from 'axios';
import * as React from 'react';
import { Tab,TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AgentHistTable from 'src/components/agentTable/AgentHistTable';
import AgentTable from 'src/components/agentTable/AgentTable';
import Loading from 'src/components/loading/Loading';

const Admin = ():JSX.Element => {

  const [agents, setAgentData] = React.useState({agentList: [], taskHistorie: [{agent: '', time: ''}]});
  const [caseStatus, setCaseStatus] = React.useState({caseAdded: '0', caseSize: '0'})
  const [message, setMessage] = React.useState('')
  const [isLoading, setLoading] = React.useState(true)
  const [isLoadingAddedCases, setLoadingAddedCases] = React.useState(false)

  React.useEffect(() : void  =>  {
    caseInfosData();
  },[]);

  const crawlAgentData = () : void => {
    setLoading(true)
    axios.get(`http://localhost:8080/mas`)
    .then(res => {
      const taskHistObj = res.data.dataStorage.metaData.taskHistorie
      const taskHistArray = []
      console.log(res.data)
      for(const i in taskHistObj) {
        if (taskHistObj.hasOwnProperty(i)) {

          taskHistArray.push({agent: taskHistObj[i], time: i })
          // taskHistArray.push({i,taskHistObj[i]});
        }
      }
      setAgentData({...agents, agentList: res.data.dataStorage.metaData.agents, taskHistorie: taskHistArray })
      setLoading(false)
    })
  }

  const caseInfosData = () : void => {
    setLoading(true)
    axios.get(`http://localhost:8080/caseInfos`)
    .then(resp => {
      setCaseStatus({caseAdded: resp.data.addedCases , caseSize: resp.data.casesCount})
      console.log("TEST")
      setLoading(false)
    })
  }

  const sendApiLinkToAgent = (event: any): void => {
    event.preventDefault()
 
    setLoading(true)
    axios.get(`http://localhost:8080/scrap`).then(res => {
      console.log(res.data)
      if(!res.data.dataStorage.statusMessage.wasSuccesfull) {
        setMessage('Die Datenbank wird jetzt mit Fällen befüllt.')
        setTimeout(() => {
          setMessage('Die Datenbank wurde erfolgreich mit Fälle befüllt')
        }, 30000)
      }
    })
  }



  return(
    <div className="container">
      <Tabs>
        <TabList>
          <Tab>Agenten Infos</Tab>
          <Tab>Crawl</Tab>
        </TabList>
        <TabPanel>
          <div className="admin-heading-container">
            <h1>Anzahl der Fälle: {caseStatus.caseAdded}</h1>
            <br />
            <h1>Liste der Agenten</h1>
            <button onClick={crawlAgentData}>Listen aktualisieren</button>
          </div>
          {isLoading ? <Loading /> : <AgentTable agents={agents.agentList} />}
          <div className="admin-heading-container">
            <h1>Agenten Task Historie</h1>
          </div>
          {isLoading ? <Loading /> : <AgentHistTable agents={agents.taskHistorie} />}
        </TabPanel>
        <TabPanel>
          <div>
          <h1>Starte das Crwaling</h1>
            <form onSubmit={sendApiLinkToAgent}>
              <button type="submit">Link an Agenten senden</button>
            </form>
          </div>
          <div>
            <h1>Informationen:</h1>
            {isLoading ? <div> <h2 className="">{message}</h2>  <Loading/> </div>: 
            <div>
              <h2 className="">Die Datenbank wurde erfolgreich befüllt</h2>
              <button onClick={caseInfosData}>Listen aktualisieren</button>
            </div>}
            {<h2 className="">Cases Added: {caseStatus.caseAdded}<br /> Cases in casebase: {caseStatus.caseSize}</h2>}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Admin





// else {
//   setStatus(true)
//   setMessage(res.data.dataStorage.statusMessage.message)
//   setLoadingAddedCases(true)
//   setTimeout(() => {
//     axios.get(`http://localhost:8080/caseInfos`).then(resCasesInfos => {
//       console.log(resCasesInfos.data)
//       setAgentData({...agents, caseCount: resCasesInfos.data.casesCount, addedCases: resCasesInfos.data.addedCases})

//       setLoadingAddedCases(false)
//     })
//   }, 20000)
// }
// setLoading(false)
// })
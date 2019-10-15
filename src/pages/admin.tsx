import axios from 'axios';
import * as React from 'react';
import { Tab,TabList, TabPanel, Tabs } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import AgentHistTable from 'src/components/agentTable/AgentHistTable';
import AgentTable from 'src/components/agentTable/AgentTable';
import Loading from 'src/components/loading/Loading';

const Admin = ():JSX.Element => {

  const [agents, setAgentData] = React.useState({agentList: [], taskHistorie: [{agent: '', time: ''}], caseCount: '0', addedCases: ''});
  const [status, setStatus] = React.useState(true)
  const [message, setMessage] = React.useState('')
  const [isLoading, setLoading] = React.useState(true)
  const [isLoadingAddedCases, setLoadingAddedCases] = React.useState(false)

  React.useEffect(() : void  =>  {
    crawlAgentData();
  },[]);

  const crawlAgentData = () : void => {
    setLoading(true)
    axios.get(`http://localhost:8080/mas`)
    .then(res => {
      const taskHistObj = res.data.dataStorage.metaData.taskHistorie
      const cases = res.data.dataStorage.casesCount
      const taskHistArray = []
      console.log(res.data)
      for(const i in taskHistObj) {
        if (taskHistObj.hasOwnProperty(i)) {

          taskHistArray.push({agent: taskHistObj[i], time: i })
          // taskHistArray.push({i,taskHistObj[i]});
        }
      }
      setAgentData({...agents, caseCount: cases, agentList: res.data.dataStorage.metaData.agents, taskHistorie: taskHistArray })
      setLoading(false)
    })
  }

  const sendApiLinkToAgent = (event: any): void => {
    event.preventDefault()
    console.log("LOKOOO SQUAD");
    console.log(event.target.sony.type === 'checkbox' ? event.target.sony.checked : event.target.sony.value);
    console.log("LOKOOO SQUAD");
    
    setLoading(true)
    axios.get(`http://localhost:8080/scrap`, {
      params: {
        apple: event.target.apple.type === 'checkbox' ? event.target.apple.checked : event.target.apple.value,
        asus: event.target.asus.type === 'checkbox' ? event.target.asus.checked : event.target.asus.value,
        htc: event.target.htc.type === 'checkbox' ? event.target.htc.checked : event.target.htc.value,
        lg: event.target.lg.type === 'checkbox' ? event.target.lg.checked : event.target.lg.value,
        motorola: event.target.motorola.type === 'checkbox' ? event.target.motorola.checked : event.target.motorola.value,
        nokia: event.target.nokia.type === 'checkbox' ? event.target.nokia.checked : event.target.nokia.value,
        oneplus: event.target.oneplus.type === 'checkbox' ? event.target.oneplus.checked : event.target.oneplus.value,
        samsung: event.target.samsung.type === 'checkbox' ? event.target.samsung.checked : event.target.samsung.value,
        sony: event.target.sony.type === 'checkbox' ? event.target.sony.checked : event.target.sony.value,
        url: event.target.link.value,
        zte: event.target.zte.type === 'checkbox' ? event.target.zte.checked : event.target.zte.value,
      }
    }).then(res => {
      console.log(res.data)
      if(!res.data.dataStorage.statusMessage.wasSuccesfull) {
        setStatus(false)
        setMessage('Ungültier Link, der Agent konnte keine Fälle aus diesem Link bauen.')
      }
      else {
        setStatus(true)
        setMessage(res.data.dataStorage.statusMessage.message)
        setLoadingAddedCases(true)
        setTimeout(() => {
          axios.get(`http://localhost:8080/caseInfos`).then(resCasesInfos => {
            console.log(resCasesInfos.data)
            setAgentData({...agents, caseCount: resCasesInfos.data.casesCount, addedCases: resCasesInfos.data.addedCases})

            setLoadingAddedCases(false)
          })
        }, 10000)
      }
      setLoading(false)
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
            <h1>Anzahl der Fälle: {agents.caseCount}</h1>
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
          <h1>Link zum Crawln eingeben</h1>
            <form onSubmit={sendApiLinkToAgent}>
              <label>Link</label>
              <br />
              <input type="text" name="link" />
              <br />
              <br />
              <br />
              <h1>Wähle Sie Marken aus nach den nicht gecrawlt werden soll</h1>
              <input type="checkbox" name="sony" value="sony" />Sony
              <input type="checkbox" name="zte" value="zte" />ZTE
              <input type="checkbox" name="asus" value="asus" />Asus
              <input type="checkbox" name="apple" value="apple" />Apple
              <input type="checkbox" name="oneplus" value="oneplus" />onePlus
              <input type="checkbox" name="htc" value="htc" />HTC
              <input type="checkbox" name="samsung" value="samsung" />Samsung
              <input type="checkbox" name="lg" value="lg" />LG
              <input type="checkbox" name="motorola" value="motorola" />Motorola
              <input type="checkbox" name="nokia" value="nokia" />Nokia
              <br />
              <br />
              <br />
              <button type="submit">Link an Agenten senden</button>
            </form>
          </div>
          <div>
            <h1>Informationen:</h1>
            {isLoading ? <Loading /> : <h2 className={status ? "green" : "red"}>{message}</h2> }
            {isLoadingAddedCases ? <Loading /> : <h2 className={status ? "green" : "red"}>Cases Added: {agents.addedCases}<br /> Cases in casebase: {agents.caseCount}</h2>}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  )
}

export default Admin
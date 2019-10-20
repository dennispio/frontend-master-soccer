import axios from 'axios';
import * as React from 'react';
import { Tab,TabList, TabPanel, Tabs } from 'react-tabs';
import Loading from './../components/loading/Loading';
import FormIndPlayer from './formIndPlayer';
import Result from './result';
import ResultsPlayer from './resultPlayer';


// const API_URL = 'http://localhost:8080';


const Search = ():JSX.Element => {

  const [isLoading, setLoading] = React.useState(true)
  

  // const apicrawler = ({newApiState} : any) : void =>{
  //   setApiresult(newApiState)
  //   console.log(apiresult +"RICHTIG ÜBERGEBEN")
  // }

    const [results, setResults] = React.useState([]);
    const [resultPlayers, setResultPlayers] = React.useState([]);

  //   const handleIndSearch = (e : any) => {
  //     e.preventDefault();
  //     setLoading(true);

  //     const url = `http://localhost:8080/retrievalIndPlayer`+
  //     '?spielername=undefined'+
  //     '&manufacture='+e.target.manufacture.value+'&manufacturecheck='+e.target.manufacturecheck.value+
  //     '&price='+e.target.price.value+'&pricecheck='+e.target.pricecheck.value+
  //     '&weight='+e.target.weight.value+'&weightcheck='+e.target.weightcheck.value+
  //     '&size='+e.target.size.value+'&sizecheck='+e.target.sizecheck.value+
  //     '&displaytype='+e.target.displaytype.value+'&displaytypecheck='+e.target.displaytypecheck.value+
  //     '&cpu='+e.target.cpu.value+'&cpucheck='+e.target.cpucheck.value+
  //     '&ram='+e.target.ram.value +'&ramcheck='+e.target.ramcheck.value+
  //     '&akkukapa='+e.target.akkukapa.value+'&akkukapacheck='+e.target.akkukapacheck.value+
  //     '&kameramegapixel='+e.target.kameramegapixel.value+'&kameramegapixelcheck='+e.target.kameramegapixelcheck.value+
  //     '&frontkamera='+e.target.frontkamera.value+'&frontkameracheck='+e.target.frontkameracheck.value+
  //     '&memory='+e.target.memory.value+'&memorycheck='+e.target.memorycheck.value+
  //     '&memoryslot='+e.target.memoryslot.value+'&memoryslotcheck='+e.target.memoryslotcheck.value+
  //     '&nfc='+e.target.nfc.value+'&nfccheck='+e.target.nfccheck.value+
  //     '&thickness='+e.target.thickness.value+'&thicknesscheck='+e.target.thicknesscheck.value+
  //     '&anzahl='+e.target.anzahl.value;

  //       setTimeout(() => {
  //         axios.get(url)
  //         .then(res => {
  //           setTimeout(() => {
  //             axios.get(url).then( resp => {
  //               setResultPlayers(resp.data.dataStorage.retrievalphoneList)
  //             })
  //           }, 4000)
  //           setTimeout(() =>{
  //             setLoading(false)  
  //           }, 5000) 
  //         })})
  //     console.log(url);
  //     console.log(resultPlayers);
  // }


  const handlePlayerSearch = (e : any) => {
    e.preventDefault();
    setLoading(true);

    const url = `http://localhost:8080/retrievalPlayer`+
    '?spielername='+e.target.Spielername.value+
    '&anzahl='+e.target.anzahl.value;

    setTimeout(() => {
      axios.get(url).then(res => {
          setTimeout(() => {
            axios.get(url).then(resCases => {
              console.log(resCases.data)
              setResultPlayers(resCases.data.dataStorage.retrievalsoccerplayerList)
              setLoading(false)
            })
          }, 5000)
    })}, 2000)
    console.log(url);
    console.log("bin noch in der anfrage")
  }

  return(
    <div>
       <div className="container">
      <Tabs>
        <TabList>
          <Tab>Individuelle Spielersuche</Tab>
          <Tab>Spieleraustausch</Tab>
        </TabList>
        <TabPanel>
          <div className="admin-heading-container">
            <FormIndPlayer onChange = {handlePlayerSearch}/> 
            {isLoading ? <Loading />: 
      <ResultsPlayer resultPlayers={resultPlayers} />}
          </div>
        </TabPanel>
        <TabPanel>
          <div>
            <h1>Spieleraustausch</h1>
            <form onSubmit={handlePlayerSearch}>
            <div>
              <div style={{marginTop: "10px"}}>Für welchen Spieler suchst du eine alternative?</div>
              <label>
              <select name="Spielername">
                <option value="Axel Witsel">Axel Witsel</option>
                <option value="Marco Reus">Marco Reus</option>
                <option value="Thorgan Hazard">Thorgan Hazard</option>
                <option value="Nico Schulz">Nico Schulz</option>
                <option value="Achraf Hakimi">Achraf Hakimi</option>
                <option value="Roman Bürki">Roman Bürki</option>
                <option value="Marwin Hitz">Marwin Hitz</option>
                <option value="Manuel Akanji">Manuel Akanji</option>
                <option value="Mats Hummels">Mats Hummels</option>
                <option value="Lukasz Piszczek">Lukasz Piszczek</option>
                <option value="Marcel Schmelzer">Marcel Schmelzer</option>
                <option value="Dan-Axel Zagadou">Dan-Axel Zagadou</option>
                <option value="Julian Brandt">Julian Brandt</option>
                <option value="Jacob Bruun Larsen">Jacob Bruun Larsen</option>
                <option value="Mahmoud Dahoud">Mahmoud Dahoud</option>
                <option value="Thomas Delaney">Thomas Delaney</option>
                <option value="Raphael Guerreiro">Raphael Guerreiro</option>
                <option value="Jadon Sancho">Jadon Sancho</option>
                <option value="Julian Weigl">Julian Weigl</option>
                <option value="Paco Alcácer">Paco Alcácer</option>
                <option value="Mario Götze">Mario Götze</option>
              </select>
          </label>
        </div>
            <div>
              <div style={{marginTop: "10px"}}> 
                Anzahl der Spieler die zurück gegeben werden sollen.
              </div>  
              <input type="number" defaultValue='5' name="anzahl" />
            </div>
              <input type="submit" value="Submit" />
            </form>
          </div>
          {isLoading ? <Loading />: 
            <ResultsPlayer resultPlayers={resultPlayers} />}        
            </TabPanel>
      </Tabs>
    </div>
    
    </div>
    )
};

export default Search
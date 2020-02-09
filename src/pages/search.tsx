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

    const [resultPlayers, setResultPlayers] = React.useState([]);

    const handleIndSearch = (e : any) => {
        e.preventDefault();
        setLoading(true);
    
        const url = `http://localhost:8080/retrievalPlayer`+
        '?spielername=undefined'+
        '&spielerposition='+e.target.Spielerposition.value+
        '&overallKreierteGrosschancen='+e.target.OverallKreierteGrosschancen.value+
        '&overallPassquote='+e.target.OverallPassquote.value+
        '&overallTorschussVorlagen='+e.target.OverallTorschussvorlagen.value+
        '&overallTorschuesse='+e.target.OverallTorschuesse.value+
        '&overallSchussgenauigkeit='+e.target.OverallSchussgenauigkeit.value+
        '&overallZweikampfquote='+e.target.OverallZweikampfquote.value+
        '&overallAbgefangeneBaelle='+e.target.OverallAbgefangeneBaelle.value+
        '&overallAssists='+e.target.OverallAssists.value+
        '&overallBallEroberungen='+e.target.OverallBallEroberungen.value+
        '&overallBewertung='+e.target.Bewertung.value+
        '&overallGoals='+e.target.OverallGoals.value+
        '&overallFouls='+e.target.OverallFouls.value+
        '&overallGeklaerteBaelle='+e.target.OverallGeklaerteBaelle.value+
        '&overallxA='+e.target.OverallxA.value+
        '&overallxA90='+e.target.OverallxA90.value+
        '&overallDribblings='+e.target.OverallDribblings.value+
        '&overallxG='+e.target.OverallxG.value+
        '&overallxG90='+e.target.OverallxG90.value+
        '&overallSh90='+e.target.OverallSh90.value+
        '&overallEinsatzquote='+e.target.OverallEinsatzquote.value+
        '&overallLuftzweikampf='+e.target.OverallLuftzweikampf.value+
        '&overallBallverlust='+e.target.OverallBallverlust.value+
        '&alter='+e.target.Alter.value+
        '&overallBlockSchuss='+e.target.OverallBlockSchuss.value+
        '&overallKP90='+e.target.OverallKP90.value+
        '&overallTacklingquote='+e.target.OverallTacklingquote.value+
        '&transfermarktwert='+e.target.transfermarktwert.value+
        '&anzahl='+e.target.anzahl.value;
    
        const urlretrieval = `http://localhost:8080/mas`
    
        axios.get(url).then(res => {
            console.log(res.data.dataStorage.retrievalsoccerplayerList)
            setTimeout(() => {
              axios.get(urlretrieval).then(resCases => {
                console.log(resCases.data)
                setResultPlayers(resCases.data.dataStorage.retrievalsoccerplayerList)
                setLoading(false)
              })
          }, 5000)
        });
        console.log(url);
      }

  const handlePlayerSearch = (e : any) => {
    e.preventDefault();
    setLoading(true);

    const url = `http://localhost:8080/retrievalPlayer`+
    '?spielername='+e.target.Spielername.value+
    '&anzahl='+e.target.anzahl.value+
    '&spielertyp='+e.target.spielertyp.value;

    const urlretrieval = `http://localhost:8080/mas`
      axios.get(url).then(res => {
        console.log(res.data.dataStorage.retrievalsoccerplayerList)
        setTimeout(() => {
          axios.get(urlretrieval).then(resCases => {
            console.log(resCases.data)
            setResultPlayers(resCases.data.dataStorage.retrievalsoccerplayerList)
            setLoading(false)
          })
      }, 5000)
    });
    console.log(url);
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
            <FormIndPlayer onChange = {handleIndSearch}/> 
            {isLoading ? <Loading />: 
      <ResultsPlayer resultPlayers={resultPlayers} />}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="flex">
          <div>
            <h1>Spieleraustausch</h1>
            <form onSubmit={handlePlayerSearch}>
              <div style={{marginTop: "10px"}}>Für welchen Spieler suchst du eine alternative?</div>
              <label>
              <select name="Spielername">
                <option value="Axel Witsel">Axel Witsel</option>
                <option value="Marco Reus">Marco Reus</option>
                <option value="Thorgan Hazard">Thorgan Hazard</option>
                <option value="Nico Schulz">Nico Schulz</option>
                <option value="Achraf Hakimi">Achraf Hakimi</option>
                <option value="Marwin Hitz">Marwin Hitz</option>
                <option value="Manuel Akanji">Manuel Akanji</option>
                <option value="Mats Hummels">Mats Hummels</option>
                <option value="Lukasz Piszczek">Lukasz Piszczek</option>
                <option value="Marcel Schmelzer">Marcel Schmelzer</option>
                <option value="Dan-Axel Zagadou">Dan-Axel Zagadou</option>
                <option value="Julian Brandt">Julian Brandt</option>
                <option value="Mahmoud Dahoud">Mahmoud Dahoud</option>
                <option value="Thomas Delaney">Thomas Delaney</option>
                <option value="Raphael Guerreiro">Raphael Guerreiro</option>
                <option value="Jadon Sancho">Jadon Sancho</option>
                <option value="Julian Weigl">Julian Weigl</option>
                <option value="Mario Götze">Mario Götze</option>
                <option value="Erling Haaland">Erling Haaland</option>
              </select>
          </label>
          <div>
          <div>Welche Art Spielertyp suchst du als alternative?</div>
              <label className="padding">
                <input type="radio" value="identisch" name="spielertyp" defaultChecked={true}/>
                Identisch
              </label>
              <label className="padding">
                <input type="radio" value="defensiv" name="spielertyp"/>
                Defensiv
              </label>
              <label className="padding">
                <input type="radio" value="offensiv" name="spielertyp"/>
                Offensiv
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
            <div>
              {isLoading ? <Loading />: 
                <ResultsPlayer resultPlayers={resultPlayers} />}    
            </div>    
            </div>
            </TabPanel>
      </Tabs>
    </div>
    
    </div>
    )
};

export default Search
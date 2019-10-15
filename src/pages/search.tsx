import axios from 'axios';
import * as React from 'react';
import Loading from './../components/loading/Loading';
import Form from './form';
import Result from './result';

// const API_URL = 'http://localhost:8080';


const Search = ():JSX.Element => {

  const [apiresult, setApiresult] = React.useState([])
  const [isLoading, setLoading] = React.useState(true)
  

  // const apicrawler = ({newApiState} : any) : void =>{
  //   setApiresult(newApiState)
  //   console.log(apiresult +"RICHTIG ÜBERGEBEN")
  // }

    const [results, setResults] = React.useState([]);

    const handleSearch = (e : any) => {
      e.preventDefault();
      setLoading(true);

      const url = `http://localhost:8080/retrieval`+
      '?manufacture='+e.target.manufacture.value+'&manufacturecheck='+e.target.manufacturecheck.value+
      '&price='+e.target.price.value+'&pricecheck='+e.target.pricecheck.value+
      '&weight='+e.target.weight.value+'&weightcheck='+e.target.weightcheck.value+
      '&size='+e.target.size.value+'&sizecheck='+e.target.sizecheck.value+
      '&displaytype='+e.target.displaytype.value+'&displaytypecheck='+e.target.displaytypecheck.value+
      '&cpu='+e.target.cpu.value+'&cpucheck='+e.target.cpucheck.value+
      '&ram='+e.target.ram.value +'&ramcheck='+e.target.ramcheck.value+
      '&akkukapa='+e.target.akkukapa.value+'&akkukapacheck='+e.target.akkukapacheck.value+
      '&kameramegapixel='+e.target.kameramegapixel.value+'&kameramegapixelcheck='+e.target.kameramegapixelcheck.value+
      '&frontkamera='+e.target.frontkamera.value+'&frontkameracheck='+e.target.frontkameracheck.value+
      '&memory='+e.target.memory.value+'&memorycheck='+e.target.memorycheck.value+
      '&memoryslot='+e.target.memoryslot.value+'&memoryslotcheck='+e.target.memoryslotcheck.value+
      '&nfc='+e.target.nfc.value+'&nfccheck='+e.target.nfccheck.value+
      '&thickness='+e.target.thickness.value+'&thicknesscheck='+e.target.thicknesscheck.value+
      '&anzahl='+e.target.anzahl.value;

        setTimeout(() => {
          axios.get(url)
          .then(res => {
            setTimeout(() => {
              axios.get(url).then( resp => {
                setResults(resp.data.dataStorage.retrievalphoneList)
              })
            }, 4000)
            setTimeout(() =>{
              setLoading(false)  
            }, 5000) 
          })})
      console.log(url);
      console.log(results);
  }
  

  return(
    <div>
      <Form onChange = {handleSearch}/> 
      {isLoading ? <Loading />: <Result results={results} />}
    </div>
    )
};

export default Search
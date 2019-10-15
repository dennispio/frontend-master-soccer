import axios from 'axios';
import * as React from 'react';


interface IApiResults {
  results : (IApiResult)[]
}

interface IApiResult {
  sim: string;
  manufacture: string;
  model: string;
  resolution: string;
  price: string;
  weight: string;
  size: string;
  displaytype: string;
  cpu: string;
  ram: string;
  akkukapa: string;
  kameraMegapixel: string;
  frontkameraMegapixel: string;
  memoryslot: string;
  memory: string;
  nfc: string;
  thickness: string;
}

const Result = ({results} : IApiResults):JSX.Element => {
  
  return(
    <div className ="flex">
      <h3 className="mitte" >Resultate</h3>
      {results.map((result, key): JSX.Element => {
          return(
            <div className="mitte" key={key}>
            <table>
            <tbody>
              <tr>
                <th>Ähnlichkeit</th>
                <td>{result.sim}</td>
              </tr>  

                <tr>
                <th>Hersteller</th>
                <td>{result.manufacture}</td>
              </tr>   

                <tr>
                <th>Model</th>
                <td>{result.model}</td>
              </tr>   

                <tr>
                <th>Preis</th>
                <td>{result.price}</td>
              </tr>   

                 <tr>
                <th>Gewicht</th>
                <td>{result.weight}</td>
              </tr>   

                 <tr>
                <th>Größe</th>
                <td>{result.size}</td>
              </tr>   

                 <tr>
                <th>Displaytype</th>
                <td>{result.displaytype}</td>
              </tr>   

                 <tr>
                <th>CPU</th>
                <td>{result.cpu}</td>
              </tr>   

                 <tr>
                <th>RAM</th>
                <td>{result.ram}</td>
              </tr>    

                    <tr>
                <th>Dicke</th>
                <td>{result.thickness}</td>
              </tr>   

                 <tr>
                <th>Akkukapazität</th>
                <td>{result.akkukapa}</td>
              </tr>     
              <tr>
                <th>Frontkamera</th>
                <td>{result.frontkameraMegapixel}</td>
              </tr>  
              <tr>
                <th>Kamera</th>
                <td>{result.kameraMegapixel}</td>
              </tr>   

                 <tr>
                <th>Memoryslot</th>
                <td>{result.memoryslot}</td>
              </tr>    

                <tr>
                <th>Memory</th>
                <td>{result.memory}</td>
              </tr>     

                <tr>
                <th>NFC</th>
                {result.nfc === "1"? <td>true</td> : <td>false</td>}
              </tr>     

                <tr>
                <th>Thickness</th>
                <td>{result.thickness}</td>
              </tr>                
            </tbody>
          </table>    
          </div>  
          )
        })}
      
    </div>
    )
};

export default Result
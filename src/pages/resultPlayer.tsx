import axios from 'axios';
import * as React from 'react';


interface IApiResults {
  resultPlayers : (IApiResult)[]
}

interface IApiResult {
  similarity: string;
  name: string;
  overallAbgefangeneBaelle: string;
  overallAssists: string;
  overallBallEroberungen: string;
  overallBallverlust: string;
  overallBewertung: string;
  overallBlockSchuss: string;
  overallDribblings: string;
  overallEinsatzquote: string;
  overallFouls: string;
  overallGeklaerteBaelle: string;
  overallGoals: string;
  overallKPNEUN: string;
  overallkreierteGrosschancen: string;
  overallMinPlayed: string;
  overallPassquote: string;
  overallSchussgenauigkeit: string;
  overallSHNeun: string;
  overallTacklingQuote: string; memory: string;
  overallTorschussVorlagen: string;
  overallZweikampfquote: string;
  overallxA: string;
  overallxANEUN: string;
  overallxG: string;
  overallxGNEUN: string;
  position: string;
}

const ResultPlayer = ({resultPlayers} : IApiResults):JSX.Element => {
  React.useEffect(() => {
    // Update the document title using the browser API
    console.log(resultPlayers)
    console.log("bin geupdated")

  });

  return(
    <div className ="flex">
      <h3 className="mitte" >Resultate</h3>
      {resultPlayers.map((result, key): JSX.Element => {
          return(
            <div className="mitte" key={key}>
            <table>
            <tbody>
              <tr>
                <th>Ähnlichkeit</th>
                <td>{result.similarity}</td>
              </tr>  

                <tr>
                <th>Name</th>
                <td>{result.name}</td>
              </tr>   

                <tr>
                <th>overallAbgefangeneBaelle</th>
                <td>{result.overallAbgefangeneBaelle}</td>
              </tr>   

                 <tr>
                <th>overallAssists</th>
                <td>{result.overallAssists}</td>
              </tr>   

                 <tr>
                <th>overallBallEroberungen</th>
                <td>{result.overallBallEroberungen}</td>
              </tr>   

                 <tr>
                <th>overallBallverlust</th>
                <td>{result.overallBallverlust}</td>
              </tr>   

                 <tr>
                <th>overallBewertung</th>
                <td>{result.overallBewertung}</td>
              </tr>   

                 <tr>
                <th>overallBlockSchuss</th>
                <td>{result.overallBlockSchuss}</td>
              </tr>    

                    <tr>
                <th>overallDribblings</th>
                <td>{result.overallDribblings}</td>
              </tr>   

                 <tr>
                <th>overallEinsatzquote</th>
                <td>{result.overallEinsatzquote}</td>
              </tr>     
                
              <tr>
                <th>overallFouls</th>
                <td>{result.overallFouls}</td>
              </tr>   

                 <tr>
                <th>overallGeklaerteBaelle</th>
                <td>{result.overallGeklaerteBaelle}</td>
              </tr>    

                <tr>
                <th>overallGoals</th>
                <td>{result.overallGoals}</td>
              </tr>     

                <tr>
                <th>overallKPNEUN</th>
                <td>{result.overallKPNEUN}</td>
              </tr>     

                <tr>
                <th>overallkreierteGrosschancen</th>
                <td>{result.overallkreierteGrosschancen}</td>
              </tr> 

                <tr>
                <th>overallMinPlayed</th>
                <td>{result.overallMinPlayed}</td>
              </tr> 

                <tr>
                <th>overallPassquote</th>
                <td>{result.overallPassquote}</td>
              </tr> 

                <tr>
                <th>overallSchussgenauigkeit</th>
                <td>{result.overallSchussgenauigkeit}</td>
              </tr> 

                <tr>
                <th>overallSH90</th>
                <td>{result.overallSHNeun}</td>
              </tr> 

                <tr>
                <th>overallSchussgenauigkeit</th>
                <td>{result.overallSchussgenauigkeit}</td>
              </tr> 

                <tr>
                <th>overallTacklingQuote</th>
                <td>{result.overallTacklingQuote}</td>
              </tr> 

                <tr>
                <th>overallTorschussVorlagen</th>
                <td>{result.overallTorschussVorlagen}</td>
              </tr> 

                <tr>
                <th>overallZweikampfquote</th>
                <td>{result.overallZweikampfquote}</td>
              </tr> 

                <tr>
                <th>overallxA</th>
                <td>{result.overallxA}</td>
              </tr> 

              <tr>
                <th>overallxA90</th>
                <td>{result.overallxANEUN}</td>
              </tr>   

              <tr>
                <th>overallxG</th>
                <td>{result.overallxG}</td>
              </tr>   

              <tr>
                <th>overallxG90</th>
                <td>{result.overallxGNEUN}</td>
              </tr>   

              <tr>
                <th>position</th>
                <td>{result.position}</td>
              </tr>  


            </tbody>
          </table>    
          </div>  
          )
        })}
      
    </div>
    )
};

export default ResultPlayer
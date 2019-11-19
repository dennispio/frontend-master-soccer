import axios from 'axios';
import * as React from 'react';


interface IApiResults {
  resultPlayers : (IApiResult)[]
}

interface IApiResult {
  similarity: string;
  alter: number;
  transfermarktwert: number;
  name: string;
  overallAbgefangeneBaelle: number;
  overallAssists: number;
  overallBallEroberungen: number;
  overallBallverlust: number;
  overallBewertung: number;
  overallBlockSchuss: number;
  overallDribblings: number;
  overallEinsatzquote: number;
  overallFouls: number;
  overallGeklaerteBaelle: number;
  overallGoals: number;
  overallKPNEUN: number;
  overallkreierteGrosschancen: number;
  overallMinPlayed: number;
  overallPassquote: number;
  overallSchussgenauigkeit: number;
  overallSHNeun: number;
  overallTacklingQuote: number;
  overallLuftkampfQuote: number;
  overallTorschussVorlagen: number;
  overallZweikampfquote: number;
  overallxA: number;
  overallxANEUN: number;
  overallxG: number;
  overallxGNEUN: number;
  position: number;
  overallTorschuesse: number;
  overallLuftzweikampf: number;
}

const ResultPlayer = ({resultPlayers} : IApiResults):JSX.Element => {
  
  React.useEffect(() => {
    // Update the document title using the browser API
    console.log(resultPlayers[0])
  });

  return(
    <div>
      <h2 >Resultate</h2>
      <div className="flex">
      {resultPlayers.map((result, key): JSX.Element => {
          return(
            <div className="padding" key={key}>
            <table className="soccertable">
            <tbody>
            <tr>Allgemeine Daten</tr>
              <tr>
                <th>Rangliste</th>
                <td>#{key+1}</td>
              </tr>  
              <tr>
                <th>Ähnlichkeit</th>
                <td>{result.similarity}</td>
              </tr>  
                <tr>
                <th>Name</th>
                <td>{result.name}</td>
                </tr>   
                <tr>
                <th>Alter</th>
                {resultPlayers[0].alter < result.alter ?
                 <td className="red">{result.alter}</td> : <td className="green">{result.alter}</td>}
              </tr>  
              <tr>
                <th>Marktwert</th>
                {resultPlayers[0].transfermarktwert < result.transfermarktwert ?
                 <td className="red">{result.transfermarktwert}</td> : <td className="green">{result.transfermarktwert}</td>}
              </tr> 
              <tr>
                <th>Minuten</th>
                {resultPlayers[0].overallMinPlayed > result.overallMinPlayed ?
                 <td className="red">{result.overallMinPlayed}</td> : <td className="green">{result.overallMinPlayed}</td>}
              </tr> 

              <tr>
                <th>Einsatzquote</th>
                {resultPlayers[0].overallEinsatzquote > result.overallEinsatzquote ?
                 <td className="red">{result.overallEinsatzquote}</td> : <td className="green">{result.overallEinsatzquote}</td>}
              </tr>     
              <tr>
                <th>Kicker Note diese Saison</th>
                {resultPlayers[0].overallBewertung > result.overallBewertung ?
                 <td className="red">{result.overallBewertung}</td> : <td className="green">{result.overallBewertung}</td>}
              </tr> 
              <tr>
                <th>Position</th>
                {resultPlayers[0].position !== result.position ?
                 <td className="red">{result.position}</td> : <td className="green">{result.position}</td>}
              </tr>  
                <tr>Offensive Werte</tr>
                <tr>
                <th>Tore</th>
                {resultPlayers[0].overallGoals > result.overallGoals ?
                 <td className="red">{result.overallGoals}</td> : <td className="green">{result.overallGoals}</td>}
              </tr>    
              <tr>
                <th>Torschüsse</th>
                {resultPlayers[0].overallTorschuesse > result.overallTorschuesse ?
                 <td className="red">{result.overallTorschuesse}</td> : <td className="green">{result.overallTorschuesse}</td>}
              </tr> 
              <tr>
                <th>SH90 (Schüsse nach 90 Minuten)</th>
                {resultPlayers[0].overallSHNeun > result.overallSHNeun ? 
                <td className="red">{result.overallSHNeun}</td> : <td className="green">{result.overallSHNeun}</td>}
                </tr> 
                <tr>
                <th>xG (Expected Goals)</th>
                {resultPlayers[0].overallxG > result.overallxG ?
                 <td className="red">{result.overallxG}</td> : <td className="green">{result.overallxG}</td>}
              </tr>   
              <tr>
                <th>xG90 (Exprected Goals after 90 Minutes)</th>
                {resultPlayers[0].overallxGNEUN > result.overallxGNEUN ? 
                <td className="red">{result.overallxGNEUN}</td> : <td className="green">{result.overallxGNEUN}</td>}
              </tr>  
              <tr>
                <th>Schussgenauigkeit</th>
                {resultPlayers[0].overallSchussgenauigkeit > result.overallSchussgenauigkeit ?
                 <td className="red">{result.overallSchussgenauigkeit}</td> : <td className="green">{result.overallSchussgenauigkeit}</td>}
              </tr> 
                 <tr>
                <th>Vorlagen</th>
                {resultPlayers[0].overallAssists > result.overallAssists ?
                 <td className="red">{result.overallAssists}</td> : <td className="green">{result.overallAssists}</td>}
              </tr>   
              <tr>
                <th>Vorlagen für Torschüsse</th>
                {resultPlayers[0].overallTorschussVorlagen > result.overallTorschussVorlagen ?
                 <td className="red">{result.overallTorschussVorlagen}</td> : <td className="green">{result.overallTorschussVorlagen}</td>}
              </tr> 
              <tr>
                <th>KP90 (Pässe die zu einem Torschuss führten)</th>
                {resultPlayers[0].overallKPNEUN > result.overallKPNEUN ?
                 <td className="red">{result.overallKPNEUN}</td> : <td className="green">{result.overallKPNEUN}</td>}
              </tr>     
                <tr>
                <th>xA (Schlüsselpässe für expected Goals)</th>
                {resultPlayers[0].overallxA > result.overallxA ?
                 <td className="red">{result.overallxA}</td> : <td className="green">{result.overallxA}</td>}
              </tr> 
              <tr>
                <th>xA90 (Schlüsselpässe für expected Goals nach 90 Minuten)</th>
                {resultPlayers[0].overallxANEUN > result.overallxANEUN ?
                 <td className="red">{result.overallxANEUN}</td> : <td className="green">{result.overallxANEUN}</td>}
              </tr>   
              <tr>
                <th>Kreierte Großchancen</th>
                {resultPlayers[0].overallkreierteGrosschancen > result.overallkreierteGrosschancen ?
                 <td className="red">{result.overallkreierteGrosschancen}</td> : <td className="green">{result.overallkreierteGrosschancen}</td>}
              </tr> 
              <tr>
                <th>erfolgreiche Dribblings</th>
                {resultPlayers[0].overallDribblings > result.overallDribblings ?
                 <td className="red">{result.overallDribblings}</td> : <td className="green">{result.overallDribblings}</td>}
              </tr>   
              <tr>Defensive Aktionen</tr>
              <tr>
                <th>Erfolgreich abgefangene Bälle</th>
                {resultPlayers[0].overallAbgefangeneBaelle > result.overallAbgefangeneBaelle ?
                 <td className="red">{result.overallAbgefangeneBaelle}</td> : <td className="green">{result.overallAbgefangeneBaelle}</td>}
              </tr>   
              <tr>
                <th>Geklärte Bälle</th>
                {resultPlayers[0].overallGeklaerteBaelle > result.overallGeklaerteBaelle ?
                 <td className="red">{result.overallGeklaerteBaelle}</td> : <td className="green">{result.overallGeklaerteBaelle}</td>}
              </tr>    
              <tr>
                <th>Begangene Fouls</th>
                {resultPlayers[0].overallFouls < result.overallFouls ?
                 <td className="red">{result.overallFouls}</td> : <td className="green">{result.overallFouls}</td>}              </tr>   
              <tr>
                <th>Geblockte Schüsse</th>
                {resultPlayers[0].overallBlockSchuss > result.overallBlockSchuss ?
                 <td className="red">{result.overallBlockSchuss}</td> : <td className="green">{result.overallBlockSchuss}</td>}
              </tr>  
              <tr>
                <th>Ballverluste</th>
                {resultPlayers[0].overallBallverlust < result.overallBallverlust ?
                 <td className="red">{result.overallBallverlust}</td> : <td className="green">{result.overallBallverlust}</td>}
              </tr>   
              <tr>
                <th>Ball Eroberungen</th>
                {resultPlayers[0].overallBallEroberungen > result.overallBallEroberungen ?
                 <td className="red">{result.overallBallEroberungen}</td> : <td className="green">{result.overallBallEroberungen}</td>}
              </tr>   
              <tr>
                <th>Passquote</th>
                {resultPlayers[0].overallPassquote > result.overallPassquote ?
                 <td className="red">{result.overallPassquote}</td> : <td className="green">{result.overallPassquote}</td>}
              </tr> 
              <tr>
                <th>erfolgreiche Tacklings</th>
                {resultPlayers[0].overallTacklingQuote > result.overallTacklingQuote ? 
                <td className="red">{result.overallTacklingQuote}</td> : <td className="green">{result.overallTacklingQuote}</td>}
              </tr> 
              <tr>
                <th>Zweikampfquote</th>
                {resultPlayers[0].overallZweikampfquote > result.overallZweikampfquote ?
                 <td className="red">{result.overallZweikampfquote}</td> : <td className="green">{result.overallZweikampfquote}</td>}
              </tr> 
              <tr>
                <th>Luftzweikampf</th>
                {resultPlayers[0].overallLuftzweikampf > result.overallLuftzweikampf ?
                 <td className="red">{result.overallLuftzweikampf}</td> : <td className="green">{result.overallLuftzweikampf}</td>}
              </tr>       
            </tbody>
          </table>    
          </div>  
          )
        })}
      </div>
    </div>
    )
};

export default ResultPlayer
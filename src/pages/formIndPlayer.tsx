import axios from 'axios';
import * as React from 'react';

// const API_URL = 'http://localhost:8080';
interface IUser {
  id: number; name: string; username: string; email: string; key:any;
   
}


const FormIndPlayer = ({onChange}: any):JSX.Element => {

  return(
    <div>
      <h1>Spielersuche</h1>
      <h3>Finde den passenden Spieler für dein Team</h3>
      <div className="flex">
      <form onSubmit={onChange}>
        <div className="flex-col">
          <div className="pr">
            <div style={{marginTop: "10px"}}>Welche Spielerposition suchst du?:</div>
            <select name="Spielerposition">
              <option value="IV">Innenverteidiger</option>
              <option value="LV">Linker Verteidiger</option>
              <option value="RV">Rechter Verteidiger</option>
              <option value="DM">Defensives Mittelfeld</option>
              <option value="ZMF">Zentrales Mittelfeld</option>
              <option value="OMF">Offensives Mittelfeld</option>
              <option value="LMF">Linker Mittelfeldspieler</option>
              <option value="RMF">Rechter Mittelfeldspieler</option>
              <option value="ST">Stürmer</option>
            </select>
          </div>
          <div className="pr">
            <div style={{marginTop: "10px"}}> Großchancen (0-3)</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallKreierteGrosschancen" />
          </div> 
          <div className="pr">
            <div style={{marginTop: "10px"}}>Passquote (0-100%)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='1' name="OverallPassquote" />
          </div>          
          <div className="pr">
            <div style={{marginTop: "10px"}}>Torschussvorlagen (0-8)</div>
            <input type="number" defaultValue='8' min='0' max='8' step='0.1' name="OverallTorschussvorlagen" />
          </div>  
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Torschüesse (0-3)</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallTorschuesse" />
          </div>
          <div className="pr">
            <div style={{marginTop: "10px"}}>Schussgenauigkeit (0-100%)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallSchussgenauigkeit" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Zweikampfquote (0-100%)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallZweikampfquote" />
          </div>
        </div>
        <div className="flex-col pt">
        <div className="pr">
            <div style={{marginTop: "10px"}}>AbgefangeneBaelle (0-5)</div>
            <input type="number" defaultValue='5' min='0' max='5' step='0.1' name="OverallAbgefangeneBaelle" />
        </div>  
        <div className="pr"> 
            <div style={{marginTop: "10px"}}>Assists (0-50)</div>
            <input type="number" defaultValue='50' min='0' max='50' name="OverallAssists" />           
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Balleroberungen (0-5)</div>
            <input type="number" defaultValue='5' min='0' max='5' step='0.1' name="OverallBallEroberungen" />       
        </div>   
        <div className="pr"> 
            <div style={{marginTop: "10px"}}>Bewertung (1-6)</div>
            <input type="number" defaultValue='1' min='1' max='6' step='0.1' name="Bewertung" />       
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Tore (0-40)</div>
            <input type="number" defaultValue='40' min='0' max='40' name="OverallGoals" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Fouls (0-4)</div>
            <input type="number" defaultValue='0' min='0' max='4' step='0.1' name="OverallFouls" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Geklaerte Baelle (0-10)</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallGeklaerteBaelle" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>xA (0-3)</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallxA" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>OverallxA90 (0-3)</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallxA90" />
        </div> 
        </div>
         <div className="flex-col pt">
          <div className="pr">
            <div style={{marginTop: "10px"}}>Dribblings (0-100%)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallDribblings" />
          </div>
          <div className="pr">            
            <div style={{marginTop: "10px"}}>xG (0-8)</div>
            <input type="number" defaultValue='8' min='0' max='8' step='0.1' name="OverallxG" />
          </div>  
          <div className="pr">
            <div style={{marginTop: "10px"}}>xG90 (0-5)</div>
            <input type="number" defaultValue='5' min='0' max='5' step='0.1' name="OverallxG90" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Sh90 (0-10)</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallSh90" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Einsatzquote (0-100)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallEinsatzquote" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Luftzweikampf (0-100)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallLuftzweikampf" />
          </div>  
          <div className="pr">
            <div style={{marginTop: "10px"}}>Ballverlust (0-10)</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallBallverlust" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Alter (16-40)</div>
            <input type="number" defaultValue='16' min='16' max='40' step='1' name="Alter" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>BlockSchuss (0-2)</div>
            <input type="number" defaultValue='2' min='0' max='2' step='0.1' name="OverallBlockSchuss" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>KP90 (0-10)</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallKP90" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Tacklingquote (0-100)</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallTacklingquote" />
          </div>
          <div className="pr"> 
            <div style={{marginTop: "10px"}}>Markwert (0.1 - 250 Mio.)</div>
            <input type="number" defaultValue='0.1' min='0.1' max='250' step='0.1' name="transfermarktwert" />
          </div> 
        </div>
            <div style={{marginTop: "10px"}}> 
              Anzahl der Smartphone's
            </div>  
            <input type="number" defaultValue='5' name="anzahl" />
            <input type="submit" value="Submit" />
      </form>
    </div>
  </div>
  )
};

export default FormIndPlayer
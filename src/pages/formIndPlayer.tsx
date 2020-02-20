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
            <div style={{marginTop: "10px"}}> Großchancen</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallKreierteGrosschancen" />
          </div> 
          <div className="pr">
            <div style={{marginTop: "10px"}}>Passquote</div>
            <input type="number" defaultValue='100' min='0' max='100' step='1' name="OverallPassquote" />
          </div>          
          <div className="pr">
            <div style={{marginTop: "10px"}}>Torschussvorlagen</div>
            <input type="number" defaultValue='8' min='0' max='8' step='0.1' name="OverallTorschussvorlagen" />
          </div>  
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Torschüesse</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallTorschuesse" />
          </div>
          <div className="pr">
            <div style={{marginTop: "10px"}}>Schussgenauigkeit</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallSchussgenauigkeit" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Zweikampfquote</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallZweikampfquote" />
          </div>
        </div>
        <div className="flex-col pt">
        <div className="pr">
            <div style={{marginTop: "10px"}}>AbgefangeneBaelle</div>
            <input type="number" defaultValue='5' min='0' max='5' step='0.1' name="OverallAbgefangeneBaelle" />
        </div>  
        <div className="pr"> 
            <div style={{marginTop: "10px"}}>Assists</div>
            <input type="number" defaultValue='50' min='0' max='50' name="OverallAssists" />           
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Balleroberungen</div>
            <input type="number" defaultValue='5' min='0' max='5' step='0.1' name="OverallBallEroberungen" />       
        </div>   
        <div className="pr"> 
            <div style={{marginTop: "10px"}}>Bewertung</div>
            <input type="number" defaultValue='1' min='1' max='6' step='0.1' name="Bewertung" />       
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Tore</div>
            <input type="number" defaultValue='40' min='0' max='40' name="OverallGoals" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Fouls</div>
            <input type="number" defaultValue='0' min='0' max='4' step='0.1' name="OverallFouls" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>Geklaerte Baelle</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallGeklaerteBaelle" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>xA</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallxA" />
        </div>
        <div className="pr">    
            <div style={{marginTop: "10px"}}>OverallxA90</div>
            <input type="number" defaultValue='3' min='0' max='3' step='0.1' name="OverallxA90" />
        </div> 
        </div>
         <div className="flex-col pt">
          <div className="pr">
            <div style={{marginTop: "10px"}}>Dribblings</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallDribblings" />
          </div>
          <div className="pr">            
            <div style={{marginTop: "10px"}}>xG</div>
            <input type="number" defaultValue='8' min='0' max='8' step='0.1' name="OverallxG" />
          </div>  
          <div className="pr">
            <div style={{marginTop: "10px"}}>xG90</div>
            <input type="number" defaultValue='5' min='0' max='5' step='0.1' name="OverallxG90" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Sh90</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallSh90" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Einsatzquote</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallEinsatzquote" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Luftzweikampf</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallLuftzweikampf" />
          </div>  
          <div className="pr">
            <div style={{marginTop: "10px"}}>Ballverlust</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallBallverlust" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Alter</div>
            <input type="number" defaultValue='16' min='16' max='40' step='1' name="Alter" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>BlockSchuss</div>
            <input type="number" defaultValue='2' min='0' max='2' step='0.1' name="OverallBlockSchuss" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>KP90</div>
            <input type="number" defaultValue='10' min='0' max='10' step='0.1' name="OverallKP90" />
          </div>
          <div className="pr">  
            <div style={{marginTop: "10px"}}>Tacklingquote</div>
            <input type="number" defaultValue='100' min='0' max='100' step='0.1' name="OverallTacklingquote" />
          </div>
          <div className="pr"> 
            <div style={{marginTop: "10px"}}>Marktwert</div>
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
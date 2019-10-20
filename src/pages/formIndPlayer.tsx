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
      <form onSubmit={onChange}>
        <div>
            <div style={{marginTop: "10px"}}>Welche Spielerposition suchst du?:</div>
        <label>
            <select name="Spielerposition">
              <option value="keineangabe">Default</option>
              <option value="TW">Torwart</option>
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
        </label>
        </div>
         <div>
            <div style={{marginTop: "10px"}}> Großchancen?</div>
          <label>
            <input type="number" defaultValue='0' min='0' max='3' step='0.1' name="OverallKreierteGrosschancen" />
          </label>
          </div>
          <label>
            <input type="radio" value="0" name="pricecheck" defaultChecked={true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="pricecheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="pricecheck"/>
            Sehr Wichtig
          </label>  
          <div>
            <div style={{marginTop: "10px"}}>Passquote:</div>
          <label>
          <input type="number" defaultValue='0' min='0' max='100' step='0.1' name="Passquote" />
          </label>
          </div>
          <label>
            <input type="radio" value="0" name="sizecheck" defaultChecked={true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="sizecheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="sizecheck"/>
            Sehr Wichtig
          </label>  

      <div>
            <div style={{marginTop: "10px"}}>Torschussvorlagen:</div>
        <label>
        <input type="number" defaultValue='0' min='0' max='8' step='0.1' name="Torschussvorlagen" />
        </label>
      </div>
      <label>
            <input type="radio" value="0" name="weightcheck" defaultChecked={true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="weightcheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="weightcheck"/>
            Sehr Wichtig
          </label> 

            <div style={{marginTop: "10px"}}>OverallSchussgenauigkeit:</div>
        <label>
        <input type="number" defaultValue='0' min='0' max='100' step='0.1' name="OverallSchussgenauigkeit" />
        </label>
      <label>
            <input type="radio" value="0" name="akkukapacheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="akkukapacheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="akkukapacheck"/>
            Sehr Wichtig
          </label>  

      <div>
            <div style={{marginTop: "10px"}}>OverallZweikampfquote:</div>
        <label>
        <input type="number" defaultValue='0' min='0' max='100' step='0.1' name="OverallZweikampfquote" />
        </label>
      </div>
      <label>
            <input type="radio" value="0" name="kameramegapixelcheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="kameramegapixelcheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="kameramegapixelcheck"/>
            Sehr Wichtig
          </label>  

      <div>
            <div style={{marginTop: "10px"}}>OverallAbgefangeneBaelle:</div>
        <label>
        <input type="number" defaultValue='0' min='0' max='5' step='0.1' name="OverallAbgefangeneBaelle" />
        </label>
      </div>
      <label>
            <input type="radio" value="0" name="frontkameracheck" defaultChecked={true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="frontkameracheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="frontkameracheck"/>
            Sehr Wichtig
          </label>  


      <div>
            <div style={{marginTop: "10px"}}>OverallAssists:</div>
        <label>
        <input type="number" defaultValue='0' min='0' max='50' step='0.1' name="OverallAssists" />       
        </label>
       </div>
       <label>
            <input type="radio" value="0" name="memorycheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="memorycheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="memorycheck"/>
            Sehr Wichtig
          </label>  
      <div>
            <div style={{marginTop: "10px"}}>OverallBallEroberungen:</div>
        <label>
          <input type="number" defaultValue='0' min='0' max='5' step='0.1' name="OverallBallEroberungen" />       
        </label>
       </div>
       <label>
            <input type="radio" value="0" name="memoryslotcheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="memoryslotcheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="memoryslotcheck"/>
            Sehr Wichtig
          </label>  

        <div>
        <div style={{marginTop: "10px"}}>OverallGoals:</div>
        <label>
        <input type="number" defaultValue='0' min='0' max='40' step='0.1' name="OverallGoals" />

        </label>
        </div>
        <label>
            <input type="radio" value="0" name="nfccheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="nfccheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="nfccheck"/>
            Sehr Wichtig
          </label>  

      <div>
            <div style={{marginTop: "10px"}}>OverallFouls:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='4' step='0.1' name="OverallFouls" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  


          <div>
            <div style={{marginTop: "10px"}}>OverallGeklaerteBaelle:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='10' step='0.1' name="OverallGeklaerteBaelle" />
        </div>
      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  



          <div>
            <div style={{marginTop: "10px"}}>OverallxA:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='3' step='0.1' name="OverallxA" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  



          <div>
            <div style={{marginTop: "10px"}}>OverallxA90:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='3' step='0.1' name="OverallxA90" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  



          <div>
            <div style={{marginTop: "10px"}}>OverallDribblings:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='100' step='0.1' name="OverallDribblings" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  



          <div>
            <div style={{marginTop: "10px"}}>OverallxG:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='8' step='0.1' name="OverallxG" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  




          <div>
            <div style={{marginTop: "10px"}}>OverallxG90:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='5' step='0.1' name="OverallxG90" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  





          <div>
            <div style={{marginTop: "10px"}}>OverallSh90:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='10' step='0.1' name="OverallSh90" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  
          <div>
            <div style={{marginTop: "10px"}}>OverallEinsatzquote:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='100' step='0.1' name="OverallEinsatzquote" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  





          <div>
            <div style={{marginTop: "10px"}}>OverallBallverlust:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='10' step='0.1' name="OverallBallverlust" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  

          <div>
            <div style={{marginTop: "10px"}}>Alter:</div>
        <div>        
          <input type="number" defaultValue='0' min='16' max='40' step='0.1' name="Alter" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  



          <div>
            <div style={{marginTop: "10px"}}>OverallBlockSchuss:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='2' step='0.1' name="OverallBlockSchuss" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  


          <div>
            <div style={{marginTop: "10px"}}>OverallKP90:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='10' step='0.1' name="OverallKP90" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  


          <div>
            <div style={{marginTop: "10px"}}>OverallTacklingquote:</div>
        <div>        
          <input type="number" defaultValue='0' min='0' max='100' step='0.1' name="AOverallTacklingquotelter" />
        </div>

      </div>
      <label>
            <input type="radio" value="0" name="thicknesscheck" defaultChecked = {true}/>
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="thicknesscheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="thicknesscheck"/>
            Sehr Wichtig
          </label>  


      <div>
      <div style={{marginTop: "10px"}}> 
        Anzahl der Smartphone's
      </div>  
          <input type="number" defaultValue='5' name="anzahl" />
      </div>
          <input type="submit" value="Submit" />
        </form>
    </div>
  )
};

export default FormIndPlayer
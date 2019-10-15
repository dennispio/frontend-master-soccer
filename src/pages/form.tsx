import axios from 'axios';
import * as React from 'react';

// const API_URL = 'http://localhost:8080';
interface IUser {
  id: number; name: string; username: string; email: string; key:any;
   
}


const Form = ({onChange}: any):JSX.Element => {

  return(
    <div>
      <h3>Bitte gebe deine Daten ein.</h3>
      <form onSubmit={onChange}>
        <div>
            <div style={{marginTop: "10px"}}>Manufacture:</div>
        <label>
            <select name="manufacture">
              <option value="keineangabe">Default</option>
              <option value="Sony">Sony</option>
              <option value="Xiaomi">Honor</option>
              <option value="ZTE">ZTE</option>
              <option value="Asus">Asus</option>
              <option value="Oneplus">OnePlus</option>
              <option value="Htc">HTC</option>
              <option value="Samsung">Samsung</option>
              <option value="Lg">LG</option>
              <option value="Huawai">Huawai</option>
              <option value="Motorola">Motorola</option>
              <option value="Nokia">Nokia</option>
              <option value="Apple">Apple</option>
              <option value="Other">Other</option>
            </select>
        </label>
        </div>
        <div>
             <label>
            <input type="radio" value="0" name="manufacturecheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="manufacturecheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="manufacturecheck"/>
            Sehr Wichtig
          </label>  
          </div>
         <div>
            <div style={{marginTop: "10px"}}>Price:</div>
          <label>
            <input type="number" defaultValue='0' name="price" />
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
            <div style={{marginTop: "10px"}}>Size:</div>
          <label>
            <input type="number" defaultValue='0' name="size" />
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
            <div style={{marginTop: "10px"}}>Weight:</div>
        <label>
            <input type="number" defaultValue='0' name="weight" />
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
<div>
            <div style={{marginTop: "10px"}}>Displaytype:</div>
        <label>
            <select name="displaytype">
              <option value="keineangabe">Default</option>
              <option value="OLED">OLED</option>
              <option value="LED">LED</option>
              <option value="TFT">TFT</option>
              <option value="LCD">LCD</option>
              <option value="Other">Other</option>
            </select>
        </label>
          </div>
          <label>
            <input type="radio" value="0" name="displaytypecheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="displaytypecheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="displaytypecheck"/>
            Sehr Wichtig
          </label> 

<div>
            <div style={{marginTop: "10px"}}>CPU:</div>
        <label>
            <select name="cpu">
              <option value="keineangabe">Default</option>
              <option value="Hexa-core">Hexa-core</option>
              <option value="Octa-core">Octa-core</option>
              <option value="Quad-core">Quad-core</option>
              <option value="Triple-core">Triple-core</option>
              <option value="Dual-core">Dual-core</option>
            </select>
        </label>
          </div>
          <label>
            <input type="radio" value="0" name="cpucheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="cpucheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="cpucheck"/>
            Sehr Wichtig
          </label>  


      <div>
            <div style={{marginTop: "10px"}}>RAM:</div>
        <label>
            <select name="ram">
              <option value="keineangabe">Default</option>
              <option value="1">1 Gb</option>
              <option value="2">2 Gb</option>
              <option value="3">3 Gb</option>
              <option value="4">4 Gb</option>
            </select>
        </label>
      </div>
      <label>
            <input type="radio" value="0" name="ramcheck" defaultChecked={true} />
            Egal
          </label>
          <label>
            <input type="radio" value="3" name="ramcheck"/>
            Wichtig
          </label>
          <label>
            <input type="radio" value="6" name="ramcheck"/>
            Sehr Wichtig
          </label>  
      <div>
            <div style={{marginTop: "10px"}}>Akkukapazität:</div>
        <label>
            <input type="number" defaultValue='0' name="akkukapa" />
        </label>
      </div>
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
            <div style={{marginTop: "10px"}}>Kameramegapixel:</div>
        <label>
            <select name="kameramegapixel">
              <option value="keineangabe">Egal</option>
              <option value="wichtig">Wichtig</option>
              <option value="sehrwichtig">Sehr Wichtig</option>
            </select>
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
            <div style={{marginTop: "10px"}}>Frontkamera:</div>
        <label>
            <select name="frontkamera">
              <option value="keineangabe">Egal</option>
              <option value="wichtig">Wichtig</option>
              <option value="sehrwichtig">Sehr Wichtig</option>
            </select>        
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
            <div style={{marginTop: "10px"}}>Memorysize:</div>
        <label>
            <select name="memory">
              <option value="32">32</option>
              <option value="64">64</option>
              <option value="128">128</option>
              <option value="256">256</option>
              <option value="512">512</option>

            </select>        
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
            <div style={{marginTop: "10px"}}>Memoryslot:</div>
        <label>
            <select name="memoryslot">
              <option value="MicroSD">MicroSD</option>
              <option value="NanoSD">NanoSD</option>
            </select>        
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
        <div style={{marginTop: "10px"}}>NFC:</div>
        <label>
            <select name="nfc">
              <option value="1">True</option>
              <option value="0">False</option>
            </select> 
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
            <div style={{marginTop: "10px"}}>Thickness:</div>
        <div><input type="number" defaultValue='0' name="thickness" /></div>

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

export default Form
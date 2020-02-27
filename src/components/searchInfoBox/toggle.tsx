import * as React from 'react'

interface IToggleProps {
  toggle: () => void,
  message? : string
}

const Toggle = ({toggle,message} :IToggleProps ) : JSX.Element => {
  const handleClick = () => {
    toggle();
   };
  return(
  <div>
       <div className="modal">
            <div className="modal_content">
            <p>Das ist die Infobox für die Spielersuche</p>
            <p>Spieler Position - Die Spieler Position gibt an, welcher Position dein Angreifer entsprechen soll</p>
            <p>Großchancen: 0-3</p>
            <p>Passquote: 0-100</p>
            <p>Torschussvorlagen: 0-8</p>
            <p>Torschüsse: 0-3</p>
            <p>Schussgenauigkeit: 0-100</p>
            <p>Zweikampfquote: 0-100</p>
            <p>Abgefangene Bälle: 0-5</p>
            <p>Assists: 0-50</p>
            <p>Balleroberungen: 0-5</p>
            <p>Bewertung: 6-1</p>
            <p>Tore: 0-40</p>
            <p>Fouls: 4-0</p>
            <p>Geklärte Bälle: 0-10</p>
            <p>xA: 0-3</p>
            <p>xA90: 0-3</p>
            <p>Dribblings: 0-100</p>
            <p>xG: 0-8</p>
            <p>xG90: 0-5</p>
            <p>SH90: 0-10</p>
            <p>Einsatzquote: 0-100</p>
            <p>Luftzweikampf: 0-100</p>
            <p>Ballverlust: 0-10</p>
            <p>Alter: 16-40</p> 
            <p>geblockter Schuss: 0-2</p>
            <p>KP90: 0-10</p>
            <p>Tacklingquote: 0-100</p>
            <p>Marktwert: 0.1 Millionen - 250 Millionen</p>
          </div>  
        </div> 
  </div>
  )
}

export default Toggle
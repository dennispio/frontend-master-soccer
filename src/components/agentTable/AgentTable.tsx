import * as React from 'react';

interface IAgentTableProps {
  agents: string[]

}

const AgentTable = ({agents}: IAgentTableProps) => {
  return(
    <div>
      <table className="agent-list">
        <tr>
          <th>AGENT</th>
          <th>STATUS</th>
        </tr>
        {agents.map((agent, key): JSX.Element => {
          return(
            <tr  key={key}>
              <td>{agent}</td>
              <td className="active">AKTIV</td>
            </tr>          
          )
        })}
      </table>
    </div>
  )
}
export default AgentTable
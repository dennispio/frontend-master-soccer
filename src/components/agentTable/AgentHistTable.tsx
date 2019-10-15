import * as React from 'react';

interface IAgentTableProps {
  agents: (IAgent)[]
}

interface IAgent {
  agent: string,
  time: string
}

const AgentHistTable = ({agents}: IAgentTableProps) => {
  return(
    <div>
      <table className="agent-list">
        <tr>
          <th>AGENT</th>
          <th>TIME</th>
        </tr>
        {agents.map((agent, key): JSX.Element => {
          return(
            <tr  key={key}>
              <td>{agent.agent}</td>
              <td>{agent.time}</td>
            </tr>          
          )
        })}
      </table>
    </div>
  )
}
export default AgentHistTable
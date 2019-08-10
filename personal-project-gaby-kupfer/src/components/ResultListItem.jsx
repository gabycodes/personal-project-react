import React from 'react'

const ResultListItem = ({ data }) => {
  if (data.type === 'ForkEvent') {
    return (
      <li>
        <a href='' >
          <h3>{data.payload.forkee.full_name}</h3>
          <p>Forked from: {data.repo.url.split('repos/').pop()}</p>
        </a>
      </li>
    )
  } else {
    return (
      <li>
        <a href='' >
          <h3>{data.payload.pull_request.title}</h3>
          <p>Status: {data.payload.pull_request.state}</p>
        </a>
      </li>
    )
  }  
}

export default ResultListItem;
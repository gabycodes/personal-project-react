import React from 'react'
import ResultListItem from './ResultListItem'

const ResultsList = ({ title, data }) => {
  console.log('🎉', data)
  console.log('🎉🎉', data.length)
  if (data.length === 0) {
    return(
      <div className="resultsList noResults">
        <h2>{title}</h2>
        <ul>
          <li>No {title} :(</li>
        </ul>
      </div>
    )
  } else {
    return(
      <div className="resultsList">
        <h2>{title}</h2>
          <ul>
            {
              data.map(item => <ResultListItem data={item} key={item.id} />)
            }
          </ul>
      </div>
    )
  }


  // if (data.length === 0) {
  //   return(
  //     <div className="resultsList">
  //       <h2>{title}</h2>
  //       <ul>
  //         {
  //           data.map(item => <ResultListItem data={item} key={item.id} />)
  //         }
  //       </ul>
  //     </div>
  //   )
  // } else {
  //   return(
  //     <ul>
  //       <li>No {title} :(</li>
  //     </ul>
  //   )
  // }
}

export default ResultsList;
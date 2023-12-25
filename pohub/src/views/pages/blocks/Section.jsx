import '../../style/Main.css';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../../controller/getData';
import ToNF from '../../../controller/ToNF';
import Paging from './Paging';

function Section(props) {
  const Types = ['freeBoard', 'fileShare'];
  const { boardType } = useParams();
  const [boardData, setBoardData] = useState([]);
  
  useEffect(() => {
    if(Types.indexOf(boardType) < 0){
      ToNF();
    }
    if(boardType) {
      getData(`getSectionx?boardType=${boardType}`, setBoardData);
    }
  // eslint-disable-next-line
  },[]);

  return (
    <section className="section-container">
      {boardData.map((data) => (
        <div key={data.board_id} className="boardx">{data.title} {data.cnt}</div>
      ))}
      <Paging />
    </section>
  )
}

export default Section;

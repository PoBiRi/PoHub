import '../../style/Main.css';
import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import getData from '../../../controller/getData';
import ToNF from '../../../controller/ToNF';
import Paging from './Paging';

function Section(props) {
  const Types = ['freeBoard', 'fileShare'];
  const { boardType, pageNum } = useParams();
  const [boardData, setBoardData] = useState([]);
  const [max, setMax] = useState();
  const myRef = useRef();
  
  myRef.current.scrollTop = 0;

  useEffect(() => {
    if(Types.indexOf(boardType) < 0){
      ToNF();
    }
    if(boardType) {
      getData(`getSectionx?boardType=${boardType}&pageNum=${pageNum}`, setBoardData);
      getData(`countBoard?boardType=${boardType}`, setMax);
    }
  // eslint-disable-next-line
  },[pageNum]);

  return (
    <section className="section-container" ref={myRef}>
      {boardData.map((data) => (
        <div key={data.board_id} className="boardx">{data.board_id} {data.cnt}</div>
      ))}
      <Paging max = {max} pageNum = {pageNum} />
    </section>
  )
}

export default Section;

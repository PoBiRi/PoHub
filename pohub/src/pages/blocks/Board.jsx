import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getData } from 'controller/ReqData';
import ToNF from 'controller/ToNF';
import Paging from './Paging';

function Board(props) {
  const { boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
  }, [boardID])
  console.log(boardData);

  return (
    <div>
      {boardData.map((data) => (
        data.cnt
      ))}
    </div>
  )
}

export default Board;
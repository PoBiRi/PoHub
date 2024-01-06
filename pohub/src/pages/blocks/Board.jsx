import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getData } from 'controller/ReqData';
import ToNF from 'controller/ToNF';

function Board(props) {
  const { boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ fileData, setFileData ] = useState([]);

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
    getData(`getFile?boardID=${boardID}`, setFileData);
  }, [boardID])

  return (
    <div>
      {fileData.map((data) => (
        <img width='100%' src={data.file_dir} alt='Nothing' />
      ))}
      {boardData.map((data) => (
        data.board_id + '\n' +
        data.cnt
      ))}
    </div>
  )
}

export default Board;
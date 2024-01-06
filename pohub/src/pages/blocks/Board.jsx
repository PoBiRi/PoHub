import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getData } from 'controller/ReqData';

function Board(props) {
  const { boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ fileData, setFileData ] = useState([]);

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
    getData(`getFile?boardID=${boardID}`, setFileData);
  }, [boardID])

  return (
    <BoardContainer>
      {fileData.map((data) => (
        <Box key={data.file_id} src={data.file_dir} alt='Nothing' />
      ))}
      {boardData.map((data) => (
        data.board_id + '\n' +
        data.cnt
      ))}
    </BoardContainer>
  )
}

export default Board;

const BoardContainer = styled.div`
  overflow: auto;
  display: flex;
  flex-direction: column;
  
  &::-webkit-scrollbar {
    width: 4px;
  }

  &::-webkit-scrollbar-thumb {
    height: 30%;
    background: #217af4;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-track {
    background: rgba(33, 122, 244, .1);
  }
`;

const Box = styled.img`
  max-width: 700px;
  width: 100%;
`;
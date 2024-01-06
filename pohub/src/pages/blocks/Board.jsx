import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getData } from 'controller/ReqData';

function Board(props) {
  const Types = {'freeBoard': '자유게시판', 'fileShare': '자료저장소'};
  const { boardType, boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ fileData, setFileData ] = useState([]);

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
    getData(`getFile?boardID=${boardID}`, setFileData);
  }, [boardID])

  return (
    <div>
      <InfoBox border='1px solid gray'>{Types[boardType]}</InfoBox>
      <BoardContainer>
        {boardData.map((data) => (
          <InfoBox border='1px solid rgba(0, 0, 0, 0.1)'>{data.title}</InfoBox>
        ))}
        {fileData.map((data) => (
          <ImgBox key={data.file_id} src={data.file_dir} alt='Nothing' />
        ))}
        {boardData.map((data) => (
          data.cnt
        ))}
      </BoardContainer>
    </div>
  )
}

export default Board;

const InfoBox = styled.div`
  border-bottom: ${props => props.border};
  height: 64px;
  min-height: 64px;
  margin-bottom: 16px;
`;

const BoardContainer = styled.div`
  height: calc(100vh - 176px);
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  word-break: break-word;

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

const ImgBox = styled.img`
  width: 100%;
  max-width: 700px;
`;
import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { useParams, useNavigate  } from 'react-router-dom';
import { getData } from 'controller/ReqData';

function Board(props) {
  const Types = {'freeBoard': '자유게시판', 'fileShare': '자료저장소'};
  const { boardType, boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ fileData, setFileData ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
    getData(`getFile?boardID=${boardID}`, setFileData);
  }, [boardID])
  
  const formatDate = (originalDateString) => {
    const date = new Date(originalDateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <InfoBox border='1px solid grey'>
        <div style={{marginLeft : "4px"}} onClick={() => navigate(`/Pages/${boardType}/1`)}>
          {Types[boardType]}
        </div>
      </InfoBox>
      <BoardContainer>
        {boardData.map((data) => (
          <InfoBox key={boardType + data.board_id} border='1px solid rgba(0, 0, 0, 0.1)'>
            <BoardInfo>
              제목 : {data.title}
              <div style={{fontSize : "12px", display : "flex"}}>
                <div>작성자 : {data.writter}</div> 
                <div style={{marginLeft : "16px"}}>작성날짜 : {formatDate(data.created_at)}</div>
              </div>
            </BoardInfo>
          </InfoBox>
        ))}
        {fileData.map((data) => (
          <ImgBox key={data.file_type + data.file_id} src={data.file_dir} alt='Nothing' />
        ))}
        {boardData.map((data) => (
          <div key={boardType}>{data.cnt}</div>
        ))}
      </BoardContainer>
    </div>
  )
}

export default Board;

const InfoBox = styled.div`
  border-bottom: ${props => props.border};
  display: flex;
  height: 64px;
  min-height: 64px;
  margin-bottom: 16px;
`;

const BoardInfo = styled.div`
  display: flex;
  font-size: 24px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4px;
  margin-left: 4px;
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
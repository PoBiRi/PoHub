import styled from 'styled-components';
import { useState, useEffect} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData, downloadFile } from 'controller/ReqData';

function Board(props) {
  const Types = {'freeBoard': '자유게시판', 'fileShare': '자료저장소'};
  const { boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ fileData, setFileData ] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
    getData(`getFile?boardID=${boardID}`, setFileData);
  // eslint-disable-next-line
  }, [boardID]);
  
  const formatDate = (originalDateString) => {
    const date = new Date(originalDateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  };

  return (
    <div>
      <InfoBox border='1px solid grey'>
        {boardData.map((data) => (
          <div key={data.board_type} onClick={() => navigate(`/Pages/${data.board_type}/1`)}>
              {Types[data.board_type]}
          </div>
        ))}
      </InfoBox>
      <BoardContainer>
        {boardData.map((data) => (
          <InfoBox key={data.board_type + data.board_id} border='1px solid rgba(0, 0, 0, 0.1)'>
            <BoardInfo>
              제목 : {data.title}
              <div style={{fontSize : "12px", display : "flex"}}>
                <div>작성자 : {data.writter}</div> 
                <div style={{marginLeft : "16px"}}>작성날짜 : {formatDate(data.created_at)}</div>
              </div>
            </BoardInfo>
          </InfoBox>
        ))}
        <div style={{display: 'flex'}}>
          {fileData.map((data) => (
            data.file_type === 'others' ? (
              <FileContainer key={'others' + data.board_id} onClick={() => downloadFile(data.file_name)}>
                {data.file_name}
              </FileContainer>
            ) : null
          ))}
        </div>
        {fileData.map((data) => (
          data.file_type === 'img' ? (
            <ImgContainer key={data.file_type + data.file_id}>
              <ImgBox src={data.file_dir} alt='Nothing' />
            </ImgContainer>
          ) : null
        ))}
        {boardData.map((data) => (
          <div style={{fontSize: '12px', whiteSpace: 'pre-wrap'}} key={data.board_id + 'cnt'}>
            {data.cnt}
          </div>
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
  padding-left: 4px;
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

const BoardInfo = styled.div`
  display: flex;
  font-size: 24px;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 4px;
`;

const FileContainer = styled.div`
  font-size: 12px;
  padding-left: 8px;
  margin-bottom: 16px;
  padding-right: 4px;
  text-decoration: underline;
  font-style: italic;
  cursor: pointer;

  &:hover{
    color: blue;
  }
`;

const ImgContainer = styled.div`
  max-height: 600px;
  max-width: 600px;
  padding: 2px;
`;

const ImgBox = styled.img`
  object-position:0 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
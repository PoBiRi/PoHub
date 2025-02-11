import styled from 'styled-components';
import { useRef, useState, useEffect} from 'react';
import Swal from 'sweetalert2';
import { useParams, useNavigate } from 'react-router-dom';
import { getData, postData, downloadFile } from 'controller/ReqData';
import Button from './Button';

function Board(props) {
  const Types = {'freeBoard': '자유게시판', 'humor':'유머게시판', 'illust':'일러스트', 'album':'여행/앨범', 'fileShare': '자료저장소'};
  const { checkIsLoggedIn } = props;
  const { boardID } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ fileData, setFileData ] = useState([]);
  const [ commentData, setCommentData ] = useState([]);
  const [ isWritter, setIsWritter ] = useState();
  const [ loading, setLoading ] = useState(false);
  const textareaRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    getData(`getBoard?boardID=${boardID}`, setBoardData);
    getData(`getFile?boardID=${boardID}`, setFileData);
    getData(`getComment?boardID=${boardID}`, setCommentData);
  // eslint-disable-next-line
  }, [boardID]);

  useEffect(() => {
    if(isWritter === false){
      Swal.fire({
        title: 'Error',
        text: '지울 권한이 없습니다',
      }).then(function() {
        setIsWritter();
      });
    }
    else if(isWritter === true){
      Swal.fire({
        title: 'success',
        text: '삭제했습니다',
      }).then(function() {
        setIsWritter();
        navigate(-1);
      });
    }
  }, [isWritter]);
  
  const formatDate = (originalDateString) => {
    const date = new Date(originalDateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}:${date.getSeconds().toString().padStart(2, '0')}`;
  };
 
  const handleResizeHeight = () => {
    textareaRef.current.style.minHeight = '32px';
    textareaRef.current.style.minHeight = (textareaRef.current.scrollHeight) + 'px';
  };
  
  const handleDeleteButton = async() => {
    checkIsLoggedIn(); 
    setLoading(true);
    const writterData = {
      board_id: boardID
    };
    await postData('deleteBoard', writterData, setIsWritter);
    setLoading(false);
  }

  const handleDeleteCommentButton = async(comment_id) => {
    checkIsLoggedIn(); 
    setLoading(true);
    const writterData = {
      comment_id: comment_id
    };
    await postData('deleteComment', writterData, setIsWritter);
    setLoading(false);
  }

  const handleCommentButton = async() => {
    checkIsLoggedIn();
    if(!textareaRef.current.value){
      Swal.fire({
        title: 'Error',
        text: '댓글 내용이 없습니다.',
      });
    }else {
      setLoading(true);
      const commentData = {
        board_id: boardID,
        cnt: textareaRef.current.value,
      };
      await postData('writeComment', commentData);
      setLoading(false);
  
      Swal.fire({
        title: 'Confirm',
        text: '댓글 작성이 완료되었습니다.',
      }).then(function() {
        navigate(0);
      });
    }
  }

  return (
    <div>
      {boardData.map((data) => (
        <InfoBox border='1px solid grey'>
          <div key={data.board_type} onClick={() => navigate(`/Pages/${data.board_type}/1`)}>
              {Types[data.board_type]}
          </div>
          <DeleteButton disabled={loading} onClick={() => {
            handleDeleteButton();
          }}>
            <TextBox>글지우기</TextBox>
          </DeleteButton>
        </InfoBox>
      ))}
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
              <FileContainer key={'others' + data.file_id} onClick={() => downloadFile(data.file_name)}>
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
          <CntContainer key={data.board_id + 'cnt'}>
            {data.cnt}
          </CntContainer>
        ))}
        {commentData.map((data) => (
          <CommentContainer key={data.comment_id + 'cnt'}>
            <div style={{fontSize : "12px", display : "flex"}}>
              <div>{data.writter} :   </div>
              <div>{data.cnt}</div>
            </div>
            <DeleteButton onClick={() => {
              handleDeleteCommentButton(data.comment_id);
            }}
            style={{
              fontSize: '12px',
              marginLeft: '12px',
              height: '12px',
              margin: '0'
            }} disabled={loading}>
              <div style={{marginRight : "12px"}}>{formatDate(data.created_at)}</div>
              <TextBox style={{fontSize:'12px', margin:'0px 12px'}}>댓글 지우기</TextBox>
            </DeleteButton>
          </CommentContainer>
        ))}
        <WriteCommentBox>
          <CntBox ref={textareaRef} onChange={handleResizeHeight} id='cnt' placeholder='댓글 내용을 입력하세요.'/>
          <ButtonBox>
          <div style={{width: '64px', display: 'flex'}}>
            <Button 
              disabled={loading}
              onClick={handleCommentButton}
              $fontColor='black' 
              $padding='5px' 
              $color='#FFE4E1' 
              $hovercolor='#FFC0CB'
            >
              작성
            </Button>
          </div>
          </ButtonBox>
        </WriteCommentBox>
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
  justify-content: space-between;
`;

const DeleteButton = styled.div`
  height: 24px;
  margin-top: auto;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const TextBox = styled.div`
  font-size: 24px;
  margin-left: 12px;

  @media screen and (max-width: 600px){
    font-size: 12px;
    margin-left: 4px;
  }
`;
/*
& > :nth-last-child(-n + 1) {
  width: 100%;
}*/

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

const CntContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 4px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  font-size: 16px;
  white-space: pre-wrap;
`;

const CommentContainer = styled.div`
  display: flex;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  padding-left: 4px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  font-size: 12px;
  white-space: pre-wrap;
  justify-content: space-between;
`;

const WriteCommentBox = styled.div`
  display: flex;
  padding: 0px;
  margin: 0px 10px;
  padding-bottom: 16px;
  margin-bottom: 16px;
  justify-content: space-between;
`;

const CntBox = styled.textarea.attrs({
  maxLength: 500
})`
  width: 90%;
  min-height: 32px;
  border: none;
  resize: none;
  padding: 0px;
  background: transparent;

  &:focus { outline: none; }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 10%;
  height: 32px;
  min-height: 32px;
`;

const ImgBox = styled.img`
  object-position:0 0;
  max-height: 100%;
  max-width: 100%;
  object-fit: contain;
`;
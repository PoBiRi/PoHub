import styled from 'styled-components';
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { postData } from 'controller/ReqData';
import Button from './Button';

function WriteBoard(props) {
  const Types = {'freeBoard': '자유게시판', 'fileShare': '자료저장소'};
  const { boardType } = useParams();
  const textareaRef = useRef();
  const titleRef = useRef();
  const navigate = useNavigate();

  const handleResizeHeight = () => {
    textareaRef.current.style.minHeight = '200px';
    textareaRef.current.style.minHeight = (textareaRef.current.scrollHeight - 48) + 'px';
  };

  const handleWriteButton = () => {
    if(!titleRef.current.value || !textareaRef.current.value){
      Swal.fire({
        title: 'Error',
        text: '제목이나 내용이 없습니다.',
      });
    } else {
      const boardData = {
        title: titleRef.current.value,
        cnt: textareaRef.current.value,
        boardType: boardType,
      };
      postData('writeBoard', boardData);
      Swal.fire({
        title: 'Confirm',
        text: '게시글 작성이 완료되었습니다.',
      }).then(function() {
        navigate(-1);
      });
    }
  };

  return (
    <div>
      <InfoBox border='1px solid grey'>
        <div onClick={() => navigate(`/Pages/${boardType}/1`)}>
          {Types[boardType]}
        </div>
      </InfoBox>
      <CanvasBox>
        <TitleBox ref={titleRef} type='text' id='title' placeholder='제목'/>
        <CntBox ref={textareaRef} onChange={handleResizeHeight} id='cnt' placeholder='내용을 입력하세요.'/>
        <ButtonBox>
          <div style={{width: '64px', display: 'flex'}}>
            <Button onClick={handleWriteButton}$fontColor='black' $padding='5px' $color='#FFE4E1' $hovercolor='#FFC0CB'>
              작성
            </Button>
          </div>
        </ButtonBox>
      </CanvasBox>
    </div>
  )
}

export default WriteBoard;

const InfoBox = styled.div`
  border-bottom: ${props => props.border};
  display: flex;
  height: 64px;
  min-height: 64px;
  margin-bottom: 16px;
  padding-left: 4px;
  justify-content: space-between;
`;

const CanvasBox = styled.div`
  height: calc(100vh - 176px);
  display: flex;
  overflow: auto;
  align-items: center;
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

const TitleBox = styled.input`
  width: 80%;
  border: none;
  font-size: 24px;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: transparent;

  &:focus { outline: none; }
`;

const CntBox = styled.textarea`
  min-height: 200px;
  width: 80%;
  border: none;
  resize: none;
  padding: 24px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  background: transparent;

  &:focus { outline: none; }
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 80%;
  height: 32px;
  min-height: 32px;
  padding: 24px 0;
`;
import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from 'controller/ReqData';
import ToNF from 'controller/ToNF';
import Paging from './Paging';

function Section(props) {
  const Types = {'freeBoard': '자유게시판', 'fileShare': '자료저장소'};
  const { checkIsLoggedIn } = props;
  const { boardType, pageNum } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ max, setMax ] = useState();
  const sectionRef = useRef();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(Types.hasOwnProperty(boardType) < 0){
      ToNF();
    }
    getData(`getSectionx?boardType=${boardType}&pageNum=${pageNum}`, setBoardData);
    getData(`countBoard?boardType=${boardType}`, setMax);
    sectionRef.current.scrollTop = 0;
  // eslint-disable-next-line
  },[boardType, pageNum]);

  return (
    <div>
      <InfoBox>
        <div onClick={() => navigate(`/Pages/${boardType}/1`)}>{Types[boardType]}</div>
        <WriteButton onClick={() => {
          checkIsLoggedIn(); 
          navigate(`/pages/${boardType}/write`);
        }}>
          <WriteIcon />
          <TextBox>글쓰기</TextBox>
        </WriteButton>
      </InfoBox>
      <SectionContianer ref={sectionRef}>
        {boardData.map((data) => (
          <Boardx key={data.board_id} style={{overflow: 'hidden'}} onClick={() =>{
              checkIsLoggedIn(); 
              navigate(`/Pages/${data.board_type}/board/${data.board_id}`)
          }}>
            {data.title}<br/>{data.writter}
          </Boardx>
        ))}
        <Paging max={max} pageNum={pageNum} />
      </SectionContianer>
    </div>
  )
}

export default Section;

const WriteIcon = () =>{
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className="feather feather-edit-3">
        <path d="M12 20h9"></path>
        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
      </svg>
  )
}

const InfoBox = styled.div`
  border-bottom: 1px solid grey;
  display: flex;
  height: 64px;
  margin-bottom: 16px;
  padding-left: 4px;
  justify-content: space-between;
`;

const WriteButton = styled.div`
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

const SectionContianer = styled.section`
  height: calc(100vh - 176px);
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;

  & > :nth-last-child(-n + 1) {
    grid-column: span 3; /* 마지막 칸은 페이징을 위해 3칸짜리로 표시 */
  }

  @media screen and (min-width: 1000px){
    grid-template-columns: repeat(5, 1fr);

    & > :nth-last-child(-n + 1) {
      grid-column: span 5;
    }
  }

  @media screen and (max-width: 600px){
    grid-template-columns: repeat(1, 1fr);

    & > :nth-last-child(-n + 1) {
      grid-column: span 1;
    }
  }
  
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

const Boardx = styled.div`
  background-color: #ffffff;
  padding: 32px;
  height: 128px;
`;
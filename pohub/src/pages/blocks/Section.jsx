import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from 'controller/ReqData';
import ToNF from 'controller/ToNF';
import Paging from './Paging';
import NoIMG from 'no_image.png'

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

  const formatDate = (originalDateString) => {
    const date = new Date(originalDateString);
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

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
              navigate(`/Pages/board/${data.board_id}`);
          }}>
            <ImgContainer>
              <ImgBox src={`http://pobijunior.com/thumnail/${data.board_id}`} alt='Nothing' 
                onError={(e)=> {
                  e.target.src = NoIMG;
                  e.target.alt = 'Nothing';
                }}
              />
            </ImgContainer>
            <Info>
              <div
                title={data.title} 
                style={{
                  paddingBottom: '4px',
                  fontSize: '20px',
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis'}}
              >
                {data.title}
              </div>
              <div style={{fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                작성자: {data.writter}
              </div>
              <div style={{fontSize: '10px', overflow: 'hidden', whiteSpace: 'nowrap', textOverflow: 'ellipsis'}}>
                작성 날짜: {formatDate(data.created_at)}
              </div>
            </Info>
          </Boardx>
        ))}
      </SectionContianer>
      <Paging max={max} pageNum={pageNum} />
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
/*
& > :nth-last-child(-n + 1) {
  width: 100%;
}*/

const SectionContianer = styled.section`
  height: calc(100vh - 216px);
  overflow: auto;
  display: flex;
  flex-wrap: wrap;
	align-content: flex-start;
  gap: 16px;

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
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 8px;
  width: 167px;
  height: 240px;
`;

const ImgContainer = styled.div`
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  display: flex;
  padding: 2px;
  padding-bottom: 3px;
  aspect-ratio: 1 / 1;
`;

const ImgBox = styled.img`
  max-height: 100%;
  max-width: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  padding: 4px;
  display: flex;
  flex-direction: column;
`;
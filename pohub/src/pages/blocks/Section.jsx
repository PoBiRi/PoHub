import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getData } from 'controller/ReqData';
import ToNF from 'controller/ToNF';
import Paging from './Paging';

function Section(props) {
  const Types = ['freeBoard', 'fileShare'];
  const { boardType, pageNum } = useParams();
  const [ boardData, setBoardData ] = useState([]);
  const [ max, setMax ] = useState();
  const myRef = useRef();
  const navigate = useNavigate();
  
  useEffect(() => {
    if(Types.indexOf(boardType) < 0){
      ToNF();
    }
    getData(`getSectionx?boardType=${boardType}&pageNum=${pageNum}`, setBoardData);
    getData(`countBoard?boardType=${boardType}`, setMax);
    myRef.current.scrollTop = 0;
  // eslint-disable-next-line
  },[boardType, pageNum]);

  return (
    <SectionContianer ref={myRef}>
      {boardData.map((data) => (
        <Boardx key={data.board_id} onClick={() => navigate(`/Pages/${data.board_type}/board/${data.board_id}`)}>{data.board_id} {data.cnt}</Boardx>
      ))}
      <Paging max = {max} pageNum = {pageNum} />
    </SectionContianer>
  )
}

export default Section;

const SectionContianer = styled.section`
  overflow: auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  & > :nth-last-child(-n + 1) {
    grid-column: span 3; /* 마지막 칸은 페이징을 위해 3칸짜리로 표시 */
  }

  @media screen and (min-width: 1000px){
    grid-template-columns: repeat(5, 1fr);

    & > :nth-last-child(-n + 1) {
      grid-column: span 5;
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
  padding: 1rem;
  height: 4rem;
`;
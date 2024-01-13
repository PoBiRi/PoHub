import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export default function Paging(props) {
  const navigate = useNavigate();
  const {max, pageNum} = props;

  function changePage(max, nextPage){
    if(nextPage > max || nextPage < 1){return 0;}
    navigate(`/Pages/freeBoard/${nextPage}`)
  }

  return (
    <Buttonx>
      <Button onClick={() => changePage(max, parseInt(pageNum) - 1)}>
        <ArrowLeftIcon />
      </Button>
      {pageNum} / {max}
      <Button onClick={() => changePage(max, parseInt(pageNum) + 1)}>
        <ArrowRightIcon />
      </Button>
    </Buttonx>
  )
}

const Buttonx = styled.div`
  padding-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const Button = styled.div`
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 9999px;
  font-size: 0.875rem;
  font-weight: 500;
  border: 1px solid currentColor;
  outline: none;
  transition: background-color 0.3s ease-in-out;

  &:hover {
      background-color: #e5e7eb;
  }

  &:focus {
      box-shadow: 0 0 0 3px rgba(66, 154, 255, 0.5);
  }
`;

function ArrowLeftIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}

function ArrowRightIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  )
}

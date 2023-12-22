import '../style/Main.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

function Section(props) {
  const Types = ['freeBoard', 'fileShare'];
  const { boardType } = useParams();
  const navigate = useNavigate();
  const [boardData, setBoardData] = useState([]);
  
  useEffect(() => {
    if(Types.indexOf(boardType) < 0){
      navigate("/NotFound");
    }
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://220.120.65.148:4000/getSectionx?boardType=${boardType}`);
        setBoardData(res.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    if(boardType) {
      fetchData();
    }
  // eslint-disable-next-line
  },[boardType]);

  return (
    <section className="section-container">
      {boardData.map((data) => (
        <div key={data.board_id} className="boardx">{data.title} {data.cnt}</div>
      ))}       
    </section>
  )
}

export default Section;

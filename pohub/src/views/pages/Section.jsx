import '../style/Main.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Section(props) {
  const { boardType } = useParams();
  const [boardData, setBoardData] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:4000/getSectionx?boardType=${boardType}`);
        
        setBoardData(res.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    if(boardType) {
      fetchData();
    }
  },[boardType]);

  console.log(boardData);
  return (
    <section className="section-container">
      {boardData.map((data) => (
        <div key={data.board_id} className="boardx">{data.title}</div>
      ))}
    </section>
  )
}

export default Section;

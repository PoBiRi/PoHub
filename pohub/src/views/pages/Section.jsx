import '../style/Main.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Section(props) {
  const { boardType } = useParams();
  const [boardData, setBoardData] = useState([]);
  
  console.log(boardType);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reponse = await axios.get('http://localhost:4000/getSectionx', {
          params: {
            boardType: boardType,
          },
        });
        setBoardData(reponse.data);
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
    console.log(boardData);

    fetchData();
  }, []);

  return (
    <section className="section-container">
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
      <div className="boardx" />
    </section>
  )
}

export default Section;

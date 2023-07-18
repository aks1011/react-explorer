import React, { useState, useEffect } from 'react';
import Card  from "./../shared/card/Card";
import "./Home.css";

const Home = () => {

  const [cardList, setCardList] = useState([]);

  const fetchCardList = () => {
    setCardList([
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
      { title: 'Custom A', description: 'Desc 1', navLink: '/c1' },
    ]);
  }

  useEffect(() => {
    fetchCardList();
  }, []);

  return (
    <div className="card-wrapper">
      <button className='btn' style={{ background: "whitesmoke", fontSize: "3rem", color: "#2f4858" }}>+</button>
      {
        cardList.map((item, index) => (
          <div key={index}>
            <Card details={item} />
          </div>
        ))
      }
    </div >
  )
}

export default Home;
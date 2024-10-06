// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import stockImage from '../assets/stockImage.jpeg'
import { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';


function Cards({Title, Author, Image, Genres}) {
    console.log(Title, Author, Genres)
  const cardButton= async (e) =>{
    // const dat = await axios.get('/api/test', data);
    // console.log(dat, dat.data)
    console.log("Clicked Card");
    // useData({ 'name': dat.data.name})
    // console.log(data.name)
  }

  // const stockImage="../assets/stockImage.jpg"
  

  // getData();

  //useEffect(()=>getData(),[]);

  return (
    <div className="card" style={{ margin:'14vh' , marginBottom:'1vh', marginTop:'22vh' ,borderRadius:'25px', background:'transparent', borderStyle:'none',width:'20vh', display:'inline-block'}}>

    
    <Card style={{ width: '16rem',position:'relative',display:'block',borderRadius:'20px' }}>
      <Card.Img variant="top" src={Image} />
      <Card.Body> 
        <Card.Title style={{textAlign:'center'}}>{Title}</Card.Title>
        Author: {Author}
        Genres: {Genres}
        {/* { <Card.Text> */}
        {/* </Card.Text> } */}
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
     
     </div>
  );
}

export default Cards;
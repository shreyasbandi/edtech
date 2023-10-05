import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css'
import Hi from './Home1'
import React  from 'react';

function CardExample() {
  return (
    <div className='bg-img'>
        <Hi/>
        <a href='/chat'>
        <Button variant="primary">CHAT ROOM</Button>{' '}
        </a>
        <a href='/video'>
        <Button variant="secondary">Video lecture</Button>{' '}
        </a>
      
        <div className="d-flex justify-content-around" >
        
      <Card style={{ width: '18rem',height:"30rem"}}>
        <Card.Img variant="top" src='https://i.ytimg.com/vi/bUEykHfMMnc/maxresdefault.jpg' style={{height:'15rem'}} />
        <Card.Body>
          <Card.Title>HTML</Card.Title>
          <Card.Text>
          HTML is the standard markup language for Web pages.
          With HTML you can create your own Website.
          HTML is easy to learn - You will enjoy it!
          </Card.Text>
            <a href='/Basic'>
          <Button variant="primary" >solve MCQ</Button>
          </a>
        </Card.Body>
      </Card>

      <Card style={{ width: '18rem',height:"30rem"}}>
        <Card.Img variant="top" src='https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png'/>
        <Card.Body>
          <Card.Title>jQuery</Card.Title>
          <Card.Text>
            jQuery is a fast, small, and feature-rich JavaScript library
            It makes things like HTML document traversal and manipulation
          </Card.Text>
         <a href='/html'>
          <Button variant="primary">Solve MCQ</Button>
          </a>
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',height:"30rem"}}>
        <Card.Img variant="top"  src='https://www.sbr-technologies.com/wp-content/uploads/2021/07/Mern-Stack-Developer.png' style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>MERN</Card.Title>
          <Card.Text>
          MERN stands for MongoDB, Express, React, Node, after the four key technologies that make up the stack.
          </Card.Text>
          <a href='/reac12'>
          <Button variant="primary">Solve MCQ</Button>
          </a>
          
        </Card.Body>
      </Card>
      <Card style={{ width: '18rem',height:"30rem"}}>
        <Card.Img variant="top" src='https://webimages.mongodb.com/_com_assets/cms/kuzt9r42or1fxvlq2-Meta_Generic.png' style={{height:'15rem'}}/>
        <Card.Body>
          <Card.Title>MongoDB</Card.Title>
          <Card.Text>
          MongoDB Atlas' document model enables developers to store data as JSON-like objects that resemble objects in application code
          </Card.Text>
          <a href='/mongo'>
          <Button variant="primary">Solve MCQ</Button>
          </a>
          
        </Card.Body>
      </Card> 
    </div>
    </div>
    
  );
}

export default CardExample;
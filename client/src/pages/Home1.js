import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import React  from 'react';
function WithHeaderAndQuoteExample() {
  return (
    <Card className='home1'>
      
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            {' '}
            <h2>Education is not only a ladder of opportunity, but it is also an investment in our future</h2>
            {' '}
          </p>
          <footer className="blockquote-footer">
             <cite title="Source Title"><h2>Ed Markey</h2></cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default WithHeaderAndQuoteExample;
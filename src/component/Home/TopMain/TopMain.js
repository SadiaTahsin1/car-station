import React from 'react';
import {Button} from 'react-bootstrap';
const TopMain = () => {
    return (
       <section>
           <div style={{width:"40%",float:"left",padding:"5%",margin:"0% 5%"}}>
           <h2>We Love Flowers.</h2>
           </div>
           <div style={{width:"40%",float:"left",padding:"5%",margin:"0% 5%"}}>
               <h2>We Love Flowers.</h2><br></br>
               <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure laborum facere magni illo voluptatem provident blanditiis veniam nam, saepe tenetur, magnam dolor. Dolor voluptatibus error numquam deserunt, id quis! Incidunt.</p>
             <Button variant="info">Buy now</Button>
           </div>
       </section>
    );
};

export default TopMain;
import React from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
const ShowSrvice = (props) => {
   
    const {addToCart, s}=props;
    return (
        <div>
                 
        <div className="col-md-3" style={{ margin:"2%"}}>
        <div className="card" style={{ width: '15em' }}>
        <img className="card-img-top"  style={{ width: '12em', height:'200px' }} src={s.pic} alt="Card image cap" />
        <div className="card-body">
        <p className="card-text"><h5 style={{textAlign:"center"}}>{s.name}</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></p>
        <button onClick={()=>addToCart(s.name)}>Add to Cart</button>
        </div>
        </div>
        </div> 
        {/* <div className="col-md-3" style={{ margin:"2%"}}>
        <div className="card" style={{ width: '15em' }}>
        <img className="card-img-top" style={{ width: '12em', height:'200px' }} src={p2} alt="Card image cap" />
        <div className="card-body">
        <p className="card-text"><h5 style={{textAlign:"center"}}>Car Wash</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></p>
        </div>
        </div>
        </div> 
        <div className="col-md-3" style={{ margin:"2%"}}>
        <div className="card" style={{ width: '15em' }}>
        <img className="card-img-top" style={{ width: '12em', height:'200px' }} src={p3} alt="Card image cap" />
        <div className="card-body">
        <p className="card-text"><h5 style={{textAlign:"center"}}>Air Conditioning</h5>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p></p>
        </div>
        </div>
        </div>   */}
        </div>
    );
};

export default ShowSrvice;
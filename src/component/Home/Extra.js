import React from 'react';
import AddService from '../AddService/AddService';

const Admin = () => {
    const onSubmit = ()  => {
     
       alert('Thank you for joining!')
        };
    return (
        <div style={{textAlign:"center",backgroundColor:"mediumorchid"}}>
           <h3>Be a member of our family.</h3>
           <h5>join our email group</h5>
           <form>
      <label>email</label>
      <input type="text" /><br></br>
      
    <input type="submit"  />
    </form>

        </div>
    );
};

export default Admin;
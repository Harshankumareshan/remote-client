import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const [name, setName] = useState('');
  const [path, setPath] = useState('');
  const [icon, setIcon] = useState('');
  const navigate = useNavigate();

  const handleAddApplication = async () => {
    try {
      const response = await fetch('http://localhost:2354/applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
          path,
          icon,
        }),
      });
      if (response.ok) {
        alert('Application added successfully');
        navigate('/');
      } else {
        alert('Failed to add application');
      }
    } catch (error) {
      console.error('Error adding application:', error);
      alert('Failed to add application');
    }
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  return (
    <>
    <div className="background-image" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundImage: 'url(../src/assets/bg.jpg)', backgroundSize: 'cover' }}>
    <div style={{ 
      display: 'flex',
      height: '100vh',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <div style={{ 
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0 20px',
        color:'white',
      }}>
        <h1 style={{fontSize:'4rem'}}>op ezee</h1>
        <h3>www.opezee.com</h3>
        <div 
          style={{ 
            position: 'fixed', 
            bottom: '25px', 
            left: '25px',
            cursor: 'pointer',
            backgroundColor: 'red', border: '1px solid #000000', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', color: 'white', textDecoration: 'none',
          }} 
          onClick={handleHomeClick}
        >
          Home
        </div>
      </div>
      <div style={{ 
        flex: '1',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        padding: '0 20px',
      }}>
        <form style={{ 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'flex-start', 
          width: '100%',
        }}>
          <label style={{ marginBottom: '20px',color:'white',fontSize:'2rem' }}>
            Application Name:<br />
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} style={{ 
    width: '600px', // Adjust width as needed
    height: '40px', // Adjust height as needed
    backgroundColor: '#929494', // Change color as needed
  }}  />
          </label>
          <label style={{ marginBottom: '20px',color:'white',fontSize:'2rem' }}>
            Application Path:<br />
            <input type="text" value={path} onChange={(e) => setPath(e.target.value)} style={{ 
    width: '600px', // Adjust width as needed
    height: '100px', // Adjust height as needed
    backgroundColor: '#929494', // Change color as needed
  }}  />
          </label>
          <label style={{ marginBottom: '20px',color:'white',fontSize:'2rem' }}>
            App Icon Url:<br />
            <input type="text" value={icon} onChange={(e) => setIcon(e.target.value)} style={{ 
    width: '600px', // Adjust width as needed
    height: '40px', // Adjust height as needed
    backgroundColor: '#929494', // Change color as needed
  }}  />
          </label>
          <button type="button" onClick={handleAddApplication} style={{backgroundColor:'#0fb0f5',fontSize:'1.2rem'}}>Add Application</button>
        </form>
      </div>
    </div>
    </div>
    </>
  );
};

export default Settings;

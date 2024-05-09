import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [applications, setApplications] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch('http://localhost:2354/applications')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setApplications(data);
            })
            .catch(error => {
                console.error('Error fetching applications:', error);
            });
    }, []);

    const launchApplication = (appName, appPath) => {
        fetch(`http://localhost:2354/launch/${encodeURIComponent(appName)}`, {
            method: 'GET',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to launch application');
                }
                // Optionally handle successful launch response
            })
            .catch(error => {
                console.error('Error launching application:', error);
            });
    };

    const handleSettingsClick = () => {
        // Navigate to the /settings page
        navigate('/Settings');
    };

    return (
        <div style={{
            margin: 0,
            padding: 0,
            height: '100vh', // Set height to full viewport height
            backgroundImage: "url('../src/assets/bg.jpg')", // Replace with your image path
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'white',
            paddingLeft: '20px', // Add padding for left side
        }}>
            <div style={{marginRight:'100px'}}>
                <h1>op ezee</h1>
                <h3>www.opezee.com</h3>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '10px', marginTop: '20px' }}>
                {applications.map((app, index) => (
                    <div key={app._id} style={{ width: '150px', padding: '10px', boxSizing: 'border-box' }}>
                        <div className="app-container" onClick={() => launchApplication(app.name, app.path)} style={{ textAlign: 'center', }}>
                            <img className="app-icon" src={app.icon} alt={`${app.name}`} style={{ width: '90px', height: '90px', border: '1px solid #ccc', borderRadius: '10px', marginBottom: '10px' }} />
                            <p className="app-name" style={{ textAlign: 'center', color: 'white' }}>{app.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div className="settings-button-container" style={{ position: 'fixed', bottom: '30px', left: '40px' }}>
                <div className="settings-button" onClick={handleSettingsClick} style={{ backgroundColor: 'red', border: '1px solid #000000', borderRadius: '5px', padding: '5px 10px', cursor: 'pointer', color: 'white', textDecoration: 'none' }}>Settings</div>
            </div>
        </div>
    );
}

export default Home;

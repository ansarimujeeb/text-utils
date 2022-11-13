import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, {useState} from 'react'
import Alert from './components/Alert';

function App() {
    const [ mode, setMode] = useState('light');
    const [alert, setAlert] = useState(null);

    const showAlert = (message, type) => {
        setAlert({
            msg: message,
            type : type
        })
        setTimeout(() => {
            setAlert(null)
        }, 1500 )
    }
    const toggleMode = () => {
        if(mode === 'dark') {
            setMode('light');
            document.body.style.backgroundColor = 'white';
            showAlert('Light mode enable','success');
        } else {
            setMode('dark');
            document.body.style.backgroundColor = '#343a40';
            showAlert('Dark mode enable','success');
        }
    }
    return (
    <>
        <Navbar title="TextUtils3" mode={mode} toggleMode={toggleMode}/>
        <div className="container my-3">
        <Alert alert={alert}/>
            <TextForm headingText="Enter the text below" mode={mode} showAlert={showAlert}/>
        </div>
    </>    
    );
}

export default App;

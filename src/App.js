import './App.css';
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
    return (
    <>
        <Navbar title="TextUtils3" />
        <div className="container my-3">
            <TextForm headingText="Enter the text below"/>
            {/* <About /> */}
        </div>
    </>    
    );
}

export default App;

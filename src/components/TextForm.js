import React, {useState} from 'react'

export default function TextForm(props)  {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to Uppercase','success');
    }
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to Lowercase','success');
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert('Copy to clipboard','success');
    }
    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Remove extra space','success');
    }
    const handleClearClick = ()=>{ 
        let newText = '';
        setText(newText);
        props.showAlert('text Clear','success');
    }
    return (
    <>
        <div className='container' style={ { color : props.mode === 'dark' ? 'white' : '#343a40' }}>
            <h1>{props.headingText }</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" style={ { backgroundColor : props.mode === 'dark' ? '#343a40' : 'white', color : props.mode === 'dark' ? 'white' : '#343a40' }}></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
            <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
            <button className='btn btn-primary mx-1' onClick={handleCopy}>Copy Text</button>
            <button className='btn btn-primary mx-1' onClick={handleSpaces}>Remove Spaces</button>
        </div>
        <div className='container my-3' style={ { color : props.mode === 'dark' ? 'white' : '#343a40' }}>
            <h1> Your Text Summary</h1>
            <p> {text.split(" ").length} word and {text.length} characters</p>
            <p> { 0.008 * text.split(" ").length } Minutes to read</p>
            <h2>Preview</h2>
            <p> {text} </p>
        </div>
    </>
    )
}

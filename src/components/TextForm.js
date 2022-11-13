import React, {useState} from 'react'

export default function TextForm(props)  {
    const [text, setText] = useState('');
    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleLoClick = () => {
        console.log('btn click');
        let newText = text.toLowerCase();
        setText(newText);
    }
    const handleOnChange = (event) => {
        setText(event.target.value);
    }
    return (
    <>
        <div className='container'>
            <h1>{props.headingText }</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6" placeholder='Enter text here'></textarea>
            </div>
            <button className='btn btn-primary mx-1' onClick={handleUpClick}>Convert to Upper Case</button>
            <button className='btn btn-primary mx-1' onClick={handleLoClick}>Convert to Lower Case</button>
        </div>
        <div className='container my-3'>
            <h1> Your Text Summary</h1>
            <p> {text.split(" ").length} word and {text.length} characters</p>
            <p> { 0.008 * text.split(" ").length } Minutes to read</p>
            <h2>Preview</h2>
            <p> {text} </p>
        </div>
    </>
    )
}

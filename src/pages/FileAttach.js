// import React from 'react';
// import { useNavigate } from 'react-router-dom';


// const FileUpload = () => {
//     const navigate = useNavigate();

//     const handleClick = (path) => {
//         navigate(path);
//     };
//     return (
//         <div className="file-upload-page">
//             <h1>File Upload</h1>
//             <form>
//                 {/* <label htmlFor="file">לבחירת קובץ:</label><br /> */}
//                 <input type="file" id="file" name="file" /><br /><br />
//                 <button onClick={() => handleClick('./BlurringPage')} type="submit">להעלות</button>
//             </form>
//         </div>
//     );
// }

// export default FileUpload;
//של המורה 
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
    const navigate = useNavigate();

    const handleClick = (path) => {
        navigate(path);
    };
    return (
        <div className="button-container">
            <label htmlFor="ssn">file</label><br />
            <div className="button-container">
                <input type="file" id="file" name="file" /><br /><br />
                <button onClick={() => handleClick('./ProductCard')} to="/upload"  className="button upload-file">התחל</button>
            </div>            
        </div>
    );
}

export default Upload;

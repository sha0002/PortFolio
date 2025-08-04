// import React from 'react';

// const ProgressBars = () => {
//     return (
//         <div className="container mt-4">
//             <h3 className="mb-4">Progress Bars</h3>

//             {/* Progress 1 */}
//             <div className="mb-3">
//                 <label>Task 1</label>
//                 <div className="progress">
//                     <div className="progress-bar" style={{ width: '20%' }}>
//                         20%
//                     </div>
//                 </div>
//             </div>

//             {/* Progress 2 */}
//             <div className="mb-3">
//                 <label>Task 2</label>
//                 <div className="progress">
//                     <div className="progress-bar " style={{ width: '40%', backgroundColor: "pink" }}>
//                         40%
//                     </div>
//                 </div>
//             </div>

//             {/* Progress 3 */}
//             <div className="mb-3">
//                 <label>Task 3</label>
//                 <div className="progress">
//                     <div className="progress-bar bg-info" style={{ width: '60%' }}>
//                         60%
//                     </div>
//                 </div>
//             </div>

//             {/* Progress 4 */}
//             <div className="mb-3">
//                 <label>Task 4</label>
//                 <div className="progress">
//                     <div className="progress-bar bg-warning" style={{ width: '80%' }}>
//                         80%
//                     </div>
//                 </div>
//             </div>

//             {/* Progress 5 */}
//             <div className="mb-3">
//                 <label>Task 5</label>
//                 <div className="progress">
//                     <div className="progress-bar bg-danger" style={{ width: '100%' }}>
//                         100%
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ProgressBars;




import React, { useState, useEffect } from 'react';

const ProgressBar = ({ percentage }) => {
  return (
    <div style={{ width: '200px', height: '20px', border: '1px solid black', position: 'relative' }}>
      <div style={{ width: `${percentage}%`, height: '100%', backgroundColor: 'blue' }}></div>
    </div>
  );
};

const CircularProgress = ({ percentage }) => {
  return (
    <svg width="100" height="100">
      <circle
        cx="50"
        cy="50"
        r="40"
        stroke="blue"
        strokeWidth="5"
        fill="transparent"
        strokeDasharray="251.2"
        strokeDashoffset={`${251.2 - (percentage / 100) * 251.2}`}
      />
    </svg>
  );
};

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev < 100 ? prev + 1 : 100));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h1>Progress Bar</h1>
      <ProgressBar percentage={progress} />
      <h1>Circular Progress</h1>
      <CircularProgress percentage={progress} />
    </div>
  );
};

export default App;

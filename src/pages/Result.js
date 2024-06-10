// import React, { Component } from 'react';

// class Result extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showPopup: false
//     };
//   }

//   togglePopup = () => {
//     this.setState({ showPopup: !this.state.showPopup });
//   }

//   render() {
//     const members = [];
//     for (let i = 1; i <= 20; i++) {
//       members.push(
//         React.createElement('div', { className: 'member', key: i },
//           React.createElement('p', null, `Member ${i}`),
//           React.createElement('button', { onClick: this.togglePopup }, 'For details')
//         )
//       );
//     }

//     return React.createElement('div', { className: 'Result' },
//       React.createElement('div', { className: 'members-container' }, members),
//       this.state.showPopup && React.createElement('div', { className: 'popup' },
//         React.createElement('div', { className: 'popup-inner' },
//           React.createElement('p', null, 'Opened successfully'),
//           React.createElement('button', { onClick: this.togglePopup }, 'Close')
//         )
//       )
//     );
//   }
// }

// export default Result;
//טוב טוב טוב לא למחוק
// import React, { Component } from 'react';

// class Result extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       expandedMember: null
//     };
//   }

//   toggleMember = (index) => {
//     this.setState({ expandedMember: this.state.expandedMember === index ? null : index });
//   }

//   render() {
//     const members = [];
//     for (let i = 1; i <= 50; i++) {
//       const isExpanded = this.state.expandedMember === i;
//       members.push(
//         React.createElement('div', { className: `member ${isExpanded ? 'expanded' : ''}`, key: i },
//           React.createElement('p', null, `Member ${i}`),
//           React.createElement('button', { className: 'arrow-button', onClick: () => this.toggleMember(i) }, '➡️ For details'),
//           isExpanded && React.createElement('div', { className: 'details-text' }, 'Opened successfully')
//         )
//       );
//     }

//     return React.createElement('div', { className: 'Result' },
//       React.createElement('div', { className: 'members-container' }, members)
//     );
//   }
// }

// export default Result;
//טוב טוב טוב לא למחוק



//ניסוי
import React, { useState } from 'react';

// InnerElement component to show name and quantity
const InnerElement = ({ name, quantity, showDetails }) => (
  <div>
    <p>Name: {name}</p>
    {showDetails && <p>Quantity: {quantity}</p>}
  </div>
);

// OuterElement component containing two InnerElement components
const OuterElement = ({ id, showDetails, handleToggleDetails }) => (
  <div className="outer-element">
    <div className="inner-elements">
      <InnerElement name={`Name ${id}A`} quantity={id * 10} showDetails={showDetails} />
      <InnerElement name={`Name ${id}B`} quantity={id * 20} showDetails={showDetails} />
    </div>
    <button onClick={() => handleToggleDetails(id)}>
      {showDetails ? 'Hide details' : 'For details'}
    </button>
  </div>
);

// Main component rendering 20 OuterElement components
const PageWithElements = () => {
  const [openElementId, setOpenElementId] = useState(null);

  const handleToggleDetails = (id) => {
    setOpenElementId(openElementId === id ? null : id);
  };

  const elements = Array.from({ length: 20 }, (_, index) => index + 1);

  return (
    <div className="page">
      {elements.map((id) => (
        <OuterElement
          key={id}
          id={id}
          showDetails={openElementId === id}
          handleToggleDetails={handleToggleDetails}
        />
      ))}
    </div>
  );
};

export default PageWithElements;

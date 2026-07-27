import React from 'react';
import './App.css';

function App() {
  // Heading element
  const element = "Office Space";

  // Office image URL
  const sr = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=500";

  // JSX attribute for image display
  const jsxatt = <img src={sr} width="25%" height="25%" alt="Office Space" />;

  // Single office object
  const ItemName = {
    Name: "DBS",
    Rent: 50000,
    Address: 'Chennai'
  };

  // Logic to select class based on rent threshold
  let colors = [];
  if (ItemName.Rent <= 60000) {
    colors.push('textRed');
  } else {
    colors.push('textGreen');
  }

  // Array of office objects to demonstrate mapping through items
  const officeList = [
    { Name: "DBS", Rent: 50000, Address: "Chennai" },
    { Name: "Regus", Rent: 75000, Address: "Bangalore" },
    { Name: "WeWork", Rent: 55000, Address: "Hyderabad" }
  ];

  return (
    <div style={{ padding: '20px' }}>
      {/* Title & Image */}
      <h1>{element} , at Affordable Range </h1>
      {jsxatt}

      {/* Main Single Item Display (Matches output screenshot) */}
      <h1>Name: {ItemName.Name}</h1>
      <h3 className={colors.join(' ')}>Rent: Rs. {ItemName.Rent}</h3>
      <h3>Address: {ItemName.Address}</h3>

      <hr />

      {/* Office List Loop */}
      <h2>Available Office Spaces List</h2>
      {officeList.map((office, index) => {
        let rentClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';
        return (
          <div key={index} style={{ marginBottom: '15px' }}>
            <h3>Name: {office.Name}</h3>
            <p className={rentClass}><b>Rent: Rs. {office.Rent}</b></p>
            <p>Address: {office.Address}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
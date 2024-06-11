import React from 'react';
import PageHeading from "../components/PageHeading";

export default function Home() {
  const handleAction = () => {
    console.log("Action button clicked");
  };

  return (
   
      <PageHeading
        title="Home"
        action="Create a campaign"
        handleAction={handleAction}
      />

      
 
  );
}

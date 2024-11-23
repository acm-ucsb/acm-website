import React, { useState } from 'react';

import FAQ from './FAQ';
import BranchFAQ from './BranchFAQ';

const ToggleFAQView = () => {
  const [showBranchFAQ, setShowBranchFAQ] = useState(false); // State to track which FAQ to show

  const toggleFAQ = () => {
    setShowBranchFAQ(!showBranchFAQ); // Toggle between true and false
  };

  return (
    <div>
      <button onClick={toggleFAQ}>
        {showBranchFAQ ? 'Show FAQ' : 'Show Branch FAQ'}
      </button>
      {showBranchFAQ ? <BranchFAQ /> : <FAQ />}
    </div>
  );
};

export default ToggleFAQView;

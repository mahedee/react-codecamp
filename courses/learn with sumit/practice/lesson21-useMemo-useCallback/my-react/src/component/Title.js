import React from 'react'

function Title() {
  
    console.log('rendering title...');
    return<h2>useCallback Hook Tutorial</h2>
}

// Memorize or cache title and prevent from re-render
export default React.memo(Title);

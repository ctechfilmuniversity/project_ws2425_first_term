import treeImage from './tree.png'; // Import the image
import React, { useEffect } from 'react';
import { Scrollama, Step } from '@ap.cx/react-scrollama-wrapper';
import './App.css'; // Import your CSS file for styling

const App = () => {
  useEffect(() => {
    const scroller = Scrollama();

    function handleStepEnter(response) {
      const { index } = response;
      // Change color of sticky element based on the index of the step
      const stickyElement = document.querySelector('.sticky-element');
      if (stickyElement) {
        if (index === 0) {
          stickyElement.style.backgroundColor = 'red';
        } else if (index === 1) {
          stickyElement.style.backgroundColor = 'green';
        } else if (index === 2) {
          stickyElement.style.backgroundColor = 'blue';
        }
      }
    }

    function init() {
      scroller
        .setup({
          step: '.step',
          offset: 0.5, // Adjust as needed
          debug: true,
        })
        .onStepEnter(handleStepEnter);
    }

    init();
  }, []);

  return (
    <div className="app-container">
      {/* Content with scrollable sections */}
      <div className="scrollable-content">
        <section className="step">Step 1</section>
        <section className="step">Step 2</section>
        <section className="step">Step 3</section>
      </div>

      {/* Sticky element */}
      <div className="sticky-element">Sticky Element</div>
    </div>
  );
};

export default App;
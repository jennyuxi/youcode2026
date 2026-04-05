import React, { useState } from 'react';

const Forum: React.FC = () => {
  // 1. We now initialize the state with an empty string so the box starts blank.
  const [answer, setAnswer] = useState("");

  // The specific paragraph you want to appear
  const exampleAnswer = "Great question! The biggest barrier to saving institutional memory isn't a lack of willingness; it's the friction of the tools. Traditional exit surveys and spreadsheets often feel like administrative homework, and they demand a level of digital literacy that many of our most experienced, long-term volunteers might not have.";

  // 2. This function fires when the button is clicked, filling the text box.
  const handleButtonClick = () => {
    setAnswer(exampleAnswer);
  };

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gray-50 p-4">
      <div className="w-full max-w-4xl rounded-2xl border border-gray-200 bg-white p-8 shadow-sm md:p-10">
        
        <div className="mb-4 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-gray-500">
          <span>🤝</span>
          <span>PLATFORM ADOPTION — QUESTION 1</span>
        </div>

        <h1 className="mb-6 text-2xl text-gray-900 md:text-3xl" style={{ fontFamily: 'Georgia, serif' }}>
          Why should our organization use this platform instead of just having retiring volunteers fill out an exit survey or update a shared Google Doc?
        </h1>

        <div className="mb-6 rounded-xl bg-[#F4F7F5] p-5 text-sm italic text-gray-600">
          "Think about the friction involved in traditional tools versus our streamlined, conversational approach."
        </div>

        <textarea
          className="mb-8 min-h-[160px] w-full resize-y rounded-xl border border-gray-200 bg-[#F9FAFB] p-5 text-gray-700 placeholder-gray-400 focus:border-[#335C4B] focus:outline-none focus:ring-1 focus:ring-[#335C4B]"
          placeholder="Type your answer here, or use the voice button below..."
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        />

        <div className="flex flex-wrap items-center gap-4">
          {/* 3. We attached an onClick handler to trigger the function above */}
          <button 
            onClick={handleButtonClick}
            className="flex items-center gap-2 rounded-lg bg-[#335C4B] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#27483a]"
          >
            Save & next <span>&rarr;</span>
          </button>
          
          <button className="flex items-center gap-2 rounded-lg border border-[#F0D5C1] bg-[#FFF3EC] px-6 py-2.5 text-sm font-medium text-[#A66C47] transition-colors hover:bg-[#ffe8d9]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
              <line x1="12" x2="12" y1="19" y2="22"></line>
            </svg>
            Answer by voice
          </button>
          
          <button className="rounded-lg border border-gray-200 bg-white px-6 py-2.5 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-50">
            Skip for now
          </button>
        </div>

      </div>
    </div>
  );
};

export default Forum
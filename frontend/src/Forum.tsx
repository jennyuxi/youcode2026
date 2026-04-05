import React from 'react';

const Forum: React.FC = () => {
  // Your provided Q&A data, structured for easy rendering
  const faqs = [
    {
      id: 1,
      question: "Does the retiring volunteer need to download an app or own a smartphone?",
      answer: "Not at all. We designed this specifically for zero digital friction. Volunteers can use a standard landline or a basic cell phone to dial a dedicated local number. The system gently prompts them with questions, and they just talk. For those who are slightly more tech-savvy, WhatsApp audio memos are also an option. No downloads, no passwords, no typing.",
      tags: ["accessibility", "hardware"],
      color: "bg-[#2A4D3E]" 
    },
    {
      id: 2,
      question: "Non-profits deal with sensitive community data. How do you handle privacy and security?",
      answer: "Trust and safety are built into the core of the platform. This is a strictly closed-loop system for internal organizational use—not a public network. We process the audio to extract workflow data (like vendor names or de-escalation tactics), and the AI can be configured to automatically flag or redact sensitive personally identifiable information (PII) before it ever hits the incoming coordinator's dashboard.",
      tags: ["privacy", "security"],
      color: "bg-[#A66C47]" 
    },
    {
      id: 3,
      question: "What exactly happens to the audio after the volunteer hangs up?",
      answer: "Our backend instantly transcribes the audio and runs it through a Natural Language Processing (NLP) model. Instead of just saving a 10-minute voice recording that no one will ever listen to, the AI extracts the entities—who, what, where, and when—and formats them into a clean, searchable 'Community Map'.",
      tags: ["data", "ai process"],
      color: "bg-[#4A5568]"
    },
    {
      id: 4,
      question: "Can this integrate with the tools our non-profit already uses?",
      answer: "Yes. We know that non-profits survive on low-overhead tools and spreadsheets, not massive enterprise servers. The data our platform extracts can be easily exported into universally accessible formats like Google Sheets or simple CSVs. You don't need an IT department to maintain it, and it slides seamlessly into the workflows you already rely on.",
      tags: ["integrations", "export"],
      color: "bg-[#2B6CB0]"
    },
    {
      id: 5,
      question: "BC is diverse, and many of our best volunteers don't speak English as a first language. Will this still work?",
      answer: "Absolutely. Accessibility is a primary design constraint. Our conversational AI supports multilingual transcription and translation. A community leader can share their vital relationship knowledge in Tagalog, Punjabi, or Mandarin, and the system will translate and map those insights into English for the incoming coordinator.",
      tags: ["languages", "translation"],
      color: "bg-[#D69E2E]"
    }
  ];

  // Dummy data to mimic the right sidebar from your screenshot
  const sidebarItems = Array(10).fill({ name: "Charlie", action: "Chat" });

  return (
    <div className="flex min-h-screen flex-col bg-[#F8F9FA] font-sans">
      
      {/* Top Header */}
      <header className="flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white px-6">
        <div className="flex items-center gap-3">
          {/* Logo Placeholder */}
          <div className="flex h-8 w-8 items-center justify-center bg-green-100 text-xl">
            🏢
          </div>
          <span className="text-xl font-bold tracking-widest text-black">BEADB</span>
        </div>
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 text-sm font-semibold text-gray-600">
          SS
        </div>
      </header>

      {/* Main Layout Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Content Area (Grid) */}
        <main className="flex-1 overflow-y-auto p-6 md:p-8">
          <h2 className="mb-6 text-xl font-medium text-gray-900">Frequently Asked Questions</h2>
          
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {faqs.map((faq) => (
              <div key={faq.id} className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md">
                
                {/* Visual Header */}
                <div className={`h-32 w-full ${faq.color} flex items-center justify-center p-4`}>
                   <span className="text-4xl opacity-20">❓</span>
                </div>
                
                {/* Card Content */}
                <div className="flex flex-1 flex-col p-5">
                  {/* Tags */}
                  <div className="mb-3 flex flex-wrap gap-2">
                    {faq.tags.map((tag, index) => (
                      <span key={index} className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Question */}
                  <h3 className="mb-3 text-lg font-bold leading-tight text-gray-900">
                    {faq.question}
                  </h3>
                  
                  {/* Answer */}
                  <p className="text-sm leading-relaxed text-gray-500">
                    {faq.answer}
                  </p>
                  
                  {/* Spacer to push footer to bottom */}
                  <div className="flex-1"></div>

                  {/* Card Footer */}
                  <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-4">
                    <div className="h-8 w-8 rounded-full border border-gray-200 bg-gray-50"></div>
                    <div>
                      <p className="text-xs font-medium text-gray-900">Support Team</p>
                      <p className="text-xs text-gray-500">Official Answer</p>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </main>

        {/* Right Sidebar */}
        <aside className="hidden w-72 overflow-y-auto border-l border-gray-200 bg-white lg:block">
          <div className="flex flex-col">
            {sidebarItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b border-gray-100 px-6 py-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-200 text-lg">
                    👤
                  </div>
                  <span className="text-sm font-medium text-gray-700">{item.name}</span>
                </div>
                <button className="rounded-full bg-gray-900 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-gray-800">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </aside>

      </div>
    </div>
  );
};

export default Forum;
import React from 'react';
import Navbar from './components/navbar.tsx';
import FriendsList from './components/FriendsList.tsx';
import { Link } from 'react-router-dom';

const Forum: React.FC = () => {
  const faqs = [
    {
      id: 1,
      question: "Does the retiring volunteer need to download an app or own a smartphone?",
      answer: "Not at all. We designed this specifically for zero digital friction. Volunteers can use a standard landline or a basic cell phone to dial a dedicated local number. The system gently prompts them with questions, and they just talk. For those who are slightly more tech-savvy, WhatsApp audio memos are also an option. No downloads, no passwords, no typing.",
      tags: ["accessibility", "hardware"]
    },
    {
      id: 2,
      question: "Non-profits deal with sensitive community data. How do you handle privacy and security?",
      answer: "Trust and safety are built into the core of the platform. This is a strictly closed-loop system for internal organizational use—not a public network. We process the audio to extract workflow data (like vendor names or de-escalation tactics), and the AI can be configured to automatically flag or redact sensitive personally identifiable information (PII) before it ever hits the incoming coordinator's dashboard.",
      tags: ["privacy", "security"]
    },
    {
      id: 3,
      question: "What exactly happens to the audio after the volunteer hangs up?",
      answer: "Our backend instantly transcribes the audio and runs it through a Natural Language Processing (NLP) model. Instead of just saving a 10-minute voice recording that no one will ever listen to, the AI extracts the entities—who, what, where, and when—and formats them into a clean, searchable 'Community Map'.",
      tags: ["data", "ai process"]
    },
    {
      id: 4,
      question: "Can this integrate with the tools our non-profit already uses?",
      answer: "Yes. We know that non-profits survive on low-overhead tools and spreadsheets, not massive enterprise servers. The data our platform extracts can be easily exported into universally accessible formats like Google Sheets or simple CSVs. You don't need an IT department to maintain it, and it slides seamlessly into the workflows you already rely on.",
      tags: ["integrations", "export"]
    },
    {
      id: 5,
      question: "BC is diverse, and many of our best volunteers don't speak English as a first language. Will this still work?",
      answer: "Absolutely. Accessibility is a primary design constraint. Our conversational AI supports multilingual transcription and translation. A community leader can share their vital relationship knowledge in Tagalog, Punjabi, or Mandarin, and the system will translate and map those insights into English for the incoming coordinator.",
      tags: ["languages", "translation"]
    }
  ];

  return (
    <div className="flex h-screen flex-col bg-white font-sans">
      
      <Navbar />

      {/* Main Layout Area */}
      <div className="flex flex-1 overflow-hidden">
        
        {/* Left Content Area (Document Layout & Footer) */}
        <main className="flex-1 overflow-y-auto">
          
          {/* Main content constrained to a readable width like the About page */}
          <div className="mx-auto max-w-4xl p-8 md:p-12 lg:p-16">
            <h1 className="mb-10 text-3xl font-bold text-gray-900">Frequently Asked Questions</h1>
            
            {/* Simple stacked layout instead of a grid */}
            <div className="space-y-12">
              {faqs.map((faq) => (
                <div key={faq.id} className="border-b border-gray-100 pb-8 last:border-0 last:pb-0">
                  
                  {/* Question styled like the bold subheadings in your screenshot */}
                  <h2 className="mb-4 text-xl font-bold text-gray-900">
                    {faq.question}
                  </h2>
                  
                  {/* Standard paragraph text for the answer */}
                  <p className="mb-4 text-base leading-relaxed text-gray-800">
                    {faq.answer}
                  </p>
                  
                  {/* Subtle inline tags */}
                  <div className="flex flex-wrap gap-3">
                    {faq.tags.map((tag, index) => (
                      <span key={index} className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                        #{tag}
                      </span>
                    ))}
                  </div>
                  
                </div>
              ))}
            </div>
          </div>

          {/* Footer - Placed at the bottom of the scrollable main content */}
          <footer className="border-t border-gray-300 mt-10 px-6 py-10 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              
              <div>
                <h2 className="text-xl font-bold mb-2">BEADB</h2>
                <p className="text-gray-600"> Built by students for volunteers.</p>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Navigation</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <Link to="/About" className="hover:underline">About</Link>
                  </li>
                  <li>
                    <Link to="/Forum" className="hover:underline">Forum</Link>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold mb-2">Connect</h3>
                <ul className="space-y-1 text-sm text-gray-600">
                  <li>
                    <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="https://chat.vite.dev/" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Discord
                    </a>
                  </li>
                  <li>
                    <a href="https://x.com/vite_js" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      X.com
                    </a>
                  </li>
                  <li>
                    <a href="https://bsky.app/profile/vite.dev" target="_blank" rel="noopener noreferrer" className="hover:underline">
                      Bluesky
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </footer>
        </main>

        {/* Right Sidebar - Static relative to the scrolling main content */}
        <aside className="w-72 border-l border-gray-200 bg-white overflow-y-auto hidden lg:block">
          <FriendsList />
        </aside>

      </div>
    </div>
  );
};

export default Forum;
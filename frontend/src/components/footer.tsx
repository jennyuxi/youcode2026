import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t border-gray-300 mt-24 px-6 py-10 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <div>
          <h2 className="text-xl font-bold mb-2">beaDB</h2>
          <p> Built by students for volunteers.</p>
        </div>

        <div>
          <h3 className="font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
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
          <ul className="space-y-1 text-sm">
            <li>
              <a href="https://github.com/jennyuxi/youcode2026" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://devpost.com/submit-to/28700-youcode-2026/manage/submissions/986496/project-overview" target="_blank">
                Devpost
              </a>
            </li>
            <li>
              <a href="https://docs.google.com/presentation/d/18edp3tC8_WajfX6GeaItMGeufkQ_RxmoaAkyjCwScIc/edit?usp=sharing" target="_blank">
                Slides
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
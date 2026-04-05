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
              <a href="https://github.com/vitejs/vite" target="_blank">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                Bluesky
              </a>
            </li>
          </ul>
        </div>

      </div>
    </footer>
  )
}
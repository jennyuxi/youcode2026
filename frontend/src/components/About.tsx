import React from 'react'
import memoryCrisisGraph from '../assets/memory-crisis.png';
import knowledgeAnchorGraph from '../assets/knowledge-anchor.png';


const About: React.FC = () => {
  return (
    <section className="about-section p-6 max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">About</h1>
      <p className="mb-4">
        The "Memory Crisis" is a term we coined to describe the looming loss of institutional knowledge in the nonprofit sector due to an aging volunteer base. Our research revealed that a small percentage of senior volunteers are responsible for the majority of hours contributed, while younger volunteers, despite their high participation rates, contribute significantly fewer hours. This creates a precarious situation where the departure of a few key senior volunteers could lead to a catastrophic loss of knowledge and operational capacity.
      </p>

      <h2 className="text-2xl font-bold mb-4">Graph 1: The "Memory Crisis" Visualization</h2>
      <img src={knowledgeAnchorGraph} alt="knowledge anchor graph" />
      <p className="mb-4">
        <b>What the data shows:</b> A striking "X-shaped" divergence between the Volunteer Rate (light blue bars) and the Average Annual Hours (dark blue line). Younger demographics (15-19) have the highest participation rates (~66%) but contribute the fewest hours. Conversely, the 75+ demographic has the lowest participation rate (~27%) but contributes the highest volume of hours (230+ per year).
      </p>
      <p className="mb-4">
        <b>What it means:</b> The nonprofit sector is top-heavy. A small "elite" group of senior volunteers is doing the vast majority of the heavy lifting. While youth are willing to show up, they are not yet staying long enough, or aren't being integrated deeply enough, to shoulder the primary operational burden.
      </p>
      <p className="mb-4">
        <b>Why it's relevant:</b> It proves that the sector’s productivity is tied to a demographic nearing exit. If 27% of seniors provide more total impact than 66% of teens, the loss of a single senior volunteer is mathematically more devastating than the loss of several youth volunteers.
      </p>
      
      <h2 className="text-2xl font-bold mb-4">Graph 2: Identifying Knowledge Anchors</h2>
      <img src={memoryCrisisGraph} alt="memory crisis graph" />
      <p className="mb-4">
        <b>What the data shows:</b> This scatter plot maps individual volunteers based on Age and Experience. The color and size represent the Risk Score. We see three distinct "tiers" of volunteers. The "Red Zone" in the top right consists of volunteers who are both older and highly experienced, resulting in high Knowledge Loss Risk scores (150-200+).
      </p>
      <p className="mb-4">
        <b>What it means:</b> These "Knowledge Anchors" are the repositories of institutional memory. They are the ones who know the "unwritten rules," the historical community ties, and the specific nuances of the families being served. Because their score is a product of age and experience, they are the most likely to retire or leave the sector soon.
      </p>
      <p className="mb-4">
        <b>Why it's relevant:</b> This identifies exactly who our technology needs to target. We don't need to capture every volunteer’s data equally; we need to prioritize "harvesting" the knowledge of these red-bubble anchors.
      </p>
    </section>
  )
}

export default About
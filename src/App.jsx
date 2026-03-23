import { useState } from "react";
import { episodeList } from "./data.js";

export default function App() {
  const [episodes] = useState(episodeList)
  const [selectedEpisode, setSelectedEpisode] = useState(null)

  function EpisodeDetails() {
    if (!selectedEpisode) {
      return (
        <section className="details">
          <h2>Episodes Details</h2>
          <p>Select a episode to learn more</p>
        </section>
      )
    } else { 
      return(
        <section className="details">
          <h1>Episode {selectedEpisode.id}</h1>
          <h2>{selectedEpisode.title}</h2>
          <p>{selectedEpisode.description}</p>
          <button>Watch now</button>
        </section>
      )
    };
  }

  function EpisodeList() {
  return (
    <section className="episode">
      <ul className="episode">
        {episodes.map((episode) => (
          <li key={episode.id} onClick={() => setSelectedEpisode(episode)}>
            {episode.title}
          </li>
        ))}
      </ul>
    </section>
  )
}

  return (
    <>
      <header>
        <h1>Episodes</h1>
      </header>
      <main>
        <EpisodeList />
        <EpisodeDetails />
      </main>
    </>
  )

}

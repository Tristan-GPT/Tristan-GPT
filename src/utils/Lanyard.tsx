import { useEffect, useState } from "react";
import { Status } from "./Status";
import './Lanyard.css';

// Credit to @iCrawl (https://github.com/iCrawl) modified by me

export function Lanyard() {
  const [lanyardData, setLanyardData] = useState(null);

  useEffect(() => {
    async function fetchLanyardData() {
      try {
        const response = await fetch("https://api.lanyard.rest/v1/users/705425854825496656");
        const data = await response.json();
        setLanyardData(data.data);
      } catch (error) {
        console.error("Error", error);
      }
    }

    fetchLanyardData();
  }, []);

  if (!lanyardData) {
    return (
        <div className="loading">Chargement...</div>
    )
  }

  return <Status className="mt-6" initialData={lanyardData} />;
}

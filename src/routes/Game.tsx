import { useParams } from "@solidjs/router"
import { createResource } from "solid-js"
import { invoke } from "@tauri-apps/api/tauri"

const fetchGame = async () => {
  const params = useParams()

  const data = await invoke("fetch_game", { id: params.id })
  console.log(data)
}

export default function Game() {
  const params = useParams()
  const [gameData] = createResource(() => params.id, fetchGame)
  
  return (<></>)
}
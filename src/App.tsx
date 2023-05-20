import { Route, Routes } from '@solidjs/router'

import Game from './routes/Game'
import Home from './routes/Home'
import Search from './routes/Search'
import Status404 from './routes/status/404'

export default function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/game/:id" component={Game} />
      <Route path="/*" component={Status404} />
    </Routes>
  )
}

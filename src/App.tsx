import { Route, Routes } from '@solidjs/router'

import Home from './routes/Home'
import Search from './routes/Search'

export default function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
    </Routes>
  )
}

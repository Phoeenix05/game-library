import { Route, Routes } from '@solidjs/router'

import Home from './routes/Home'
import Search from './routes/Search'
import StatusPage_404 from './routes/status/404'

export default function App() {
  return (
    <Routes>
      <Route path="/" component={Home} />
      <Route path="/search" component={Search} />
      <Route path="/*" component={StatusPage_404} />
    </Routes>
  )
}

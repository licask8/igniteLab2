import { Route, Routes} from 'react-router-dom'
import { Event } from './pages/Event'
import { LoginPage } from './pages/Login'


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<LoginPage />} />
            <Route path='/event' element={<Event />} />
            <Route path='/event/lesson/:slug' element={<Event />} />
        </Routes>
    )
}
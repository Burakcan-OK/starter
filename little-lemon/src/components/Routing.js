import { Main } from './sections/Main';
import { Header } from './sections/Header';
import { BookingPage } from './sections/BookingPage';
import { Chicago } from './sections/Chicago';
import { CustomerSays } from './sections/CustomerSays';
import { Routes, Route} from 'react-router-dom';
export function Routing () {
    return(
        <Routes>
            <Route path='/' element={<Header/>} />
            <Route path='/about' element={<Header/>} />
            <Route path='/specials' element={<Main/>} />
            <Route path='/CustomerSays' element={<CustomerSays/>} />
            <Route path='/Chicago' element={<Chicago/>} />
            <Route path='/BookingPage' element={<BookingPage/>} />
        </Routes>
    )
}
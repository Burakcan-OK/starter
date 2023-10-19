import '../../App.css';
import { useReducer } from 'react';
import { BookingForm } from './BookingForm';
import { fetchAPI } from '../../BookingsAPI';

export function BookingPage() {
   function updateTimes(date) {
      return fetchAPI(date)
   }

   const output= fetchAPI(new Date())

   const [availableTimes, dispatch] =useReducer(updateTimes,output)
   return(
    <BookingForm availableTimes={availableTimes} updateTimes={dispatch} />
   )
}
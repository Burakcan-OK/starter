import '../../App.css';
import {useState} from "react"
import { useNavigate } from "react-router-dom";
import {validateEmail} from "../utils"
const DateErrorMessage =() => {
    return(
        <p className='FieldError'>Please choose an appropriate date</p>
    )
}
export function BookingForm (props) {
    const [form, setForm] =useState({
        date:"",
        time:"",
        number:"",
        type:"type",
        name:"",
        surname:"",
        phone:"",
        email:"",
        isTouched: false
    })
    const getIsFormValid = () => {
        return(form.date &&  form.type !=="type"
               && form.name && form.surname && validateEmail(form.email)
        )
    }
    const clearForm=() => {
        setForm({
            ...form,
            date:"",
            time:"",
            number:"",
            type:"type",
            name:"",
            surname:"",
            phone:"",
            email:"",
            isTouched:false
        }
        )
    }
    const handleSubmit= (e) => {
        e.preventDefault()
        clearForm()
    }
    const [finalTime, setFinaTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    )
    function handleDateChange(e) {
        setForm({
            ...form, date: e.target.value
        })
        var stringify = e.target.value
        const date = new Date(stringify)

        props.updateTimes(date)

        setFinaTime(props.availableTimes.map((times) => <option>{times}</option>))
    }
    const navigate = useNavigate();
    const routeChange = () =>{
    navigate("/Confirmation");
  }
    return (
        <>
        <h1 id='book-h1' >Make Your Reservation</h1>
        <form className='booking-form'
            onSubmit={handleSubmit}>
            <>
            <label htmlFor='date' >Choose date</label>
            <input
                type='date'
                id='date'
                value={form.date}
                onChange={handleDateChange}
                onBlur={()=>{
                    setForm({
                        ...form, isTouched:true
                    })
                }}
                 />
                 {form.isTouched ?(<DateErrorMessage/>):null}
            </>
            <label htmlFor='time' >Choose time</label>
            <select id="time" required>
                {finalTime}
            </select>
            <label htmlFor='guests' >Number of guests</label>
            <input 
                value={form.number}
                type='number'
                placeholder='1'
                min={1} max={10}
                id='guests' 
                onChange={e =>{
                    setForm({
                        ...form, number: e.target.value
                    })
                }}/>
            <label htmlFor='occasion' >Occasion</label>
            <select 
                value={form.type} 
                id='occasion' onChange={e =>{
                    setForm({
                        ...form, type: e.target.value
                    })
                }}>
                <option value="type" >Type of occasion</option>
                <option value="birthday" >Birthday</option>
                <option value="anniversary">Anniversary</option>
            </select>
            <label htmlFor='name' >Name<sup>*</sup> </label>
            <input 
                value={form.name}
                type='text'
                id='name' 
                onChange={e =>{
                    setForm({
                        ...form, name: e.target.value
                    })
                }}/>
            <label htmlFor='surname' >Surname</label>
            <input 
                value={form.surname}
                type='text'
                id='surname' 
                onChange={e =>{
                    setForm({
                        ...form, surname: e.target.value
                    })
                }}/>
                <label htmlFor='phone' >Phone number<sup>*</sup> </label>
            <input 
                value={form.phone}
                type='tel'
                id='phone'
                placeholder="(xxx)-xxx-xxxx"
                onChange={e =>{
                    setForm({
                        ...form, phone: e.target.value
                    })
                }}/>
                <label htmlFor='guests' >Email address<sup>*</sup> </label>
            <input 
                value={form.email}
                type='email'
                placeholder='example@gmail.com'
                id='email' 
                onChange={e =>{
                    setForm({
                        ...form, email: e.target.value
                    })
                }}/>
                {}
            <button 
                style={{
                    borderRadius:"10px",
                    maxWidth:"200px",
                    margin:"auto",
                    marginTop:"3%",
                    height:"65%"
                }}
                type='submit' 
                disabled={!getIsFormValid ()}
                onClick={routeChange}
            >Reserve
            </button>
        </form>
        </>
    )
}
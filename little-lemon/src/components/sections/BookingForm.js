import '../../App.css';
import {useState} from "react"
import { useNavigate } from "react-router-dom";

export function BookingForm (props) {
    const [form, setForm] =useState({
        date:"",
        time:"",
        number:"",
        type:"type"
    })
    const getIsFormValid = () => {
        return(form.date &&  form.type !=="type"
        )
    }
    const clearForm=() => {
        setForm({
            ...form,
            date:"",
            time:"",
            number:"",
            type:"type"}
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
        <form className='booking-form'
            onSubmit={handleSubmit}>
            <label htmlFor='date' >Choose date</label>
            <input
                type='date'
                id='date'
                value={form.date}
                onChange={handleDateChange}
                 />
            <label htmlFor='time' >Choose time</label>
            <select id="time" required>
                {finalTime}
            </select>
            {/* <select
                value={form.time}
                id='res-time'
                onChange={finalTime}>
                <option value="17" >17.00</option>
                <option value="18" >18.00</option>
                <option value="19" >19.00</option>
                <option value="20" >20.00</option>
                <option value="21" >21.00</option>
                <option value="22" >22.00</option>
            </select> */}
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
            <button 
                style={{
                    borderRadius:"10px",
                    maxWidth:"200px",
                    margin:"auto",
                    marginTop:"-1%",
                    height:"120%"
                }}
                type='submit' 
                disabled={!getIsFormValid ()}
                onClick={routeChange}
            >Reserve
            </button>
        </form>
    )
}
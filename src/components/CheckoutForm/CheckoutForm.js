/* import { useState } from "react"

const CheckoutForm = ({ onConfirm }) => {

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const handleConfirm = (event) => {
        event.preventDefault()

        const userData = {
            name, phone, email
        }

        onConfirm(userData)
    }

    return (
        <div>
            <form onSubmit={handleConfirm}>
                <label>Nombre:<input placeholder='Nombre' value={name} onChange={({ target }) => setName(target.value)} /></label>
                <label>Telefono:<input placeholder='Telefono' value={phone} onChange={({ target }) => setPhone(target.value)} /></label>
                <label>Email:<input placeholder='Email' value={email} onChange={({ target }) => setEmail(target.value)} /></label>
                <button type='submit'>create Order</button>
            </form>

        </div>
    )
}

export default CheckoutForm
 */




import { useForm } from 'react-hook-form'


const CheckoutForm = ({ onConfirm }) => {

    const { register, handleSubmit, formState: { errors } } = useForm()



    return (

        <>
            <form onSubmit={handleSubmit((userData) => onConfirm(userData))} className='flex flex-col mt-10 w-full px-6 md:w-96'>

                <label htmlFor='name' className='text-white text-2xl'>Name:</label>
                <input placeholder='Name' type='text' className='bg-white text-md'
                    {...register('name',
                        {
                            required: { value: true, message: "This field is required." },
                            minLength: { value: 3, message: "The name must have a minimum of 3 characters." },
                            maxLength: { value: 20, message: "The name must have a maximum of 20 characters." },
                            pattern: { value: /^[A-Za-z\u00B4]+|[A-Za-z]+\u00B4[A-Za-z]+$/, message: "Invalid character." }
                        })} />
                <p className='text-red-600 text-sm'>{errors.name?.message} </p>

                <label htmlFor='email' className='text-white text-2xl'>Email:</label>
                <input type='email' placeholder='Email' className='bg-white text-md'
                    {...register('email',
                        {
                            required: { value: true, message: "This field is required." },
                            minLength: { value: 3, message: "The email must have a minimum of 3 characters." },
                            maxLength: { value: 35, message: "The email must have a maximum of 35 characters." },
                            pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/, message: "Invalid character." }
                        })} />
                <p className='text-red-600 text-sm'>{errors.email?.message} </p>


                <label htmlFor='phone' className='text-white text-2xl'>Phone:</label>

                <input type='tel' placeholder='Phone' className='bg-white text-md'
                    {...register('phone',
                        {
                            required: { value: true, message: "This field is required." },
                            minLength: { value: 3, message: "The phone must have a minimum of 3 numbers." },
                            maxLength: { value: 18, message: "The phone must have a maximum of 18 numbers." }
                        })} />
                <p className='text-red-600 text-sm'>{errors.phone?.message} </p>

                <input className='text-white text-xl items-center jusfify-center h-10 border rounded mt-4 bg-violet-700' type='submit' />
            </form>


        </>


    )
}

export default CheckoutForm;

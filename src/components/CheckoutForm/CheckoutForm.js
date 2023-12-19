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
            <form onSubmit={handleSubmit((userData) => onConfirm(userData))} className='flex flex-col mt-10 w-96'>

                <label htmlFor='name' className='text-white text-2xl'>Name:</label>
                <input placeholder='Name' type='text' className='bg-white text-md'
                    {...register('name',
                        {
                            required: {
                                value: true,
                                message: "Este campo es requerido",
                            }
                        })} />
                <p className='text-red-600 text-sm'>{errors.name?.message} </p>

                <label htmlFor='email' className='text-white text-2xl'>Email:</label>
                <input type='email' placeholder='Email' className='bg-white text-md'
                    {...register('email',
                        {
                            required: {
                                value: true,
                                message: "Este campo es requerido",
                            }
                        })} />
                <p className='text-red-600 text-sm'>{errors.email?.message} </p>


                <label htmlFor='phone' className='text-white text-2xl'>Phone:</label>

                <input type='tel' placeholder='Phone' className='bg-white text-md'
                    {...register('phone',
                        {
                            required: {
                                value: true,
                                message: "Este campo es requerido",
                            }
                        })} />
                <p className='text-red-600 text-sm'>{errors.phone?.message} </p>

                <input className='text-white border rounded mt-4' type='submit' />
            </form>


        </>


    )
}

export default CheckoutForm;

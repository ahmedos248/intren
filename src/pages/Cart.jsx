import React from 'react'
import { useSelector } from 'react-redux'
const Cart = () => {
    const cartItems = useSelector((state) => state.cart.products);
    return (
        <div className=''>
            {cartItems.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <div className='grid grid-cols-7 gap-6'>
                    <div className='flex flex-col gap-8 col-span-5'>
                        <h3 className='text-xl font-bold'>SHOPPING CART</h3>

                        {cartItems.map((item) => (
                            <div key={item.id} className='bg-neutral-100 rounded-lg max-h-96 overflow-hidden'>
                                <div className=' flex justify-between p-2 '>
                                    <div className='w-[40%] md:w-[20%] lg:w-[20%]'>
                                        <img
                                            src={
                                                item.image
                                                    ? process.env.PUBLIC_URL + item.image
                                                    : process.env.PUBLIC_URL + '/placeholder.jpg'
                                            }
                                            alt={item.title}
                                            className=" max-h-80 object-cover mb-3 rounded-md"
                                        />
                                    </div>
                                    <div >
                                        <div className='flex self-start justify-between lg:gap-32 md:gap-20 gap-8 font-bold  '>
                                            <p>Price $</p>
                                            <p>Quantity </p>
                                            <p>Total $</p>
                                        </div>
                                        <div className='flex my-9 justify-between'>
                                            <p>{item.price.toFixed(2)}$</p>
                                            <p>{item.quantity}</p>
                                            <p>{item.totalPrice.toFixed(2)}$</p>
                                        </div>
                                    </div>

                                    <i className="fa-solid fa-trash text-red-500 cursor-pointer text-lg"></i>
                                </div>
                                <div className='p-2 bg-slate-200'>
                                    <h2 className='text-lg font-bold'>{item.title}</h2>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className='col-span-2'>
                    </div>
                </div>
            )}
        </div>

    )
}

export default Cart

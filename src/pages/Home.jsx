import FashionHome from '../components/home/FashionHome'

const Home = () => {
    return (
        <section>
            <div className='relative w-full h-[600px] overflow-hidden rounded-lg p-0'>
                <div className='absolute inset-0 w-full h-full bg-gradient-to-r from-black/5 to-black/40'></div>
                <img src="images/hero.png" alt="" className='object-cover w-full h-full' />
                <div className='absolute z-10 bottom-0 right-0 w-fit h-fit py-6 space-y-5'>
                    <h1 className='relative text-6xl font-bold text-white'>Step into Style</h1>
                    <p className='lg:text-xl text-white'>Discover the latest trends and exclusive collections that define your unique fashion statement.</p>
                </div>
            </div>
            <FashionHome />
        </section>
    )
}

export default Home

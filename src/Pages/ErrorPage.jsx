
import { Link, useRouteError } from 'react-router-dom';
import errorGif from '../assets/home/error.gif';

const ErrorPage = () => {
    const { error, status } = useRouteError();
    return (
        <section className='flex items-center h-screen p-16 bg-gray-100 text-gray-900'>
            <div className='container flex gap-10 items-center justify-center px-5 mx-auto my-8'>
                <div>
                   
                        <img className='w-[600px] h-[600px] object-cover object-center' src={errorGif} alt="error" />
                   
                </div>
                <div className='max-w-md text-center'>
                    <h2 className='mb-8 font-extrabold text-8xl text-yellow-500'>
                        <span className='sr-only'>Error</span>
                        {status || 404}
                    </h2>
                    <p className='text-2xl font-semibold md:text-3xl text-red-800 mb-8'>
                        {error?.message}
                    </p>
                    <Link to='/'>
                    <button
                                className="bg-[#88d5d0] hover:bg-[#b9dbdb] text-gray-800 font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Back to Homepage
                            </button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default ErrorPage;
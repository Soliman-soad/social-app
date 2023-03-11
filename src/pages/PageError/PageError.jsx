import React from 'react';
import { FaEarlybirds } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const PageError = () => {
    return (
        <section className="flex items-center h-full p-16 bg-gray-50 text-gray-800">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-gray-400">
				<span className="sr-only">Error</span><span className='flex justify-center'>4<FaEarlybirds/>4</span>
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-600">But dont worry, you can find plenty of other things on our page homepage.</p>
			<Link rel="noopener noreferrer" to="/" className="px-8 py-3 font-semibold rounded bg-sky-600 text-gray-50">Back to homepage</Link>
		</div>
	</div>
</section>
    );
};

export default PageError;
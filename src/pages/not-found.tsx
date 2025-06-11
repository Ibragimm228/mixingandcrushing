export function NotFoundPage() {
	return (
		<>
			<section className='min-h-screen flex items-center justify-center bg-gray-50'>
				<div className='text-center px-4'>
					<h1 className='text-9xl font-bold text-gray-800'>404</h1>
					<h2 className='text-2xl font-semibold text-gray-600 mt-4'>
						Page Not Found
					</h2>
					<p className='text-gray-500 mt-2 mb-8'>
						The page you're looking for doesn't exist or has been moved.
					</p>
					<a href='/'>
						<button>Return to Home</button>
					</a>
				</div>
			</section>
		</>
	)
}

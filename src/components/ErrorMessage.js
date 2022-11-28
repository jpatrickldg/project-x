const ErrorMessage = (props) => {
  return (
    <div className='h-screen flex items-center justify-center bg-neutral-900 text-gray-200'>
      <div>
        <h2>Something went wrong. Please try again later.</h2>
        <h2 className='mt-2 text-red-600 uppercase tracking-wider'>{props.error}</h2>
      </div>
    </div>
  )
}

export default ErrorMessage
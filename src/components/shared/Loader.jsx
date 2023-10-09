import { ScaleLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div
      className='
      h-[70vh]
      flex 
      flex-col 
      justify-center
      items-center 
    '
    >
      <ScaleLoader size={100} color='#C29958' />
    </div>
  )
}

export default Loader
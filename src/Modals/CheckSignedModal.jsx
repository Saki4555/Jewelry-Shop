import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default function CheckSignedModal({isOpen, setIsOpen}) {

  function closeModal() {
    setIsOpen(false)
  }



  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium text-center leading-6 text-gray-900"
                  >
                    You have to Login to buy Jewelries
                  </Dialog.Title>
                 <div className='flex gap-5 mt-4 justify-center'>
                    <Link to='/login'><button className='btn btn-primary btn-sm'>Login now</button></Link>
                    <button onClick={closeModal} className='btn btn-error btn-sm text-white'>cancel</button>
                 </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}

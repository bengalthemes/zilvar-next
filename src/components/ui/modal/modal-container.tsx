import { Fragment } from 'react';
import dynamic from 'next/dynamic';
import { useModal, MODAL_VIEW } from '@/components/ui/modal/modal-context';
import { Dialog, Transition } from '@headlessui/react';

const ContactModal = dynamic(
  () => import('@/components/contact/contact-modal')
);
const PortfolioModal = dynamic(
  () => import('@/components/portfolio/portfolio-modal')
);

function renderModalContent(view: MODAL_VIEW | string) {
  switch (view) {
    case 'CONTACT_MODAL':
      return <ContactModal />;
    case 'PORTFOLIO_MODAL':
      return <PortfolioModal />;
    default:
      return null;
  }
}

export default function ModalContainer() {
  const { view, isOpen, closeModal } = useModal();

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 cursor-pointer bg-dark bg-opacity-60 backdrop-blur dark:bg-opacity-80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-auto overflow-hidden text-left align-middle transition-all transform">
                  {view && renderModalContent(view)}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

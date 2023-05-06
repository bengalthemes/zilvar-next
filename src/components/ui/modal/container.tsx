import cn from 'classnames';
import { Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useModal, MODAL_VIEW } from '@/components/ui/modal/context';
import { Dialog, Transition } from '@headlessui/react';

const ContactModal = dynamic(() => import('@/components/contact/ContactModal'));
const PortfolioModal = dynamic(
  () => import('@/components/portfolio/PortfolioModal')
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
  const router = useRouter();
  const { view, isOpen, closeModal } = useModal();

  useEffect(() => {
    // close search modal when route change
    router.events.on('routeChangeStart', closeModal);
    return () => {
      router.events.off('routeChangeStart', closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-x-hidden overflow-y-auto p-4"
        onClose={closeModal}
        // dir={dir}
      >
        <div className="min-h-screen w-[calc(100vw-32px)] text-center">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay
              className="fixed inset-0 z-40 cursor-pointer bg-dark bg-opacity-60 backdrop-blur dark:bg-opacity-80"
              onClick={() => closeModal()}
            />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className="inline-block h-screen align-middle"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-110"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-110"
          >
            <div className="text-start relative z-50 inline-block min-h-screen w-full transform overflow-hidden align-middle transition-all min-h-[auto] w-auto">
              <div className="relative flex min-h-screen items-center overflow-hidden block min-h-[auto] justify-center">
                {view && renderModalContent(view)}
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
}

import { Fragment, useEffect } from 'react';
import dynamic from 'next/dynamic';
import { DRAWER_VIEW, useDrawer } from './drawer-context';
import { Transition, Dialog } from '@headlessui/react';

const AboutSidebarView = dynamic(
  () => import('@/components/about/about-sidebar-view')
);
const MobileDrawerMenu = dynamic(
  () => import('@/components/ui/mobile-drawer-menu')
);

function renderDrawerContent(view: DRAWER_VIEW | string) {
  switch (view) {
    case 'MOBILE_MENU':
      return <MobileDrawerMenu />;
    default:
      return <AboutSidebarView />;
  }
}

export default function DrawersContainer() {
  const { view, isOpen, closeDrawer } = useDrawer();
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-40 overflow-hidden"
        onClose={closeDrawer}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-300"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 transition-opacity cursor-pointer bg-dark bg-opacity-70 backdrop-blur" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="transform transition ease-in-out duration-300"
          enterFrom="translate-x-full"
          enterTo="translate-x-0"
          leave="transform transition ease-in-out duration-300"
          leaveFrom="translate-x-0"
          leaveTo="translate-x-full"
        >
          <div className="fixed inset-y-0 right-0 flex max-w-full">
            <div className="w-screen max-w-[420px]">
              <div className="flex flex-col h-full bg-white shadow-drawer dark:bg-gray-900">
                {view && renderDrawerContent(view)}
              </div>
            </div>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

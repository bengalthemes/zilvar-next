import cn from "classnames";
import { Fragment, useEffect } from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useModal, MODAL_VIEW } from "@/components/ui/modal/context";
import { Dialog, Transition } from "@headlessui/react";
// dynamic imports
const ContactModal = dynamic(() => import("@/components/contact/ContactModal"));

function renderModalContent(view: MODAL_VIEW | string) {
  switch (view) {
    case "CONTACT_MODAL":
      return <ContactModal />;
    case "PORTFOLIO_MODAL":
      return <div />;
    default:
      return null;
  }
}

export default function ModalContainer() {
  const router = useRouter();
  const { view, isOpen, closeModal } = useModal();

  useEffect(() => {
    // close search modal when route change
    router.events.on("routeChangeStart", closeModal);
    return () => {
      router.events.off("routeChangeStart", closeModal);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full p-4 overflow-x-hidden overflow-y-auto text-center sm:p-6 lg:p-8 xl:p-10 3xl:p-12"
        onClose={closeModal}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0 z-40 bg-gray-700 cursor-pointer bg-opacity-60 backdrop-blur" />
        </Transition.Child>

        {/* This element is to trick the browser into centering the modal contents. */}
        {/* {view && view !== "SEARCH_VIEW" && (
          <span className="inline-block h-full align-middle" aria-hidden="true">
            &#8203;
          </span>
        )} */}

        {/* This element is need to fix FocusTap headless-ui warning issue */}
        <div className="sr-only">
          {/* <Button
            size="small"
            color="gray"
            shape="circle"
            onClick={closeModal}
            className="opacity-50 hover:opacity-80 "
          >
            <Close className="h-auto w-[13px]" />
          </Button> */}
        </div>

        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0 scale-105"
          enterTo="opacity-100 scale-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-105"
        >
          <div className="relative z-50 inline-block align-middle">
            {view && renderModalContent(view)}
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
}

import dynamic from "next/dynamic";
import Modal from "@/components/ui/modal/modal";
import { useModalAction, useModalState } from "./modal.context";

const ContactModal = dynamic(() => import("@/components/contact/ContactModal"));

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();
  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === "PORTFOLIO_MODAL" && <div />}
      {view === "CONTACT_MODAL" && <ContactModal />}
    </Modal>
  );
};

export default ManagedModal;

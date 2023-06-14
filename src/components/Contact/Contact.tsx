import { useModal } from '@/components/ui/modal/modal-context';
import Button from '@/components/ui/button';

export default function Contact() {
  const { openModal } = useModal();
  return (
    <section className="bg-white-smoke dark:bg-dark-smoke py-[100px] md:py-28 lg:py-32 xl:py-[150px]">
      <div className="container">
        <div className="max-w-[700px] mx-auto text-center lg:pt-3 lg:pb-5">
          <div className="tracking-[0.5px] leading-relaxed flex items-center dark:text-white justify-center mb-4 md:mb-6 pb-0.5 md:pb-0 text-black font-bold text-sm">
            Gat a Project?
          </div>
          <h2 className="text-[32px] font-extrabold leading-tight mb-6 md:mb-8 pb-1 md:pb-0.5 sm:text-[40px] md:text-5xl lg:text-[56px]">
            <span className="text-stroke-1">Let&apos;s Work</span> Together!
          </h2>
          <Button onClick={() => openModal('CONTACT_MODAL')} variant="contact">
            Let&apos;s Talk
          </Button>
        </div>
      </div>
    </section>
  );
}

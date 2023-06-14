import { Portfolio } from '@/types';
import Image from 'next/image';
import AnchorLink from '../ui/anchor-link';
import { useModal } from '../ui/modal/modal-context';
import { HiXMark } from 'react-icons/hi2';

export default function PortfolioModal() {
  const { data, closeModal } = useModal();
  const {
    title,
    image,
    type,
    category,
    clientName,
    publishedDate,
    tags,

    previewLink,
  } = data;
  return (
    <div className="w-[1200px]">
      <div className="relative flex flex-col w-full bg-white rounded-md dark:bg-gray-900">
        <div className="relative p-4 2xl:p-12 xl:p-8 lg:p-7 md:p-5">
          <button
            type="button"
            className="absolute z-50 flex items-center justify-center text-xl w-9 h-9 ltr:right-4 rtl:left-4 top-4 ltr:md:right-1 rtl:md:left-1 md:top-1 ltr:lg:right-4 rtl:lg:left-4 lg:top-4 ltr:xl:right-6 rtl:xl:left-6 xl:top-5 md:text-2xl hover:text-gray-700 dark:text-white dark:text-opacity-50 dark:hover:text-opacity-90"
            onClick={closeModal}
          >
            <HiXMark />
          </button>
          <div className="flex flex-col md:flex-row">
            <div className="flex md:w-[58.5%] lg:w-[56%]">
              <div className="inline-flex overflow-hidden rounded-md bg-slate-300 relative w-full aspect-[1/1.16]">
                <Image
                  src={image.thumbnail}
                  alt={title}
                  fill
                  className="object-cover transition-opacity hover:opacity-90"
                />
              </div>
            </div>
            <div className="grow pt-9 md:pt-0 ltr:md:pl-8 ltr:lg:pl-10 ltr:xl:pl-12 rtl:md:pr-8 rtl:lg:pr-10 rtl:xl:pr-12">
              <h2 className="text-xl mb-1 ltr:md:pr-5 rtl:md:pl-5 md:text-[22px] lg:text-[28px] lg:mb-1.5 xl:text-[32px] font-semibold leading-tight">
                {title}
              </h2>
              <div className="italic text-gray-600 text-sm md:text-[15px] lg:text-base pt-px dark:text-gray-500">
                {category}
              </div>
              <ul className="text-gray-800 dark:text-gray-200 text-sm pt-10 md:text-[15px] md:pt-8 lg:text-base lg:pt-9 xl:pt-12">
                {clientName && (
                  <li className="font-medium leading-relaxed mb-7 md:mb-6 lg:mb-8 xl:mb-10 pb-0.5">
                    <span className="block pb-0.5 lg:pb-1 text-sm text-gray-500 uppercase dark:text-gray-400">
                      CLIENT
                    </span>
                    {clientName}
                  </li>
                )}
                {publishedDate && (
                  <li className="font-medium leading-relaxed mb-7 md:mb-6 lg:mb-8 xl:mb-10 pb-0.5">
                    <span className="block pb-0.5 lg:pb-1 text-sm text-gray-500 uppercase dark:text-gray-400">
                      PUBLISHED
                    </span>
                    {publishedDate}
                  </li>
                )}
                {previewLink?.label && (
                  <li className="font-medium leading-relaxed mb-7 md:mb-6 lg:mb-8 xl:mb-10 pb-0.5">
                    <span className="block pb-0.5 lg:pb-1 text-sm text-gray-500 uppercase dark:text-gray-400">
                      Preview
                    </span>
                    <AnchorLink
                      href={previewLink.URL ? previewLink.URL : '#'}
                      className="hover:text-black dark:hover:text-white"
                    >
                      {previewLink.label}
                    </AnchorLink>
                  </li>
                )}

                {tags?.length > 0 && (
                  <li className="font-medium leading-relaxed mb-7 md:mb-6 lg:mb-8 xl:mb-10 pb-0.5">
                    <span className="block pb-0.5 lg:pb-1 text-sm text-gray-500 uppercase dark:text-gray-400">
                      Tags
                    </span>
                    <div className="flex flex-wrap">
                      {tags.map((tag: string, idx: number) => (
                        <div
                          key={idx}
                          className="text-[15px] hover:text-black dark:hover:text-white inline-block after:content-[','] last:after:content-[''] after:pr-2 last:after:pr-0 after:relative after:-right-0.5 cursor-pointer"
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </li>
                )}
                <li className="relative pt-9 mt-9 lg:pt-12 lg:mt-12 xl:mt-[70px] xl:pt-[74px] before:absolute before:top-0 before:z-10 before:w-[70px] before:h-px before:bg-black font-medium leading-relaxed dark:before:bg-white">
                  <span className="block pb-0.5 lg:pb-1 text-sm text-gray-500 uppercase dark:text-gray-400">
                    Share
                  </span>
                  <div className="pt-1 flex flex-wrap -m-1.5 lg:-m-0.5 lg:text-right">
                    <a
                      className="text-sm p-1.5 justify-center items-center inline-flex lg:m-0.5 xl:m-1 hover:text-black dark:hover:text-white"
                      href="#"
                    >
                      <em className="fab fa-facebook-f"></em>
                    </a>
                    <a
                      className="text-sm p-1.5 justify-center items-center inline-flex lg:m-0.5 xl:m-1 hover:text-black dark:hover:text-white"
                      href="#"
                    >
                      <em className="fab fa-twitter"></em>
                    </a>
                    <a
                      className="text-sm p-1.5 justify-center items-center inline-flex lg:m-0.5 xl:m-1 hover:text-black dark:hover:text-white"
                      href="#"
                    >
                      <em className="fab fa-linkedin-in"></em>
                    </a>
                    <a
                      className="text-sm p-1.5 justify-center items-center inline-flex lg:m-0.5 xl:m-1 hover:text-black dark:hover:text-white"
                      href="#"
                    >
                      <em className="fab fa-pinterest"></em>
                    </a>
                    <a
                      className="text-sm p-1.5 justify-center items-center inline-flex lg:m-0.5 xl:m-1"
                      href="#"
                    >
                      <em className="fab fa-instagram"></em>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-12 md:pt-11 lg:pt-14">
            <h3 className="mb-3.5 text-lg font-semibold lg:text-xl">
              Project Details:
            </h3>
            <div className="prose prose-p:text-sm prose-p:leading-loose md:prose-p:text-[15px] prose-p:mb-5 last:prose-p:mb-0 max-w-full lg:prose-p:mb-6 prose-p:text-body dark:prose-p:text-dark-base">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse,
                nulla similique maiores maxime delectus architecto eius harum
                libero ea! Facere accusantium, quam alias quia vero qui aliquam
                doloribus, perspiciatis odio ratione, sed distinctio unde
                obcaecati? Pariatur porro quasi dicta, perspiciatis possimus
                expedita, corporis repellendus, tenetur similique libero et
                dolorum officiis quod eveniet. Delectus sequi sint aperiam
                corporis quis, doloremque consectetur fugit veniam voluptatem
                porro nesciunt distinctio nostrum! Quidem, porro totam?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                unde, perferendis velit deleniti tempore commodi porro minus
                consequatur illo ut, repellendus non iste assumenda saepe, ad
                eum obcaecati. Beatae, quae.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
                quaerat saepe dolores nihil, unde voluptatibus veniam sed?
                Quaerat temporibus necessitatibus id tempora est, voluptate nam
                quod sed. Natus voluptates, qui iure est cupiditate illo magni
                quae repudiandae. Fuga dolores accusantium tempora optio
                architecto. Porro necessitatibus incidunt enim, neque placeat
                laboriosam.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

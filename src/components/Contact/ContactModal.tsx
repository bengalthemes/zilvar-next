import React from 'react';
import Input from '../ui/forms/input';

export default function ContactModal() {
  return (
    <div className="w-[1072px]">
      <div className="relative w-full bg-white rounded-md dark:bg-gray-900">
        <div className="flex items-center justify-between p-4 border-b border-gray-150 dark:border-gray-750 md:px-6 md:py-5 lg:py-[22px] lg:px-8">
          <h2 className="tracking-[1px] word-spacing-2 leading-snug font-bold text-2xl md:text-3xl">
            Get In <span className="text-stroke-1">Touch</span>
          </h2>
          <button
            type="button"
            className="text-xl md:text-2xl modalToggle hover:text-gray-700 dark:text-white dark:text-opacity-50 dark:hover:text-opacity-90"
          >
            <em className="fa-solid fa-xmark"></em>
          </button>
        </div>
        <div className="px-4 py-6 md:py-7 md:px-6 lg:py-10 lg:px-8">
          <div className="flex flex-wrap -mx-3.5 items-start">
            <div className="contact-form-area md:w-7/12 shrink-0 px-3.5 w-full">
              <form
                className="flex flex-col lg:grid lg:grid-cols-2 gap-x-6 lg:gap-y-4 gap-y-1.5 md:gap-y-2"
                id="contact_form"
              >
                <Input />
                {/* <div className="pb-0.5">
                  <div className="relative mb-1">
                    <input
                      className="h-11 rounded border border-gray-150 placeholder:tracking-widest placeholder:text-gray-600 text-sm text-black ltr:pl-14 rtl:pr-14 w-full pr-3 py-1.5 font-normal bg-white formControl dark:bg-gray-900 dark:border-gray-750 focus:border-black dark:focus:border-gray-300 dark:text-white dark:placeholder:text-gray-500"
                      id="form_name"
                      name="name"
                      type="text"
                      placeholder="Name"
                    />
                    <div className="absolute w-11 text-base h-[calc(100%-2px)] ltr:border-r rtl:border-l border-gray-150 top-px rtl:rounded-tr ltr:rounded-tl ltr:rounded-bl rtl:rounded-br dark:border-gray-750 ltr:left-px rtl:right-px flex items-center justify-center p-1 text-gray-600 bg-gray-50 bg-opacity-40 dark:bg-dark-100 dark:text-gray-300">
                      <em className="fa-solid fa-user"></em>
                    </div>
                  </div>
                </div> */}

                <div className="pb-0.5">
                  <div className="relative mb-1">
                    <input
                      className="h-11 rounded border border-gray-150 placeholder:tracking-widest placeholder:text-gray-600 text-sm text-black ltr:pl-14 rtl:pr-14 w-full pr-3 py-1.5 font-normal bg-white formControl dark:bg-gray-900 dark:border-gray-750 focus:border-black dark:focus:border-gray-300 dark:text-white dark:placeholder:text-gray-500"
                      id="form_email"
                      name="email"
                      type="email"
                      placeholder="Email"
                    />
                    <div className="absolute w-11 h-[calc(100%-2px)] ltr:border-r rtl:border-l border-gray-150 top-px rtl:rounded-tr ltr:rounded-tl ltr:rounded-bl rtl:rounded-br dark:border-gray-750 ltr:left-px rtl:right-px flex items-center justify-center text-base p-1 text-gray-600 bg-gray-50 bg-opacity-40 dark:bg-dark-100 dark:text-gray-300">
                      <em className="fa-solid fa-at"></em>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 pb-0.5">
                  <div className="relative mb-1">
                    <input
                      className="h-11 rounded border border-gray-150 placeholder:tracking-widest placeholder:text-gray-600 text-sm text-black ltr:pl-14 rtl:pr-14 w-full pr-3 py-1.5 font-normal bg-white formControl dark:bg-gray-900 dark:border-gray-750 focus:border-black dark:focus:border-gray-300 dark:text-white dark:placeholder:text-gray-500"
                      id="form_packages"
                      name="subject"
                      type="text"
                      placeholder="Subject"
                    />
                    <div className="absolute w-11 text-base h-[calc(100%-2px)] ltr:border-r rtl:border-l border-gray-150 top-px rtl:rounded-tr ltr:rounded-tl ltr:rounded-bl rtl:rounded-br dark:border-gray-750 ltr:left-px rtl:right-px flex items-center justify-center p-1 text-gray-600 bg-gray-50 bg-opacity-40 dark:bg-dark-100 dark:text-gray-300">
                      <em className="fa-solid fa-cube"></em>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 pb-0.5">
                  <div className="relative flex mb-1">
                    <textarea
                      className="min-h-[120px] rounded border border-gray-150 text-sm text-black ltr:pl-14 rtl:pr-14 w-full pr-3 py-2.5 font-normal bg-white placeholder:tracking-widest placeholder:text-gray-600 formControl dark:bg-gray-900 dark:border-gray-750 focus:border-black dark:focus:border-gray-300 dark:text-white dark:placeholder:text-gray-500"
                      id="form_message"
                      name="message"
                      placeholder="Message"
                    ></textarea>
                    <div className="absolute w-11 h-[calc(100%-2px)] ltr:border-r rtl:border-l border-gray-150 top-px rtl:rounded-tr ltr:rounded-tl ltr:rounded-bl rtl:rounded-br dark:border-gray-750 ltr:left-px rtl:right-px flex items-start justify-center text-base px-1 pt-3 pb-2.5 text-gray-600 bg-gray-50 bg-opacity-40 dark:bg-dark-100 dark:text-gray-300">
                      <em className="fa-solid fa-envelope"></em>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 text-right form-group-button">
                  <button
                    type="submit"
                    className="w-full btn btn-secondary !p-4"
                  >
                    SEND IT
                  </button>
                </div>
              </form>
            </div>
            <div className="md:w-5/12 shrink-0 px-3.5 mt-6 md:mt-0 w-full">
              <div className="h-full p-3 bg-white rounded-lg shadow-map dark:bg-dark-100 dark:shadow-mapDark">
                <iframe
                  title="Contact Map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4562.753041141002!2d-118.80123790098536!3d34.152323469614075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80e82469c2162619%3A0xba03efb7998eef6d!2sCostco+Wholesale!5e0!3m2!1sbn!2sbd!4v1562518641290!5m2!1sbn!2sbd"
                  className="rounded-md h-[310px] md:h-full lg:h-[310px] block relative w-full"
                  // allowfullscreen
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

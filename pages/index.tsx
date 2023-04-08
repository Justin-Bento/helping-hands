import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function index() {
  return (
    <>
      <Appbar />
      <main className="my-16 wrapper">
        <Hero />
      </main>
      <Footer />
    </>
  )
}
function Hero() {
  return (
    <>
      <section className="">
        <div className="relative w-full h-[70vh] ">
          <div className="absolute inset-0 bg-blue-700 z-1 rounded-3xl"></div>
          <div className="absolute inset-0 z-0 w-full h-full opacity-30">
            <Image fill quality={40} src="/media/lina-trochez-ktPKyUs3Qjs-unsplash.jpg" alt="" className="object-cover object-center rounded-3xl grayscale " />
          </div>
          <div className="relative z-10 flex flex-col w-full h-full mx-auto place-items-center place-content-center max-w-[70ch]">
            <h1 className="text-5xl font-bold text-blue-50">Don&#39;	t Let Autism Hold You Back!</h1>
            <p className="mt-4 text-lg font-medium text-blue-50">Partner with AutismWorks to Achieve Your Career Goals helping individuals with autism improve their social skills and increase their chances of getting hired. Our team of experienced therapists and job coaches work closely with clients to </p>
          </div>
        </div>
        {/* End of Hero Image */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="overflow-hidden bg-blue-300 rounded-xl">
            <div className="px-4 py-5 space-y-2 sm:p-6">
              <h2 className="text-base font-medium capitalize">identify Your Strengths!</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium eveniet dolorum nesciunt.</p>
              <button
                type="button"
                className="rounded-md bg-transparent inline-flex items-center pr-2.5 py-1.5 text-sm font-semibold text-gray-900 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /> </svg>
                Button text
              </button>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden bg-blue-300 rounded-xl">
            <div className="px-4 py-5 space-y-2 sm:p-6">
              <h2 className="text-base font-medium capitalize">identify Your Strengths!</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium eveniet dolorum nesciunt.</p>
              <button
                type="button"
                className="rounded-md bg-transparent inline-flex items-center pr-2.5 py-1.5 text-sm font-semibold text-gray-900 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /> </svg>
              </button>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden bg-blue-300 rounded-xl">
            <div className="px-4 py-5 space-y-2 sm:p-6">
              <h2 className="text-base font-medium capitalize">identify Your Strengths!</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium eveniet dolorum nesciunt.</p>
              <button
                type="button"
                className="rounded-md bg-transparent inline-flex items-center pr-2.5 py-1.5 text-sm font-semibold text-gray-900 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /> </svg>
                Button text
              </button>
            </div>
          </div>
          {/*  */}
        </div>
      </section>
    </>
  )
}
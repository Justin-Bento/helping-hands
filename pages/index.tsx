import Appbar from '@/components/Appbar'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function index() {
  return (
    <>
      <Appbar />
      <main className="container mx-auto my-8 space-y-24">
        <Hero />
        <CallToAction_ViewPrograms />
      </main>
      <Footer />
    </>
  )
}
function Hero() {
  return (
    <>
      <section className="">
        <div className="relative w-full h-[80vh] ">
          <div className="absolute inset-0 bg-primary-700 z-1 rounded-3xl"></div>
          <div className="absolute inset-0 z-0 w-full h-full opacity-30">
            <Image fill quality={40} src="/media/lina-trochez-ktPKyUs3Qjs-unsplash.jpg" alt="" className="object-cover object-center rounded-3xl grayscale " />
          </div>
          <div className="relative z-10 flex flex-col w-full h-full mx-auto place-items-center place-content-center max-w-[70ch]">
            <h1 className="text-5xl font-bold text-primary-50">Don&#39;	t Let Autism Hold You Back!</h1>
            <p className="mt-4 text-lg font-medium text-primary-50">Partner with AutismWorks to Achieve Your Career Goals helping individuals with autism improve their social skills and increase their chances of getting hired. Our team of experienced therapists and job coaches work closely with clients to </p>
          </div>
        </div>
        {/* End of Hero Image */}
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-3">
          <div className="overflow-hidden transition-all bg-primary-300 rounded-xl hover:opacity-90 hover:cursor-pointer active:opacity-80">
            <div className="px-4 py-5 space-y-2 sm:p-6">
              <h2 className="text-base font-medium capitalize">identify Your Strengths & Weaknesses!</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium eveniet dolorum nesciunt.</p>
              <button
                type="button"
                className="rounded-md bg-transparent inline-flex items-center pr-2.5 py-1.5 text-sm font-semibold text-primary-900 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /> </svg>
                Button text
              </button>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden transition-all bg-primary-300 rounded-xl hover:opacity-90 hover:cursor-pointer active:opacity-80">
            <div className="px-4 py-5 space-y-2 sm:p-6">
              <h2 className="text-base font-medium capitalize">Build communication, and social abilities</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium eveniet dolorum nesciunt.</p>
              <button
                type="button"
                className="rounded-md bg-transparent inline-flex items-center pr-2.5 py-1.5 text-sm font-semibold text-primary-900 gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"> <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" /> </svg>
                Button text
              </button>
            </div>
          </div>
          {/*  */}
          <div className="overflow-hidden transition-all bg-primary-300 rounded-xl hover:opacity-90 hover:cursor-pointer active:opacity-80">
            <div className="px-4 py-5 space-y-2 sm:p-6">
              <h2 className="text-base font-medium capitalize">Succeed in the workforce!</h2>
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium eveniet dolorum nesciunt.</p>
              <button
                type="button"
                className="rounded-md bg-transparent inline-flex items-center pr-2.5 py-1.5 text-sm font-semibold text-primary-900 gap-2"
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

function CallToAction_ViewPrograms() {
  return (
    <div className="bg-primary-50">
      <div className="container mx-auto">
        <div className="relative px-6 py-24 overflow-hidden text-center bg-primary-900 isolate sm:rounded-3xl sm:px-16">
          <h2 className="max-w-2xl mx-auto text-3xl font-bold tracking-tight text-primary-50 sm:text-4xl">
            Boost your productivity today.
          </h2>
          <p className="max-w-xl mx-auto mt-6 text-lg leading-8 text-primary-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur
            commodo do ea.
          </p>
          <div className="flex items-center justify-center mt-10 gap-x-6">
            <a
              href="#"
              className="rounded-md bg-primary-50 px-3.5 py-2.5 text-sm font-semibold text-primary-900 hover:bg-primary-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-50"
            >
              Get started
            </a>
            <a href="#" className="text-sm font-semibold leading-6 text-primary-50">
              Learn more <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
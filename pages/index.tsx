import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="">
        <section className="p-4 md:p-8 lg:p-16">
          <div className="relative w-full h-[95vh]">
            <div className="absolute z-10 bg-blue-500 rounded-3xl h-full w-full">
              <Image fill quality={40} src="/media/placeholder-image.png" alt="placeholder-image--hero" className="object-center object-cover" />
            </div>
            <div className="absolute z-20 bg-blue-500/30 rounded-3xl h-full w-full" />
            <div className="absolute z-30 rounded-3xl h-full w-full flex flex-col place-items-start place-content-center px-8 md:px-12 lg:px-32 max-w-6xl">
              <h1 className="text-3xl md:text-5xl font-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</h1>
              <p className="text-xl mt-4">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure.</p>
            </div>
          </div>
          {/* Section 01: Hero Media */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
            <Link href="/programs/program-name">
              <div className="overflow-hidden rounded-lg bg-blue-50 hover:bg-blue-100/80 transition-all hover:cursor-pointer">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-slate-700 font-semibold capitalize text-lg" aria-label="card-headline">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="text-slate-500 mt-1.5" aria-label="card-body">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua A cras semper auctor neque vitae. Sed velit dignissim sodales ut eu sem integer. Lorem ipsum dolor sit amet</p>
                  <button className="mt-4 inline-flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span className="text-xs uppercase tracking-wide">Read More</span>
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/programs/program-name">
              <div className="overflow-hidden rounded-lg bg-blue-50 hover:bg-blue-100/80 transition-all hover:cursor-pointer">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-slate-700 font-semibold capitalize text-lg" aria-label="card-headline">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="text-slate-500 mt-1.5" aria-label="card-body">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua A cras semper auctor neque vitae. Sed velit dignissim sodales ut eu sem integer. Lorem ipsum dolor sit amet</p>
                  <button className="mt-4 inline-flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span className="text-xs uppercase tracking-wide">Read More</span>
                  </button>
                </div>
              </div>
            </Link>
            <Link href="/programs/program-name">
              <div className="overflow-hidden rounded-lg bg-blue-50 hover:bg-blue-100/80 transition-all hover:cursor-pointer">
                <div className="px-4 py-5 sm:p-6">
                  <p className="text-slate-700 font-semibold capitalize text-lg" aria-label="card-headline">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                  <p className="text-slate-500 mt-1.5" aria-label="card-body">adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua A cras semper auctor neque vitae. Sed velit dignissim sodales ut eu sem integer. Lorem ipsum dolor sit amet</p>
                  <button className="mt-4 inline-flex items-center gap-1.5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                    <span className="text-xs uppercase tracking-wide">Read More</span>
                  </button>
                </div>
              </div>
            </Link>
          </div>
          {/* Section 01: Hero Programs */}
        </section>
        {/* Section 01: Hero  */}
        <section className="px-16 py-8">
          <h2 className="text-4xl font-bold underline">Section 02!</h2>
        </section>
        {/* Section 01:  */}
        <section className="px-16 py-8">
          <h3 className="text-3xl font-bold underline">Section 03!</h3>
        </section>
        {/* Section 01:  */}
        <section className="px-16 py-8">
          <h4 className="text-3xl font-bold underline">Section 03!</h4>
        </section>
        {/* Section 01:  */}
        <section className="px-16 py-8">
          <h5 className="text-3xl font-bold underline">Section 04!</h5>
        </section>
        {/* Section 01:  */}
        <section className="px-16 py-8">
          <h6 className="text-3xl font-bold underline">Section 05!</h6>
        </section>
        {/* Section 01:  */}
      </main>
    </>
  )
}

function Banner() {
  return (
    <div
      className="flex justify-between items-center px-20 py-1 bg-yellow-400 border-y border-black lg:py-0"
    >
      <div className="px-10 space-y-5">
        <h1 className="text-6xl max-w-xl font-serif">
          <span className="underline decoration-black decoration-4">
            Medium
          </span>{" "}
          is a place to write, read, and connect!
        </h1>

        <h2>
          It's easy and free to post your thinking on any topic and connect with millions of readers
        </h2>
      </div>

      <img
        className="hidden md:inline-flex h-32 lg:h-full"
        src="https://th.bing.com/th/id/OIP.50A7O2AEJeZkTQlbiIR-EAHaFj?pid=ImgDet&rs=1"
        alt=""
      />

    </div>
  )
}

export default Banner
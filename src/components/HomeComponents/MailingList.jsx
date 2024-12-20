
const MailingList = () => {
  return (
    <section className="hero bg-[url('https://vinova-furstore.myshopify.com/cdn/shop/files/s-4-1_1512x.jpg?v=1697014370')] text-white  min-h-[500px]">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">Join Our Mailing List</h1>
          <p className="py-6">
            Subscribe to receive the latest updates, offers, and news directly to your inbox.
          </p>
          <label className="input input-bordered flex items-center gap-2 py-8">
            <input
              type="email"
              className="grow text-xl block text-black"
              placeholder="Enter your email"
            />
            <button className="btn bg-[#3D493A] border-none  text-white">Subscribe</button>
          </label>
        </div>
      </div>
    </section>
  );
}

export default MailingList
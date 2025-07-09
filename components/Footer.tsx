export default function Footer() {
  return (
    <footer className="mt-24 bg-blue-900 text-gray-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        {/* Company */}
        <div>
          <h3 className="text-xl font-semibold text-white">Dmax Solar</h3>
          <p className="mt-4 text-sm leading-6">
            Designing and installing high-performance solar systems across
            India since 2012.
          </p>
        </div>

        {/* Quick links */}
        <div>
          <h4 className="font-semibold text-white">Quick Links</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="/services"  className="hover:underline">Services</a></li>
            <li><a href="/projects"  className="hover:underline">Projects</a></li>
            <li><a href="/about"     className="hover:underline">About&nbsp;Us</a></li>
            <li><a href="/contact"   className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-semibold text-white">Contact</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>+91 98765 43210</li>
            <li>hello@dmaxsolar.in</li>
            <li>Pune, Maharashtra</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-white">Stay Updated</h4>
          <p className="mt-4 text-sm">Get the latest solar tips & offers.</p>
          <form className="mt-4 flex">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-l-md p-2 text-gray-900"
            />
            <button
              type="submit"
              className="rounded-r-md bg-green-600 px-4 text-white hover:bg-green-700"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-gray-800 py-4 text-center text-xs">
        © {new Date().getFullYear()} Dmax Solar. All rights reserved.
      </div>
    </footer>
  );
}

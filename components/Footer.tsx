
const Footer = () => {
  return (
    <footer className="bg-[--color-1] py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold text-[--color-4] mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/about" className="text-[--color-4] hover:text-[--color-2] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact" className="text-[--color-4] hover:text-[--color-2] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-[--color-4] hover:text-[--color-2] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="text-[--color-4] hover:text-[--color-2] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-bold text-[--color-4] mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-[--color-3] hover:text-[--color-2] transition-colors">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="https://twitter.com" className="text-[--color-3] hover:text-[--color-2] transition-colors">
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a href="https://linkedin.com" className="text-[--color-3] hover:text-[--color-2] transition-colors">
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
              <a href="https://instagram.com" className="text-[--color-3] hover:text-[--color-2] transition-colors">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Newsletter Signup Section */}
          <div>
            <h3 className="text-lg font-bold text-[--color-4] mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email..."
                className="flex-1 p-3 border border-[--color-3] rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[--color-2]"
              />
              <button
                type="submit"
                className="bg-[--color-3] text-[--color-1] px-6 py-3 rounded-r-lg hover:bg-[--color-2] transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright Notice */}
        <div className="mt-8 text-center text-[--color-4]">
          <p>© 2023 Job Board. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
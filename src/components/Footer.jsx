const Footer = () => {
    return (
      <footer className="bg-blue-800   py-10 text-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
            <div>
              <h1 className="text-white font-extrabold text-2xl">
               
            <span className="text-black text-3xl">Techie</span>Talks
              </h1>
              <p className="mt-4 text-sm text-white/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan.
              </p>
              
              <div className="flex gap-4 mt-4">
                <a href="#" className="hover:opacity-75">
                  <img
                    alt="facebook icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    src="https://www.englishyaari.com/img/facebook.svg"
                  />
                </a>
                <a href="#" className="hover:opacity-75">
                  <img
                    alt="twitter icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    src="https://www.englishyaari.com/img/twitter.svg"
                  />
                </a>
                <a href="#" className="hover:opacity-75">
                  <img
                    alt="instagram icon"
                    loading="lazy"
                    width="36"
                    height="36"
                    decoding="async"
                    src="https://www.englishyaari.com/img/instagram.svg"
                  />
                </a>
              </div>
            </div>
  
           
            <div>
              <h2 className="text-lg font-semibold">Quick Links</h2>
              <ul className="mt-4 space-y-2">
                <li><a href="#" className="hover:text-rose-600">Home</a></li>
                <li><a href="#" className="hover:text-rose-600">About Us</a></li>
                <li><a href="#" className="hover:text-rose-600">Services</a></li>
                <li><a href="#" className="hover:text-rose-600">Contact</a></li>
              </ul>
            </div>
  
           
            <div>
              <h2 className="text-lg font-semibold">Contact Us</h2>
              <p className="mt-4 text-sm">Email: support@example.com</p>
              <p className="mt-1 text-sm">Phone: <a href="tel:+911800123444" className="hover:text-rose-600">+91 1800 123 444</a></p>
              <p className="mt-1 text-sm">Address: 123 Street, City, Country</p>
            </div>
  
          
            <div>
              <h2 className="text-lg font-semibold">Subscribe to our Newsletter</h2>
              <form className="mt-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 text-gray-900 rounded-md focus:ring-rose-600 focus:outline-none"
                />
                <button
                  type="submit"
                  className="mt-2 w-full bg-rose-600 text-white py-2 rounded-md hover:bg-rose-700"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
        
   
        <div className="mt-10 text-center border-t border-gray-700 pt-4">
          <p className="text-sm text-white/80">&copy; 2024 Your Company. All rights reserved.</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  
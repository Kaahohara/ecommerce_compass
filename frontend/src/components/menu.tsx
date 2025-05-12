import React from "react";
import Button from "./button"

  function Menu(){
    return (
        <ul className={`md:flex items-center justify-center gap-10 p-6 text-primary font-medium`}>
        <li>
            <a href="#" className="hover:text-blue-600">
                <img src="/images/logo.png" alt="Logo" />
            </a>
        </li>
        <li><a href="#" className="hover:text-blue-600">Home</a></li>
        <li><a href="#" className="hover:text-blue-600">Category</a></li>
        <li><a href="#" className="hover:text-blue-600">About</a></li>
        <li><a href="#" className="hover:text-blue-600">Contact</a></li>
        <div className="relative max-w-[480px]">
        <input
            type="text"
            className="w-full rounded-full px-10 py-2 border border-gray-300 focus:outline-none"
            placeholder="Search something here"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 20 20">
            <path
                d="M18.0916 16.9083L15 13.8417C16.2001 12.3454 16.7812 10.4461 16.624 8.53443C16.4667 6.62276 15.583 4.844 14.1546 3.56388C12.7261 2.28377 10.8615 1.5996 8.94408 1.65207C7.02668 1.70454 5.20225 2.48965 3.84593 3.84596C2.48962 5.20228 1.70451 7.02671 1.65204 8.94411C1.59957 10.8615 2.28374 12.7262 3.56385 14.1546C4.84397 15.5831 6.62273 16.4668 8.5344 16.624C10.4461 16.7813 12.3453 16.2001 13.8416 15L16.9083 18.0667C17.2418 18.4113 17.7582 18.4113 18.0916 18.0667C18.425 17.7221 18.425 17.2057 18.0916 16.8611L18.0916 16.9083ZM9.16665 15C8.01292 15 6.88511 14.6579 5.92582 14.0169C4.96653 13.3759 4.21886 12.4649 3.77735 11.399C3.33584 10.3331 3.22032 9.16021 3.4454 8.02865C3.67048 6.8971 4.22605 5.8577 5.04186 5.04189C5.85766 4.22608 6.89707 3.67051 8.02862 3.44543C9.16018 3.22035 10.3331 3.33587 11.399 3.77738C12.4649 4.21889 13.3759 4.96657 14.0169 5.92585C14.6579 6.88514 15 8.01295 15 9.16668C15 10.7138 14.3854 12.1975 13.2914 13.2915C12.1975 14.3854 10.7137 15 9.16665 15Z"
                fill="#667479"
            />
            </svg>
        </div>
        </div>
        <li>  <Button text="Join the community" variant="solid" /></li>
        <li>VND</li>
        </ul>
    );
  };
  
  export default Menu;
  

import React, {  useContext,  } from "react";
import { ProductContext } from "../../App";
import { AuthContext } from './../../contexts/authcontext/AuthProvider';
import { Link } from 'react-router-dom';
import CartItem from "../../components/CartItem/CartItem";
const Payment = () => {
    const {checkout} = useContext(ProductContext);
    const {user}= useContext(AuthContext);
    console.log(user);
    let subTotal = 0;
    checkout.map(product => subTotal = subTotal + parseInt(product.price));
    console.log(subTotal);
    let total = subTotal+ (subTotal*0.05);
   
  return (
    <section className="container h-[92vh]  mx-auto">
      <header className="sticky top-0 bg-white z-50">
        <h2 className="text-4xl font-bold leading-7 p-6 text-gray-600">
          Make a Payment
        </h2>
      </header>

      {/*<!--
  Heads up! 👋

  Plugins:
    - @tailwindcss/forms
-->
*/}
      <section>
        <h1 className="sr-only">Checkout</h1>

        <div className="mx-auto grid max-w-screen-2xl grid-cols-1 md:grid-cols-2">
          <div className="bg-gray-50 py-12 md:py-24">
            <div className="mx-auto max-w-lg space-y-8 px-4 lg:px-8">
              <div className="flex items-center gap-4">
                <span className="h-10 w-10 rounded-full bg-blue-700"></span>

                <h2 className="font-medium text-gray-900">{user.displayName ? user.displayName : "User Name"}</h2>
              </div>

              <div>
                <p className="text-2xl font-medium tracking-tight text-gray-900">
                  ${total}
                </p>

                <p className="mt-1 text-sm text-gray-600">For the purchase of</p>
              </div>

              <div>
                <div className="flow-root">
                  <ul className="-my-4 divide-y divide-gray-100">
                   {checkout.map((item,index)=>
                         <CartItem product={item} key={index}/>

                   )}

                   
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white py-12 md:py-24">
            <div className="mx-auto max-w-lg px-4 lg:px-8">
              <form className="grid grid-cols-6 gap-4">
                <div className="col-span-6">
                  <label
                    for="FirstName"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Coustomer Name
                  </label>

                  <input
                    type="text"
                    id="Coustomer Name"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

              

                <div className="col-span-6">
                  <label
                    for="Email"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    for="Phone"
                    className="block text-xs font-medium text-gray-700"
                  >
                    Phone
                  </label>

                  <input
                    type="tel"
                    id="Phone"
                    className="mt-1 w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                  />
                </div>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Payment Type :
                  </legend>

                  <div>
                      <label for="Country" className="sr-only">
                        payment Detail
                      </label>

                      <select
                        id="Country"
                        className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm"
                      >
                        <option>Cash</option>
                        <option>Card</option>
                        <option>Cheque</option>
                        <option>Bank transfer</option>
                        <option>Other</option>
                        
                      </select>
                    </div>
                </fieldset>

                <fieldset className="col-span-6">
                  <legend className="block text-sm font-medium text-gray-700">
                    Billing Address
                  </legend>

                 <textarea className="relative w-full rounded-t-md border-gray-200 focus:z-10 sm:text-sm">

                 </textarea>
                </fieldset>

                <div className="flex col-span-6">
                 
                 <div className="   w-full p-2">
                 <Link
                  to="/pos"
                  className="block  w-full text-center rounded-md bg-black p-2 text-md text-white transition hover:shadow-lg"
                >
                  Pay Now
                </Link>
                 </div>
                 
                 
                 <div className="   w-full py-2">
                 <Link
                  to="/pos"
                  className="block  text-center w-full rounded-md border-2 border-black bg-white p-2 text-md text-black transition hover:shadow-lg"
                >
                  Cancel
                </Link>
                 </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Payment;

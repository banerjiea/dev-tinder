import axios from "axios";
import { BASE_URL } from "../utils/constants";
import { useEffect, useState } from "react";

const Premium = () => {
  const [isUserPremium, setIsUserPremium] = useState(false);

  const verifyPremiumUser = async () => {
    const res = await axios.get(BASE_URL + "/premium/verify", {
      withCredentials: true,
    });

    if (res.data.isPremium) {
      setIsUserPremium(true);
    }
  };

    useEffect(() => {
    verifyPremiumUser();
  }, []);

  const handleBuyClick = async (type) => {
    const order = await axios.post(
      BASE_URL + "/payment/create",
      {
        membershipType: type,
      },
      { withCredentials: true }
    );

    const { amount, keyId, currency, notes, orderId } = order.data;

    const options = {
      key: keyId,
      amount,
      currency,
      name: "Dev Tinder",
      description: "Connect to other developers",
      order_id: orderId,
      prefill: {
        name: notes.firstName + " " + notes.lastName,
        email: notes.emailId,
        contact: "9999999999",
      },
      theme: {
        color: "#F37254",
      },
      handler: verifyPremiumUser,
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  if (isUserPremium) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-50">
        <div className="bg-green-100 text-green-700 px-8 py-6 rounded-xl shadow text-xl font-semibold">
          🎉 You're already a Premium User!
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-4">
        Upgrade to Premium
      </h1>
      <p className="text-center text-gray-500 mb-10">
        Choose the plan that fits you best
      </p>

      <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
        
        {/* Silver Plan */}
        <div className="w-80 bg-white border border-gray-200 rounded-2xl shadow-md hover:shadow-xl transition duration-300">
          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Silver
            </h2>
            <p className="text-gray-500 mb-4">
              Great for casual users
            </p>

            <p className="text-3xl font-bold text-gray-800 mb-6">
              ₹300
            </p>

            <ul className="text-gray-600 text-left space-y-2 mb-6">
              <li>✔ Chat with others</li>
              <li>✔ 100 requests/day</li>
              <li>✔ Blue Tick</li>
              <li>✔ 3 Months Access</li>
            </ul>

            <button
              onClick={() => handleBuyClick("silver")}
              className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition"
            >
              Buy Silver
            </button>
          </div>
        </div>

        {/* Gold Plan (Highlighted) */}
        <div className="w-80 bg-white border-2 border-indigo-500 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 relative">
          
          {/* Badge */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-xs px-3 py-1 rounded-full">
            MOST POPULAR
          </div>

          <div className="p-6 text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              Gold ⭐
            </h2>
            <p className="text-gray-500 mb-4">
              Best for power users
            </p>

            <p className="text-3xl font-bold text-gray-800 mb-6">
              ₹700
            </p>

            <ul className="text-gray-600 text-left space-y-2 mb-6">
              <li>✔ Chat with others</li>
              <li>✔ Unlimited requests</li>
              <li>✔ Blue Tick</li>
              <li>✔ 6 Months Access</li>
            </ul>

            <button
              onClick={() => handleBuyClick("gold")}
              className="w-full bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition"
            >
              Buy Gold
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
export default Premium;
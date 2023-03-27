import { Formik } from "formik";
import { PHONE_REGEXP } from "src/utils/config";
import * as Yup from "yup";
import { omit } from "lodash";
import { useCart } from "src/hooks";

const CartForm = ({ handleTabChange }) => {
  const { items, subTotal, onOrderConfirmData } = useCart();

  const initialFormValues = {
    firstName: "",
    lastName: "",
    address1: "",
    address2: "",
    country: "",
    city: "",
    zip: "",
    email: "",
    emailConfirmation: "",
    phoneNumber: "",
  };

  const _user = JSON.parse(localStorage.getItem("user"));

  const shippingSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    address1: Yup.string().required("Address name is required"),
    address2: Yup.string().required("Address name is required"),

    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),
    zip: Yup.string().required("Zip is required"),
    email: Yup.string()
      .email("Must be a valid email")
      .max(255)
      .required("Email is required"),
    emailConfirmation: Yup.string().required("Email confirmation is required"),
    phoneNumber: Yup.string()
      .matches(PHONE_REGEXP, "Phone number is not valid")
      .required("Phone number is required"),
  });

  const handleAddressSubmit = async (values) => {
    const products = items.map((item) => {
      return {
        product: item.id,
        buyer: _user?.id,
        price: String(Number(item?.price) * Number(item?.qty)),
        qty: String(item.qty),
        isPickUp: false,
        status: "Pending",
      };
    });
    const order = {
      products: products,
      totalPrice: String(subTotal),
      shippingDetails: omit(values, ["city", "emailConfirmation"]),
      status: "Pending",
      buyer: _user?.id,
    };

    onOrderConfirmData(order);
    handleTabChange("PAYMENT");
  };

  return (
    <div className="flex flex-col  pb-48 mobile-cart">
      <div className="flex gap-3">
        <h2 className="font-bold">Shipping Address</h2>
      </div>

      <div className="form flex flex-col py-8 w-full">
        <Formik
          initialValues={initialFormValues}
          validationSchema={shippingSchema}
          onSubmit={(values) => {
            handleAddressSubmit(values);
          }}
        >
          {({ errors, handleChange, handleSubmit, touched, values }) => (
            <form onSubmit={handleSubmit}>
              <div className="flex gap-6 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">First Name </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.firstName}
                    onChange={handleChange("firstName")}
                  />
                  {errors?.firstName && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.firstName}
                    </span>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Last Name </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.lastName}
                    onChange={handleChange("lastName")}
                  />
                  {errors?.lastName && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Address 1 </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.address1}
                    onChange={handleChange("address1")}
                  />
                  {errors?.address1 && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.address1}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Address 2</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.address2}
                    onChange={handleChange("address2")}
                  />
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Country </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.country}
                    onChange={handleChange("country")}
                  />
                  {errors?.country && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.country}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">City</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.city}
                    onChange={handleChange("city")}
                  />
                  {errors?.city && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.city}
                    </span>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Zip</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.zip}
                    onChange={handleChange("zip")}
                  />
                  {errors?.zip && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.zip}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Email</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.email}
                    onChange={handleChange("email")}
                  />
                  {errors?.email && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.email}
                    </span>
                  )}
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">
                      Email Confirmation
                    </span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.emailConfirmation}
                    onChange={handleChange("emailConfirmation")}
                  />
                  {errors?.emailConfirmation && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.emailConfirmation}
                    </span>
                  )}
                </div>
              </div>
              <div className="flex gap-4 pb-4">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text font-bold">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    className="input input-bordered w-full"
                    value={values.phoneNumber}
                    onChange={handleChange("phoneNumber")}
                  />
                  {errors?.phoneNumber && (
                    <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                      {errors?.phoneNumber}
                    </span>
                  )}
                </div>
              </div>
              <hr className="mt-6" />
              <div className="flex justify-between mt-8 w-full">
                <div
                  className="flex items-center gap-2 cursor-pointer"
                  onClick={() => handleTabChange("CART")}
                >
                  <svg
                    width="15"
                    height="7"
                    viewBox="0 0 15 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15 3V4H4V7L0 3.5L4 0V3H15Z"
                      fill="#BCBFC2"
                    />
                  </svg>

                  <p className="text-[#939699] font-bold">Back to cart</p>
                </div>
                <div>
                  <button class="btn bg-[#097435] border-none normal-case rounded-full h-[40px] w-[180px] gap-3">
                    <p className="white">Continue</p>
                    <svg
                      width="15"
                      height="7"
                      viewBox="0 0 15 7"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 3V4H11V7L15 3.5L11 0V3H0Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default CartForm;

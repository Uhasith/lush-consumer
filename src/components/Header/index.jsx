import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "src/hooks";
import { AuthModal } from "..";
import logo from "../../assets/images/Logo.png";

const Header = () => {
  const [username, setUsername] = useState("");
  const { items } = useCart();

  useEffect(() => {
    checkIsAuthenticated();
  }, []);
  const checkIsAuthenticated = () => {
    if (localStorage.getItem("user")) {
      const _user = JSON.parse(localStorage.getItem("user"));
      setUsername(`${_user?.firstName} ${_user?.lastName}`);
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className=" sticky top-0 z-30">
      <nav class="bg-white border-gray-200 dark:bg-gray-900">
        <div class="container flex flex-wrap justify-between items-center py-2.5">
          <a href="/" class="flex items-center">
            <img src={logo} class="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
          </a>
          <div class="flex items-center">
            {username ? (
              <div class="mr-6 text-sm font-medium text-gray-500 dark:text-white">
                <Link to="/orderhistory">
                  <div className="mr-6 text-sm font-medium text-gray-500 dark:text-white">
                    <label
                      htmlFor="my-modal-4"
                      className="gap-2 btn btn-outline rounded-3xl h-[40px] normal-case border-[#D9DADB] modal-button modal-open"
                    >
                      My Orders
                    </label>
                  </div>
                </Link>
                <div className="dropdown dropdown-end ">
                  <label
                    tabIndex={0}
                    className="gap-2 btn btn-outline rounded-3xl h-[40px] normal-case border-[#D9DADB]"
                  >
                    {username}
                    <svg
                      width="8"
                      height="4"
                      viewBox="0 0 8 4"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.20711 0C0.761654 0 0.538571 0.538571 0.853553 0.853553L3.64645 3.64645C3.84171 3.84171 4.15829 3.84171 4.35355 3.64645L7.14645 0.853553C7.46143 0.53857 7.23835 0 6.79289 0H1.20711Z"
                        fill="#868686"
                      />
                    </svg>
                  </label>
                  <ul
                    tabIndex={0}
                    className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li onClick={handleLogout}>
                      <p>Logout</p>
                    </li>
                  </ul>
                </div>
              </div>
            ) : (
              <div class="mr-6 text-sm font-medium text-gray-500 dark:text-white">
                <label
                  for="my-modal-4"
                  class="gap-2 btn btn-outline rounded-3xl h-[40px] normal-case border-[#D9DADB]  modal-button modal-open"
                >
                  Login
                </label>
              </div>
            )}

            <a
              href="#"
              class="text-sm font-medium text-blue-600 dark:text-blue-500"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M19 17H1V15H19V17ZM13 11H1V9H13V11ZM1 5V3H19V5H1Z"
                  fill="#BCBFC2"
                />
              </svg>
            </a>
          </div>
        </div>
      </nav>
      <nav class="bg-[#6CB33F] dark:bg-gray-700 h-[60px] flex flex-col items-center justify-center">
        <div class="py-3 px-4 mx-auto w-full flex justify-end container">
          <div class="flex items-center">
            <ul class="flex flex-row mt-0 space-x-8 text-sm font-medium">
              <li class="relative flex">
                <Link
                  to="/cart"
                  class="text-white dark:text-white hover:underline flex gap-2"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4 5H17C17.037 5.00005 18 5.00127 18 6L17 12C16.911 12.491 16.5709 13 16.0642 13H6L6.09506 14.2985C6.16424 14.6291 6.45721 15 6.79145 15H15.6066C15.6443 15 15.6808 15.0054 15.7158 15.0155C16.441 15.1204 17 15.7462 17 16.5C17 17.3271 16.3271 18 15.5 18C14.6729 18 14 17.3271 14 16.5C14 16.3248 14.0302 16.1565 14.0857 16H7.91434C7.9698 16.1564 8 16.3248 8 16.5C8 17.3271 7.32711 18 6.5 18C5.67289 18 5 17.3271 5 16.5C5 16.0183 5.2282 15.589 5.58216 15.3143C5.39546 15.068 5.26019 14.7794 5.19962 14.4905L4.80856 12.6269L2 2H0.457618C0.204824 2 0 1.71822 0 1.46265C0 1.20707 0.204824 1 0.457618 1H2.56171C2.77221 1 2.95559 1.14534 3.00603 1.35206L4 5Z"
                      fill="white"
                    />
                  </svg>
                  {items?.length > 0 && (
                    <span class="absolute right-0 top-0 rounded-full bg-red-600 w-3 h-3 top right p-0 m-0 text-white font-mono text-[10px] leading-tight text-center">
                      {items?.length}
                    </span>
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <AuthModal />
    </div>
  );
};
export default Header;

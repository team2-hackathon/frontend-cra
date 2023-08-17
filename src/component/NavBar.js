import placeholderSVG from "../assets/icons/placeholder.svg";
import account from "../assets/icons/nav/account.svg";
import home from "../assets/icons/nav/home.svg";
import trends from "../assets/icons/nav/trends.svg";
import plans from "../assets/icons/nav/plans.svg";
import payments from "../assets/icons/nav/payments.svg";

export const NavBar = () => {
  return (
    <nav className="fixed bottom-0 flex items-center w-full h-20 max-w-sm text-sm bg-nav-gray">
      <ul className="flex justify-around w-full gap-2 mx-auto">
        <li>
          <a
            href="/dashboard"
            className="flex flex-col items-center justify-center w-[2.5rem"
          >
            <img src={home} className="w-[1.5rem]" />
            <span className="text-[.5rem] text-black">Dashboard</span>
          </a>
        </li>
        <li>

          <a
            href="/accounts"
            className="flex flex-col items-center justify-center w-[2.5rem"
          >
            <img src={account} className="w-[1.5rem]" />
            <span className="text-[.5rem] text-black">Accounts</span>
          </a>

        </li>
        <li>
          <a
            href="/trends"
            className="flex flex-col items-center justify-center w-[2.5rem"
          >
            <img src={trends} className="w-[1.5rem]" />
            <span className="text-[.5rem] text-black">Trends</span>
          </a>
        </li>
        <li>
          <a
            href="/plans"
            className="flex flex-col items-center justify-center w-[2.5rem"
          >
            <img src={plans} className="w-[1.5rem]" />
            <span className="text-[.5rem] text-black">Plans</span>
          </a>
        </li>
        <li>
          <a
            href="/payments"
            className="flex flex-col items-center justify-center w-[2.5rem"
          >
            <img src={payments} className="w-[1.5rem]" />
            <span className="text-[.5rem] text-black">Payments</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

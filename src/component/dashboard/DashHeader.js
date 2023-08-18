import gearIcon from "../../assets/icons/gear.svg";
import usersIcon from "../../assets/icons/users.svg";
import notificationsIcon from "../../assets/icons/notifications.svg";
export const DashHeader = () => {
  function getDate() {
    const date = new Date();
    //day of the week
    const dayOfWeek = date.toLocaleString("default", { weekday: "short" });
    const day = date.toLocaleString("default", { day: "numeric" });
    const month = date.toLocaleString("default", { month: "short" });
    // Wed, Aug 16
    return `${dayOfWeek}, ${month} ${day}`; //
  }
  return (
    <div className="w-10/12 py-8 mx-auto">
      <ul className="grid grid-cols-3">
        <li className="flex items-center">
          <img src={gearIcon} className="cursor-pointer" />
        </li>
        <li className="col-span-1 text-[.8rem] font-medium text-center">
          {getDate()}
        </li>
        <li className="flex items-center justify-end col-span-1 gap-2">
          <a href="/users">
            <img src={usersIcon} className="cursor-pointer" />
          </a>
          <img src={notificationsIcon} className="cursor-pointer" />
        </li>
      </ul>
    </div>
  );
};

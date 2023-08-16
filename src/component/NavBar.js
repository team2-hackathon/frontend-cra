export const NavBar = () => {
  return (
    <div className="bg-yellow-100">
      This is the NavBar. Below are links
      <ul className="flex gap-4">
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>Logout</li>
        <li>
          <a href="/dashboard">Dashboard</a>
        </li>
      </ul>
    </div>
  );
};

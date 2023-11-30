import { Outlet } from "@remix-run/react";

// src/routes/users+/$username/username.tsx
function UserNotes() {
  return (
    <div>
      <h1>User notes Page</h1>
      {/* Add content for the user profile page */}
      <Outlet />
    </div>
  );
}

export default UserNotes;

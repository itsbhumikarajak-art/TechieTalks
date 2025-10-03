// src/pages/Profile.js
import React from "react";
import { auth } from "../Firebase/Firebase";

const Profile = () => {
  const user = auth.currentUser;

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-900">Profile</h1>
      {user ? (
        <div className="mt-4">
          <img
            src={user.photoURL || "/default-avatar.png"}
            alt="Profile"
            className="h-20 w-20 rounded-full border border-gray-300"
          />
          <p className="mt-2 text-gray-700"><strong>Name:</strong> {user.displayName || "No name set"}</p>
          <p className="text-gray-700"><strong>Email:</strong> {user.email}</p>
        </div>
      ) : (
        <p className="text-red-500">You are not logged in.</p>
      )}
    </div>
  );
};

export default Profile;

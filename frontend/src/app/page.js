"use client";
import { useContext, useEffect, useState } from "react";
import { APP_CONSTANTS } from "@/utils/constants/app-constants";
import ApiContext from "@/context/ApiContext";
import style from "./page.module.css";
import SubmitButton from "@/components/buttons/SubmitButton";

const CreateUserForm = () => {
  const { createUser, loadingApi } = useContext(ApiContext);

  const [data, setData] = useState({
    username: null,
    email: null,
    password: null,
  });

  const handleChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    createUser(data);
  };

  const sharedProps = {
    className: "flex-column-relative center w-100 h-100 " + style["input"],
    onChange: handleChange,
  };

  return (
    <>
      <h4>Create user</h4>

      <input {...sharedProps} name="name" type="text" placeholder="Username" />
      <input {...sharedProps} name="email" type="text" placeholder="Email" />
      <input
        {...sharedProps}
        name="password"
        type="password"
        placeholder="Password"
      />

      <SubmitButton
        {...{
          props: {
            onClick: handleSubmit,
            disabled: loadingApi,
          },
        }}
      />
    </>
  );
};

const AdminActions = () => {
  const { loadingApi, getAllUsers } = useContext(ApiContext);

  return (
    <>
      <h4>Actions</h4>
      <SubmitButton
        {...{
          props: {
            onClick: getAllUsers,
            disabled: loadingApi,
          },
          options: {
            displayName: "Log all users",
          },
        }}
      />
    </>
  );
};

const AdminDashBoard = () => {
  return (
    <div className="flex-column-relative w-100 start">
      <div className="flex-row-relative w-100">
        <div
          className="flex-column-relative center"
          style={{
            width: "45vw",
            marginRight: "15vw",
          }}
        >
          <CreateUserForm />
        </div>

        <div
          className="flex-column-relative center"
          style={{
            width: "45vw",
          }}
        >
          <AdminActions />
        </div>
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <article
      className="flex-column-relative w-100 justify-start"
      style={{
        padding: "2vh 2vw",
        minHeight: `calc(100vh - ${APP_CONSTANTS.DIMENSIONS.HEADER.HEIGHT}px)`,
      }}
    >
      <AdminDashBoard />
    </article>
  );
}

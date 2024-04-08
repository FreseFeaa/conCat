import React from "react";
import { useLogin } from "@refinedev/core";
import { AuthPage } from "@refinedev/antd";
export const Login = () => {
    // const { mutate, isLoading } = useLogin();

    // const onSubmit = (event) => {
    //   event.preventDefault();
    //   const data = Object.fromEntries(new FormData(event.target).entries());
    //   mutate(data);
    // };

    return (
      <AuthPage type="login" formProps={{ initialValues: {
        email: "admin@giper.fm", 
        password: "admin"
      }}}/>





      
        // <div>
        //     <h1>Login</h1>
        //     <form onSubmit={onSubmit}>
        //         <label htmlFor="email">Email</label>
        //         <input
        //           type="email"
        //           id="email"
        //           name="email"
        //           defaultValue="admin@giper.fm"
        //         />

        //         <label htmlFor="password">Password</label>
        //         <input
        //           type="password"
        //           id="password"
        //           name="password"
        //           defaultValue="admin"
        //         />

        //         {isLoading && <span>loading...</span>}
        //         <button
        //             type="submit"
        //             disabled={isLoading}
        //         >Submit</button>
        //     </form>
        // </div>
      );
};
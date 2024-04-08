import { Refine, Authenticated } from "@refinedev/core";
import routerProvider, { NavigateToResource } from "@refinedev/react-router-v6";

import { dataProvider } from "@refinedev/supabase";
import { supabaseClient } from "./provaiders/supabase";
import authProvider from "./provaiders/authProvider";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import { UserinfoList } from "./pages/userinfo/list";
import { ShowUserinfo } from "./pages/userinfo/show";
import { ConfigProvider, App as AntdApp } from "antd";
import { Login } from "./pages/login";
import { ThemedLayoutV2, ThemedTitleV2 } from "@refinedev/antd";
import "antd/dist/reset.css";
import { ProductList } from "./pages/products/list";
  
function App() {
  return (
    <BrowserRouter>
      <ConfigProvider>
        <AntdApp>
          <Refine
            dataProvider={dataProvider(supabaseClient)}
            authProvider={authProvider}
            routerProvider={routerProvider}
            resources={[
              {
                name: 'user_info',
                list: "/userinfo",
                show: "/userinfo/:id",
                meta: { label: "Сотрудники" },
              },
              {
                name: 'products',
                list: "/products",
                show: "/products/:id",
                meta: { label: "Мерч" },
              }
            ]}
          >
            <Routes>
              <Route
                element={(
                  <Authenticated
                    key="authenticated-routes"
                    redirectOnFail="/login">
                    <ThemedLayoutV2
                    Title={()=> <ThemedTitleV2 text = 'Giper.fm'/>}
                    >

                      <Outlet />
                    </ThemedLayoutV2>
                  </Authenticated>
                )}
              >
                <Route
                  index
                  element={<NavigateToResource resource="user_info" />}
                />
                <Route path="/userinfo">
                  <Route index element={<UserinfoList />} />
                  <Route path=":id" element={<ShowUserinfo />} />
                </Route>
                <Route path="/products">
                  <Route index element={<ProductList/>} />
                  {/* <Route path=":id" element={<ShowUserinfo />} /> */}
                </Route>
              </Route>
              <Route
                element={(
                  <Authenticated key="auth-pages" fallback={<Outlet />}>
                    <NavigateToResource resource="user_info" />
                  </Authenticated>
                )}
              >
                <Route path="/login" element={<Login />} />
              </Route>
            </Routes>
          </Refine>
        </AntdApp>
      </ConfigProvider>
    </BrowserRouter>
  );
}

export default App;

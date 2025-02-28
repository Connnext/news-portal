import { lazy, Suspense } from "react"
import { Route, Routes } from "react-router"

import Layout from "@widgets/Layout"
import { ROUTES } from "@shared/constants/routes"

// Ленивая подгрузка всех компонентов
const Home = lazy(() => import("@pages/Home"))
const Account = lazy(() => import("@pages/Account"))
const Friends = lazy(() => import("@pages/Friends"))
const Likes = lazy(() => import("@pages/Likes"))
const Messages = lazy(() => import("@pages/Messages"))
const Login = lazy(() => import("@pages/Login"))
const Registration = lazy(() => import("@pages/Registration"))

export const AppRouter = () => {
  return (
    <Routes>
      {/* Маршруты для страниц внутри Layout */}
      <Route element={<Layout />}>
        <Route
          path={ROUTES.HOME}
          element={
            <Suspense fallback={<div>Loading Home...</div>}>
              <Home />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.ACCOUNT}
          element={
            <Suspense fallback={<div>Loading Account...</div>}>
              <Account />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.MESSAGES}
          element={
            <Suspense fallback={<div>Loading Messages...</div>}>
              <Messages />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.LIKES}
          element={
            <Suspense fallback={<div>Loading Likes...</div>}>
              <Likes />
            </Suspense>
          }
        />
        <Route
          path={ROUTES.FRIENDS}
          element={
            <Suspense fallback={<div>Loading Friends...</div>}>
              <Friends />
            </Suspense>
          }
        />
      </Route>

      {/* Маршруты для страниц без Layout */}
      <Route
        path={ROUTES.LOGIN}
        element={
          <Suspense fallback={<div>Loading Login...</div>}>
            <Login />
          </Suspense>
        }
      />
      <Route
        path={ROUTES.REGISTRATION}
        element={
          <Suspense fallback={<div>Loading Registration...</div>}>
            <Registration />
          </Suspense>
        }
      />
    </Routes>
  )
}

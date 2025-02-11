import { Route, Routes } from "react-router"
import { ROUTES } from "../../utils/constants/routes"
import {
  Account,
  Friends,
  Home,
  Likes,
  Login,
  Messages,
  Registration,
} from "../../pages"
import Layout from "./../../widgets/Layout/Layout"

export const AppRouter = () => {
  return (
    <Routes>
      {/* Маршруты для страниц внутри Layout */}
      <Route element={<Layout />}>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.ACCOUNT} element={<Account />} />
        <Route path={ROUTES.MESSAGES} element={<Messages />} />
        <Route path={ROUTES.LIKES} element={<Likes />} />
        <Route path={ROUTES.FRIENDS} element={<Friends />} />
      </Route>
      {/* Маршруты для страниц без Layout */}
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.REGISTRATION} element={<Registration />} />
    </Routes>
  )
}

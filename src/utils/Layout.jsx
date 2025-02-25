import Navbar from './Navbar';
import { Outlet } from 'react-router-dom';
export default function Layout() {
  return (
      <>
      <Navbar />
      <Outlet /> {/* Leave a space in JSX of the layout component that the matching page for the current route will be rendered into  */}
      </>
    )
}
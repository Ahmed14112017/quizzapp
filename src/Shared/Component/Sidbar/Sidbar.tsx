import { Sidebar, Menu, MenuItem } from 'react-pro-sidebar';
import { Link } from 'react-router-dom';
export default function Sidbar() {
  return (
    <div>
      <Sidebar>
  <Menu
    menuItemStyles={{
      button: {
        // the active class will be added automatically by react router
        // so we can use it to style the active menu item
        [`&.active`]: {
          backgroundColor: '#13395e',
          color: '#b6c8d9',
        },
      },
    }}
  >
    <MenuItem component={<Link to="/dashboard" />}> Dashboard</MenuItem>
    <MenuItem component={<Link to="Students" />}> Students</MenuItem>
    <MenuItem component={<Link to="group" />}> Groups</MenuItem>
    <MenuItem component={<Link to="Quizzes" />}> Quizzes</MenuItem>
    <MenuItem component={<Link to="Results" />}> Results</MenuItem>
    <MenuItem component={<Link to="Help" />}> Help</MenuItem>
  </Menu>
</Sidebar>;
    </div>
  )
}

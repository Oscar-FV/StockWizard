import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Collapse,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import { Outlet } from "react-router-dom";

export function Root() {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = () => setOpen((cur) => !cur);

  return (
    <div className="grid grid-cols-12">
      <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
        <List className=" min-w-[40px]">
          <ListItem>
            <ListItemPrefix>
              <PresentationChartBarIcon className="h-5 w-5" />
            </ListItemPrefix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <ShoppingBagIcon className="h-5 w-5" />
            </ListItemPrefix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <InboxIcon className="h-5 w-5" />
            </ListItemPrefix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <UserCircleIcon className="h-5 w-5" />
            </ListItemPrefix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <Cog6ToothIcon className="h-5 w-5" />
            </ListItemPrefix>
          </ListItem>
          <ListItem>
            <ListItemPrefix>
              <PowerIcon className="h-5 w-5" />
            </ListItemPrefix>
          </ListItem>
        </List>
      </Card>
      <div className="col-span-11" id="detail">
        <Outlet />
      </div>
    </div>

    //   <Collapse open={open}>
    //     <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
    //       <div className="mb-2 p-4">
    //         <Typography variant="h5" color="blue-gray">
    //           Sidebar
    //         </Typography>
    //       </div>
    //       <List>
    //         <ListItem>
    //           <ListItemPrefix>
    //             <PresentationChartBarIcon className="h-5 w-5" />
    //           </ListItemPrefix>
    //           Dashboard
    //         </ListItem>
    //         <ListItem>
    //           <ListItemPrefix>
    //             <ShoppingBagIcon className="h-5 w-5" />
    //           </ListItemPrefix>
    //           E-Commerce
    //         </ListItem>
    //         <ListItem>
    //           <ListItemPrefix>
    //             <InboxIcon className="h-5 w-5" />
    //           </ListItemPrefix>
    //           Inbox
    //           <ListItemSuffix>
    //             <Chip
    //               value="14"
    //               size="sm"
    //               variant="ghost"
    //               color="blue-gray"
    //               className="rounded-full"
    //             />
    //           </ListItemSuffix>
    //         </ListItem>
    //         <ListItem>
    //           <ListItemPrefix>
    //             <UserCircleIcon className="h-5 w-5" />
    //           </ListItemPrefix>
    //           Profile
    //         </ListItem>
    //         <ListItem>
    //           <ListItemPrefix>
    //             <Cog6ToothIcon className="h-5 w-5" />
    //           </ListItemPrefix>
    //           Settings
    //         </ListItem>
    //         <ListItem>
    //           <ListItemPrefix>
    //             <PowerIcon className="h-5 w-5" />
    //           </ListItemPrefix>
    //           Log Out
    //         </ListItem>
    //       </List>
    //     </Card>
    //   </Collapse>
  );
}

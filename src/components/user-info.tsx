import { Suspense } from "react"
import Link from "next/link"
import { useCurrentUser } from "@/users/hooks/useCurrentUser"
import logout from "@/auth/mutations/logout"
import { useMutation } from "@blitzjs/rpc"
import { Routes, BlitzPage } from "@blitzjs/next"
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react"
import { ChevronDownIcon } from "@chakra-ui/icons"

/*
 * This file is just for a pleasant getting started page for your new app.
 * You can delete everything in here and start from scratch if you like.
 */

// TODO: stagger menu by framer motion:
// https://codesandbox.io/s/framer-motion-variants-rj7ks0?from-embed=&file=/src/App.tsx

const UserInfo = () => {
  const currentUser = useCurrentUser()
  const [logoutMutation] = useMutation(logout)

  if (currentUser) {
    return (
      <>
        <Menu>
          <MenuButton
            as={Button}
            rightIcon={<ChevronDownIcon />}
            variant="ghost"
            colorScheme="steelGray"
            color="steelGray.800"
          >
            {currentUser.name}
          </MenuButton>
          <MenuList>
            <MenuItem>Settings</MenuItem>
            <MenuItem
              onClick={async () => {
                await logoutMutation()
              }}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    )
  } else {
    return (
      <>
        <Link href={Routes.LoginPage()}>
          <Button variant="ghost" colorScheme="steelGray" color="steelGray.800">
            Login
          </Button>
        </Link>
      </>
    )
  }
}

export default UserInfo

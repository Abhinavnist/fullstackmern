import React from "react"

import UserList from "../components/UsersList"

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Abhinav Kumar",
      image: "https://mumbaimirror.indiatimes.com/photo/80779573.cms",
      places: 3,
    },
  ]

  return <UserList items={USERS} />
}

export default Users

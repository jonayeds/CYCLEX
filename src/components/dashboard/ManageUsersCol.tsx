"use client"

import { ColumnDef } from "@tanstack/react-table"
import { TUser } from "../../types/users.types"

import BlockUser from "../shared/BlockUser"




export const usersColumn: ColumnDef<TUser>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell:({row})=>{
        return <p className="truncate">{row.original.name.firstName} {row.original.name?.middleName || ""} {row.original.name.lastName}</p>
    }
  },
  {
    accessorKey: "email",
    header: "Email",
    cell:({row})=>{
        return <p>{row.original.email}</p>
    }
  },
  {
    accessorKey: "role",
    header: "Role",
    cell:({row})=>{
        return <p>{row.original.role}</p>
    }
  },
  {
    accessorKey: "action",
    header: ()=>{
      return <p className="text-center">Action</p>
    },
    cell:({row})=>{
      return <BlockUser userId={row.original._id} blocked={row.original.isBlocked} />
    }
  },
]







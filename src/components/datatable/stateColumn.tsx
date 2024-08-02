"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export type StateColumnType = {
  kode_kemendagri: string;
  kota: string;
  provinsi: string;
  lintang: number;
  bujur: number;
  elevasi: number;
  zona_waktu: string;
};

export const stateColumn: ColumnDef<StateColumnType>[] = [
  {
    accessorKey: "kode_kemendagri",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kode Kemendagri
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "kota",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kota
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "provinsi",
    header: "Provinsi",
  },
  {
    accessorKey: "lintang",
    header: "Lintang",
  },
  {
    accessorKey: "bujur",
    header: "Bujur",
  },
  {
    accessorKey: "elevasi",
    header: "Elevasi",
  },
  {
    accessorKey: "zona_waktu",
    header: "Zona Waktu",
  },
];

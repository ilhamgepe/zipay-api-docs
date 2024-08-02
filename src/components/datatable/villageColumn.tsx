"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Button } from "../ui/button";
import { ArrowUpDown } from "lucide-react";

export type VillageColumnType = {
  kode_kemendagri: string;
  kode_pos: number;
  kelurahan: string;
  kecamatan: string;
  kota: string;
  provinsi: string;
  lintang: number;
  bujur: number;
  elevasi: number;
  zona_waktu: string;
};

export const villageColumn: ColumnDef<VillageColumnType>[] = [
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
    accessorKey: "kode_pos",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kode Pos
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "kelurahan",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Kelurahan
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
  },
  {
    accessorKey: "kecamatan",
    header: "Kecamatan",
  },
  {
    accessorKey: "kota",
    header: "Kota",
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

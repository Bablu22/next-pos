import {
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  {
    id: 1,
    name: "Dashboard",
    href: "/dashboard",
    icon: HomeIcon,
    current: true,
  },
  {
    id: 2,
    name: "POS",
    href: "/dashboard/pos",
    icon: BriefcaseIcon,
    current: false,
  },
  { id: 3, name: "Customers", href: "/", icon: UsersIcon, current: false },
  { id: 4, name: "Products", href: "/", icon: FolderIcon, current: false },
  {
    id: 5,
    name: "Invoice",
    href: "/",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { id: 6, name: "Reports", href: "/", icon: ChartPieIcon, current: false },
];
export const storeLocation = [
  {
    id: 1,
    name: "San Francisco",
    value: "san_francisco",
  },
  {
    id: 2,
    name: "New York",
    value: "new_york",
  },
  {
    id: 3,
    name: "Los Angeles",
    value: "los_angeles",
  },
  {
    id: 4,
    name: "Chicago",
    value: "chicago",
  },
  {
    id: 5,
    name: "Houston",
    value: "houston",
  },
  {
    id: 6,
    name: "Philadelphia",
    value: "philadelphia",
  },
  {
    id: 7,
    name: "Dallas",
    value: "dallas",
  },
  {
    id: 8,
    name: "San Antonio",
    value: "san_antonio",
  },
];

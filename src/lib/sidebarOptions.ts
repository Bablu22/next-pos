import {
  ChartPieIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  BriefcaseIcon,
} from "@heroicons/react/24/outline";

export const navigation = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon, current: true },
  { name: "POS", href: "/dashboard/pos", icon: BriefcaseIcon, current: false },
  { name: "Customers", href: "/", icon: UsersIcon, current: false },
  { name: "Products", href: "/", icon: FolderIcon, current: false },
  {
    name: "Invoice",
    href: "/",
    icon: DocumentDuplicateIcon,
    current: false,
  },
  { name: "Reports", href: "/", icon: ChartPieIcon, current: false },
];

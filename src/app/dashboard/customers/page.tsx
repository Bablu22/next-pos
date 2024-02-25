import { getCustomrsFromDB } from "@/actions/customers";
import CustomersTable from "./_components/CustomersTable";

const CustomersPage = async () => {
  const res = await getCustomrsFromDB();
  return <>{res.data && <CustomersTable customers={res.data} />}</>;
};

export default CustomersPage;

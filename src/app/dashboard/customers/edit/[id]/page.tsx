import React from "react";
import { prisma } from "../../../../../../prisma";
import CreateCustomrForm from "../../_components/CreateCustomrForm";

interface Props {
  params: {
    id: string;
  };
}

const EditCustomer = async ({ params }: Props) => {
  const customer = await prisma.customer.findUnique({
    where: {
      id: params.id,
    },
  });

  return (
    <>
      {customer && (
        <CreateCustomrForm isEditable isInitialValue initialValues={customer} />
      )}
    </>
  );
};

export default EditCustomer;

"use client";

import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormField from "./FormField";
import toast from "react-hot-toast";
import {
  ICustomer,
  editCustomerFromDB,
  saveCustomerToDB,
} from "@/actions/customers";
import { useParams, useRouter } from "next/navigation";

const formValidationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  street: Yup.string().required("Street is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  zipCode: Yup.string().required("Zip Code is required"),
  country: Yup.string().required("Country is required"),
});

interface Props {
  isEditable?: boolean;
  isInitialValue?: boolean;
  initialValues?: ICustomer;
}

const initialData = {
  name: "",
  email: "",
  phone: "",
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "United States",
};

const CreateCustomrForm = ({
  isEditable,
  isInitialValue,
  initialValues = initialData,
}: Props) => {
  const initialDataValues = isInitialValue ? initialValues : initialData;
  const { id } = useParams();
  const router = useRouter();

  const handleSubmit = async (values: ICustomer) => {
    try {
      let res = null;
      if (isEditable) {
        res = await editCustomerFromDB(values, id as string);
      } else {
        res = await saveCustomerToDB(values);
      }
      if (res.error) throw new Error(res.error);
      toast.success(res.message as string);
      router.push("/dashboard/customers");
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  return (
    <>
      <div className="container mx-auto">
        <div className="border rounded-lg p-4">
          <h1 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
            Personal Information
          </h1>
          <Formik
            initialValues={initialDataValues}
            validationSchema={formValidationSchema}
            onSubmit={(values) => handleSubmit(values)}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormField
                  label="Name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                />
                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                />
                <FormField
                  label="Phone"
                  name="phone"
                  type="text"
                  placeholder="Enter your phone number"
                />
                <FormField
                  label="Street"
                  name="street"
                  type="text"
                  placeholder="Enter your street address"
                />

                <FormField
                  label="City"
                  name="city"
                  type="text"
                  placeholder="Enter your city"
                />
                <FormField
                  label="State"
                  name="state"
                  type="text"
                  placeholder="Enter your state"
                />
                <FormField
                  label="Zip Code"
                  name="zipCode"
                  type="text"
                  placeholder="Enter your zip code"
                />

                <FormField
                  label="Country"
                  name="country"
                  type="select"
                  placeholder="Select your country"
                />

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="px-4 py-2 rounded bg-gray-900 text-white focus:outline-none transition-colors"
                >
                  {isEditable
                    ? "Update customer information"
                    : isSubmitting
                    ? "Submitting..."
                    : "Create new customer"}
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </>
  );
};

export default CreateCustomrForm;

import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import Loader from "@/app/components/Loader/Loader";
import Heading from "@/app/utils/Heading";
import { useGetCourseDetailsQuery } from "@/redux/features/courses/coursesApi";
import React, { useEffect, useState } from "react";
import CourseDetails from "./CourseDetails";
import { loadStripe } from "@stripe/stripe-js";
import {
  useCreatePaymentIntentMutation,
  useGetStripePublishablekeyQuery,
} from "@/redux/features/orders/ordersApi";

type Props = {
  id: string;
};

const CourseDetailsPage = ({ id }: Props) => {
  const [route, setRoute] = useState("Login");
  const [open, setOpen] = useState(false);
  const { data, isLoading } = useGetCourseDetailsQuery(id);
  const { data: config } = useGetStripePublishablekeyQuery({});
  const [createPaymentIntent, { data: paymentIntentData }] =
    useCreatePaymentIntentMutation();
  const [stripePromise, setStripePromise] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    if (config) {
      const publishablekey = config?.publishableKey;
      setStripePromise(
        loadStripe(
          "pk_test_51OiZW5DgTUiJG4WAgO2Qbx4811YIHpIKy0fcBl40apeIuwZ8KHryv0NftB3O1Iw10rw5o3KQXeUc8Vud1nmPfwVs00ObF2PoZW"
        )
      );
    }
    if (data) {
      const amount = Math.round(data.course.price * 100);
      createPaymentIntent(amount);
    }
  }, [config, createPaymentIntent, data]);

  useEffect(() => {
    if (paymentIntentData) {
      setClientSecret(paymentIntentData?.client_secret);
    }
  }, [paymentIntentData]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Heading
            title={data?.course.name + " - Elearning"}
            description="E-learning is a platform for students to learn and get help from teachers"
            keywords={data?.course?.tags}
          />
          <Header
            open={open}
            setOpen={setOpen}
            setRoute={setRoute}
            route={route}
            activeItem={1}
          />

          {stripePromise && (
            <CourseDetails
              setOpen={setOpen}
              setRoute={setRoute}
              data={data.course}
              stripePromise={stripePromise}
              clientSecret={clientSecret}
            />
          )}

          <Footer />
        </div>
      )}
    </>
  );
};

export default CourseDetailsPage;

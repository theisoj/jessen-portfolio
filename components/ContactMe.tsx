import React, { useState } from "react";
import { motion } from "framer-motion";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { PageInfo } from "../typings";
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {
  pageInfo: PageInfo;
};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe({ pageInfo }: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    window.location.href = `mailto:${pageInfo.email}?subject=${data.subject}&body=Hei, minun nimi on ${data.name}. ${data.message}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 h-screen justify-evenly mx-auto items-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Ota yhteyttä
      </h3>

      <div className="flex flex-col space-y-10">
        <h4 className="text-4xl font-semibold text-center">
            Minulla on juuri se, mitä tarvitset.{" "}
          <span className="decoration-[#F7AB0A]/50 underline">Jutellaan.</span>
        </h4>

        <div className="space-y-10">
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
            <a className="text-2xl" href={`mailto:${pageInfo.email}`}>
              {pageInfo.email}
            </a>
          </div>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              className="contactInput"
              placeholder="Nimi"
              type="text"
              {...register("name")}
            />
            <input
              className="contactInput"
              placeholder="Sähköposti"
              type="text"
              {...register("email")}
            />
          </div>
          <input
            className="contactInput"
            placeholder="Aihe"
            type="text"
            {...register("subject")}
          />
          <textarea
            className="contactInput h-36"
            placeholder="Viesti"
            {...register("message")}
          />

          <button
            type="submit"
            className="
            bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg "
          >
            Lähetä
          </button>
        </form>
      </div>
    </motion.div>
  );
}

export default ContactMe;
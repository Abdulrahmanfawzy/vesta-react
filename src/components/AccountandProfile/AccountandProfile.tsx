


import { Input, Surface } from "@heroui/react";
import Button from "@/utils/Button";
import { FormField } from "@/utils/FormFields";


export default function AccountandProfile() {
  return (
    <div className="flex flex-col gap-8 px-4 py-10 md:flex-row md:gap-20">
      <img
        src="/Avatar.jpg"
        alt="Avatar"
        className="mx-auto h-[203px] w-[199px] rounded-full border border-gray-300 object-cover md:mx-0"
      />

      <form className="grid flex-1 grid-cols-1 gap-x-7 gap-y-7 sm:grid-cols-2">
        <FormField id="name" label="Name" placeholder="Your name" />
        <FormField
          id="phone"
          label="Phone number"
          type="tel"
          placeholder="Your phone number"
        />
        <FormField
          id="email"
          label="E-mail address"
          type="email"
          placeholder="Your email"
        />
        <FormField
          id="password"
          label="Password"
          type="password"
          placeholder="Your password"
        />
        <FormField id="user-id" label="Your ID" placeholder="Your ID" />
        <FormField
          id="confirm-password"
          label="Confirm Password"
          type="password"
          placeholder="Confirm your password"
        />

        <div className="col-span-1 mt-14 flex justify-center sm:col-span-2">
          <Button data="Save & Continue" />
        </div>
      </form>
    </div>
  );
}

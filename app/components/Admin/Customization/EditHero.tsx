/* eslint-disable @next/next/no-img-element */
"use client";
import { styles } from "@/app/styles/style";
import {
  useEditLayoutMutation,
  useGetHeroDataQuery,
} from "@/redux/features/layout/layoutApi";
import React, { FC, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineCamera } from "react-icons/ai";

type Props = {};

const EditHero: FC<Props> = (props: Props) => {
  const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [subTitle, setSubTitle] = useState("");
  const { data, refetch } = useGetHeroDataQuery("Banner", {
    refetchOnMountOrArgChange: true,
  });
  const [editLayout, { isLoading, isSuccess, error }] = useEditLayoutMutation();

  useEffect(() => {
    if (data) {
      setTitle(data?.layout?.banner.title);
      setTitle(data?.layout?.banner.subTitle);
      setImage(data?.layout?.banner?.image?.url);
    }
    if (isSuccess) {
      refetch();
      toast.success("Hero updated successfully");
    }
    if (error) {
      if ("data" in error) {
        const errorData = error as any;
        toast.error(errorData?.data?.message);
      }
    }
  }, [data, error, isSuccess, refetch]);

  const handleUpdate = (e: any) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        setImage(e.target.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEdit = async () => {
    await editLayout({ type: "Banner", image, title, subTitle });
  };

  return (
    <>
      <div className="w-full 1000px: flex flex-row items-center">
        <div className="absolute top-[100px]">
          <div className="1000px:w-[40%] flex 1000px:min-h-screen items-center justify-end pt-[70px] 1000px:pt-[0] z-[10]">
            <div className="relative flex items-center justify-end">
              <img
                src={image}
                alt=""
                className="object-contain 1100px:max-w-[90%] w-[90%] 1500px:max-w-[85%] h-[auto] z-[10]"
              />
              <input
                type="file"
                name=""
                id="banner"
                accept="image/*"
                onChange={handleUpdate}
                className="hidden"
              />
              <label
                htmlFor="banner"
                className="absolute bottom-0 right-0 z-20"
              >
                <AiOutlineCamera className="dark:text-white text-black text-[px] cursor-pointer" />
              </label>
            </div>
          </div>
          <div className="1000px:w-[60%] flex flex-col items-center 1000px:mt-[0px] text-center 1000px:text-left mt-[150px]">
            <textarea
              className="dark:text-white resize-none text-[#000000c7] text-[30px] px-3 w-full 1000px:text-[40px]  font-[600] bg-transparent"
              placeholder="Improve your Online Learning Experience Better Instantly"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              rows={4}
            />
            <br />
            <textarea
              className="dark:text-[#edfff4] text-[#000000ac] font-Josefin text-[18px] 1500px:!w-[55%] 1100px:!w-[74%]  bg-transparent"
              placeholder="Improve your Online Learning Experience Better Instantly"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
              rows={4}
            />
            <br />
            <br />
            <br />
            <div
              className={`${
                styles.button
              } !w-[100px] !min-h-[40px] dark:text-white text-black bg-[#cccccc34] ${
                data?.layout?.banner?.title !== title ||
                data?.layout?.banner?.title !== subTitle ||
                data?.layout?.banner?.image?.url !== image
                  ? "!cursor-pointer !bg-[#42d383]"
                  : "!cursor-not-allowed"
              } !rounded absolute bottom-12 right-12`}
              onClick={
                data?.layout?.banner?.title !== title ||
                data?.layout?.banner?.title !== subTitle ||
                data?.layout?.banner?.image?.url !== image
                  ? handleEdit
                  : () => {}
              }
            >
              Save
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditHero;

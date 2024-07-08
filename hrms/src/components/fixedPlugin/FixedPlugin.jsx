import { loadDarkMode, toggleDarkMode } from "api/actions";
import React, { useEffect } from "react";

import { RiMoonFill, RiSunFill } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";

export default function FixedPlugin(props) {
  const { ...rest } = props;
  const dispatch = useDispatch();
  const isDarkMode = useSelector((state) => state.customization.isDarkMode);

  useEffect(() => {
    dispatch(loadDarkMode());
  }, [dispatch]);

  const handleToggle = () => {
    dispatch(toggleDarkMode());
  };

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <button
      className="border-px fixed bottom-[30px] right-[35px] !z-[99] flex h-[60px] w-[60px] items-center justify-center rounded-full border-[#6a53ff] bg-gradient-to-br from-brandLinear to-blueSecondary p-0"
      onClick={() => {
        handleToggle();
      }}
      {...rest}
    >
      <div className="cursor-pointer text-gray-600">
        {isDarkMode ? (
          <RiSunFill className="h-4 w-4 text-white" />
        ) : (
          <RiMoonFill className="h-4 w-4 text-white" />
        )}
      </div>
    </button>
  );
}

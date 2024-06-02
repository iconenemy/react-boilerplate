import { useState } from "react";

import { useDarkMode } from "@hooks";
import { useAppDispatch } from "@/app/hook";
import { setDarkMode } from "@/app/services/utils/utils.slice";

const ThemeSwitcher = () => {
  const dispatch = useAppDispatch();
  const { isDarkMode, toggleTheme } = useDarkMode();

  const [checked, setChecked] = useState<boolean>(isDarkMode);

  const handleChange = () => {
    const newState = !checked;
    setChecked(newState);
    dispatch(setDarkMode(newState));
    toggleTheme();
  };

  return (
    <label className="relative inline-flex cursor-pointer items-center">
      <input
        id="switch"
        type="checkbox"
        checked={checked}
        className="peer sr-only"
        onChange={handleChange}
      />
      <label className="hidden"></label>
      <div className="peer h-6 w-11 rounded-full border bg-slate-200 after:absolute after:left-[2px] after:top-0.5 after:h-5 after:w-5 after:rounded-full after:border after:border-gray-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-slate-800 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:ring-green-300"></div>
    </label>
  );
};

export default ThemeSwitcher;

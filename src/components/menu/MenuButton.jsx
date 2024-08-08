/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import MenuTabs from "./MenuTabs";

export default function MenuButton({
  onSectionChange,
  isMenuOpened,
  setIsMenuOpened,
}) {
  return (
    <>
      <button
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className="relative z-30 flex flex-col items-center justify-center p-3 bg-blue-800 rounded-md w-11 h-11"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "rotate-45 translate-y-1.5" : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 transition-all ${
            isMenuOpened ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "-rotate-45 -translate-y-1.5" : ""
          }`}
        ></div>
      </button>
      <div
        className={`fixed top-0 right-0 bottom-0 bg-slate-300 transition-all overflow-hidden flex flex-col z-20 ${
          isMenuOpened ? "w-80" : "w-0"
        }`}
      >
        <div className="flex flex-col items-start justify-center flex-1 gap-6 p-8">
          <MenuTabs label="Main" onClick={() => onSectionChange(0)} />
          <MenuTabs label="About Us" onClick={() => onSectionChange(1)} />
          <MenuTabs label="Business" onClick={() => onSectionChange(2)} />
          <MenuTabs label="Contact Us" onClick={() => onSectionChange(3)} />
        </div>
      </div>
    </>
  );
}

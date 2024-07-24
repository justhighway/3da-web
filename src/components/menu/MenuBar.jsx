/* eslint-disable no-unused-vars */
import MenuTabs from "./MenuTabs";
/* eslint-disable react/prop-types */

export default function MenuBar({
  onSectionChange,
  isMenuOpened,
  setIsMenuOpened,
}) {
  return (
    <>
      <button
        onClick={() => setIsMenuOpened(!isMenuOpened)}
        className="z-20 fixed top-12 right-12 p-3 bg-blue-500 w-11 h-11 rounded-md"
      >
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "rotate-45 translate-y-0.5" : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full my-1 ${
            isMenuOpened ? "hidden " : ""
          }`}
        ></div>
        <div
          className={`bg-white h-0.5 rounded-md w-full transition-all ${
            isMenuOpened ? "-rotate-45" : ""
          }`}
        ></div>
      </button>
      <div
        className={`z-10 fixed top-0 right-0 bottom-0 bg-slate-300 transition-all overflow-hidden flex flex-col ${
          isMenuOpened ? "w-80" : "w-0"
        }`}
      >
        <div className="flex-1 flex items-start justify-center flex-col gap-6 p-8">
          <MenuTabs label="Main" onClick={() => onSectionChange(0)} />
          <MenuTabs label="About" onClick={() => onSectionChange(1)} />
          <MenuTabs label="Business" onClick={() => onSectionChange(2)} />
        </div>
      </div>
    </>
  );
}

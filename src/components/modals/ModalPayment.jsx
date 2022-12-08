import { classNameJoin } from "../../utils/classNameJoin"

const ModalPayment = () => {
  const isActive = true

  return (
    <>
      <div
        className={classNameJoin(
          isActive ? "block" : "hidden",
          "absolute left-0 top-0 z-[1010] h-full w-full bg-black/[0.65]"
        )}></div>
      <div
        className={classNameJoin(
          isActive ? "opacity-1 pointer-events-auto" : "pointer-events-none opacity-0",
          "h-[calc(100vh - 150px)] transform-[translateX(-50%) translateY(calc(-50% - 0.5px))] absolute left-1/2 top-1/2 z-[1011] w-[600px] bg-white transition-all duration-300 ease-in-out"
        )}>
        <div
          className={classNameJoin(
            isActive ? "opacity-1 pointer-events-auto" : "pointer-events-none opacity-0",
            "absolute right-[-15px] top-[-15px] h-[30px] w-[30px] cursor-pointer bg-center bg-no-repeat transition-all duration-300 ease-in-out"
          )}></div>
        <iframe
          id="iframe-invoice"
          className="h-[inherit] w-[inherit] overflow-y-scroll border-0"
          title="Invoice"></iframe>
      </div>
    </>
  )
}

export default ModalPayment

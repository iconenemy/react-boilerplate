import { createPortal } from "react-dom";
import { ReactNode, MouseEvent, Dispatch, SetStateAction } from "react";

type Props = {
  children: ReactNode;
  setModalOpen: Dispatch<SetStateAction<boolean>>;
};

const Modal = ({ children, setModalOpen }: Props) => {
  const overlayRoot = document.getElementById("portal");
  return overlayRoot
    ? createPortal(
        <div onClick={() => setModalOpen(false)}>
          <div
            onClick={(e: MouseEvent<HTMLDivElement>) => {
              e.stopPropagation();
            }}
          >
            {children}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute w-[20px] top-5 right-5"
            ></button>
          </div>
        </div>,
        overlayRoot
      )
    : null;
};

export default Modal;

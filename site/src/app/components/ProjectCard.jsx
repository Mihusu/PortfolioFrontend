"use client";
/* eslint-disable react/prop-types */
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CodeBracketIcon, EyeIcon, XMarkIcon } from "@heroicons/react/24/outline";

/** Reusable Modal */
function Modal({ open, onClose, title, children }) {
  const dialogRef = useRef(null);
  const firstFocusable = useRef(null);

  // Close on ESC
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  // Focus trap + scroll lock
  useEffect(() => {
    if (open) {
      const prevOverflow = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      // focus the first focusable control
      firstFocusable.current?.focus();
      return () => {
        document.body.style.overflow = prevOverflow;
      };
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      aria-modal="true"
      role="dialog"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-[100] flex items-center justify-center"
    >
      {/* Overlay */}
      <button
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        tabIndex={-1}
      />
      {/* Panel */}
      <div
        ref={dialogRef}
        className="relative mx-4 max-h-[80vh] w-full max-w-3xl overflow-x-hidden rounded-2xl bg-[#0f0f10] shadow-2xl ring-1 ring-white/10"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 id="modal-title" className="text-lg font-semibold text-white">
            {title}
          </h2>
          <button
            ref={firstFocusable}
            onClick={onClose}
            className="rounded-full p-2 hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            <XMarkIcon className="h-6 w-6 text-white" />
          </button>
        </div>

        {/* Body */}
        <div className="overflow-y-auto px-6 py-5 text-[#E5E7EB]">
          {children}
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-3 border-t border-white/10 px-6 py-4">
          <button
            onClick={onClose}
            className="rounded-lg bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

const ProjectCard = ({ imgUrl, title, description, gitUrl, previewContent }) => {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <div
        className="mt-6 h-52 md:h-72 rounded-t-xl relative group"
        style={{ background: `url(${imgUrl})`, backgroundSize: "cover" }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-[#181818] bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          {/* GitHub link (unchanged) */}
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            aria-label="View code"
          >
            <CodeBracketIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </Link>

          {/* Preview button -> opens modal */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link focus:outline-none focus:ring-2 focus:ring-white/40"
            aria-haspopup="dialog"
            aria-expanded={open}
            aria-controls="modal-title"
          >
            <EyeIcon className="h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover/link:text-white" />
          </button>
        </div>
      </div>

      <div className="text-white rounded-b-xl mt-2 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>

      {/* Modal */}
      <Modal open={open} onClose={() => setOpen(false)} title={`${title}`}>
        {previewContent}
      </Modal>
    </div>
  );
};

export default ProjectCard;

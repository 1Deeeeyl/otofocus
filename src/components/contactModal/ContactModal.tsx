import React from 'react';

function ContactModal({ open, onClose, children }: {
    open: boolean;
    onClose: () => void;
    children: React.ReactNode;
  }) {
  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 flex justify-center items-center transition-all z-10 ${
        open ? 'visible bg-black/20' : 'invisible'
      }`}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={`bg-white rounded-xl shadow p-6 transition-all ${
          open ? 'opacity-100 scale-100' : 'scale-125 opacity-0'
        }`}
      >
        <button className='absolute top-2 right-2 p-3 fill-gray-500 hover:fill-gray-700' onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 50 50"
            className="h-6 w-6"
          >
            <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
          </svg>
        </button>
        {children}
      </div>
    </div>
  );
}

export default ContactModal;

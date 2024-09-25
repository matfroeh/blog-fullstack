import { useState } from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";

export default function DeletePost({ handleDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  
  return (
    <>
      <button
        onClick={openModal}
        className="text-slate-400 text-lg bg-[#1E293B] p-2 rounded-md hover:text-red-600"
      >
        <RiDeleteBin7Fill />
      </button>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A] bg-opacity-65">
          <div className="bg-[#1E293B]  p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold text-slate-400">
              Confirm Delete
            </h2>
            <p className="text-slate-400 mt-2">
              Are you sure you want to delete this post? This action cannot be
              undone.
            </p>

            <div className="flex justify-end mt-4">
              <button
                onClick={closeModal}
                className="bg-[#283447] text-slate-400 hover:text-slate-300 font-bold py-2 px-4 rounded mr-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  handleDelete();
                  closeModal();
                }}
                className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

import Button from "./Button";

export default function ConfirmModal({ onConfirm, onCancel }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-lg w-80">
        <p className="mb-4">Are you sure you want to delete?</p>
        <div className="flex justify-end">
          <Button onClick={onCancel} className="mr-2 bg-gray-500">Cancel</Button>
          <Button onClick={onConfirm} className="bg-red-500">Yes</Button>
        </div>
      </div>
    </div>
  );
}
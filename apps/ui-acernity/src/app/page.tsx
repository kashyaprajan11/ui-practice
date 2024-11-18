import {
  Modal,
  ModalTrigger,
  ModalContent,
  ModalFooter,
  ModalBody,
} from "@/components/ui/animated-modal";

export default function Home() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Modal Demo</h1>

      <Modal>
        <ModalTrigger className="bg-blue-500 hover:bg-blue-600 text-white">
          Open Modal
        </ModalTrigger>

        <ModalBody>
          <ModalContent>
            <h2 className="text-xl font-semibold mb-4">Modal Title</h2>
            <p className="text-gray-600 dark:text-gray-300">
              This is the modal content. You can put any content here including
              forms, images, or other components.
            </p>
          </ModalContent>

          <ModalFooter>
            <button className="px-4 py-2 bg-gray-200 dark:bg-gray-800 rounded-md mr-2">
              Cancel
            </button>
            <button className="px-4 py-2 bg-blue-500 text-white rounded-md">
              Confirm
            </button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
}

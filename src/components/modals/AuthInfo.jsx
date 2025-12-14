import Button from "../ui/Button";

const AuthInfo = ({ onCancel }) => {
  return (
    <div className="p-5 w-[85vw] md:w-[400px] 2xl:w-[500px]">
      <p className="text-lg 2xl:text-xl font-medium text-center">
        Login Information
      </p>

      <div className="space-y-4 py-6 text-sm 2xl:text-base">
        <div>
          <h2 className="font-semibold text-lg lg:text-2xl text-purple mb-1">
            Role: Manager
          </h2>
          <p className="text-base lg:text-lg">
            <strong>Username:</strong>{" "}
            <code className="bg-gray-100 px-1  rounded">manager</code>
          </p>
          <p className="text-base lg:text-lg">
            <strong>Email:</strong>{" "}
            <code className="bg-gray-100 px-1  rounded">manager@gmail.com</code>
          </p>
          <p className="text-base lg:text-lg">
            <strong>Password:</strong>{" "}
            <code className="bg-gray-100 px-1  rounded">secret</code>
          </p>
        </div>

        <div>
          <h2 className="font-semibold text-lg lg:text-2xl text-purple mb-1">
            Role: Sales Agent
          </h2>
          <p className="text-base lg:text-lg">
            <strong>Username:</strong>{" "}
            <code className="bg-gray-100 px-1  rounded">sales</code>
          </p>
          <p className="text-base lg:text-lg">
            <strong>Email:</strong>{" "}
            <code className="bg-gray-100 px-1  rounded">sales@gmail.com</code>
          </p>
          <p className="text-base lg:text-lg">
            <strong>Password:</strong>{" "}
            <code className="bg-gray-100 px-1  rounded">secret</code>
          </p>
        </div>

        <p className="text-sm text-gray-600 mt-3">
          🔒 Ini aplikasi demo. Tidak ada fitur register — cukup login pakai
          akun di atas!
        </p>
      </div>

      <div className="grid">
        <Button variant="primary" onClick={onCancel} label="Close" />
      </div>
    </div>
  );
};

export default AuthInfo;

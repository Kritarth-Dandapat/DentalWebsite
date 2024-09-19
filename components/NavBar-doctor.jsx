import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBell, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

export default function DoctorSidebar() {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white w-20">
      <div className="flex items-center justify-center h-16">
        {/* <h1 className="text-lg font-bold">DCP</h1> */}
      </div>
      <nav className="flex flex-col space-y-4 mt-">
        <Link href="/dcp/home">
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faHome} className="text-md" />
            <span className="sr-only">Home</span>
          </div>
        </Link>
        <Link href="/dcp/patients">
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faUser} className="text-md" />
            <span className="sr-only">Patients</span>
          </div>
        </Link>
        <Link href="/dcp/notifications">
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faBell} className="text-md" />
            <span className="sr-only">Notifications</span>
          </div>
        </Link>
        <Link href="/dcp/settings">
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faCog} className="text-md" />
            <span className="sr-only">Settings</span>
          </div>
        </Link>
        <Link href="/doctor/patients">
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faSignOutAlt} className="text-md" />
            <span className="sr-only">patients</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

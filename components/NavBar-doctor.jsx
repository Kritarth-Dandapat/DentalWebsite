import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBell, faCog, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css'; // Ensure FontAwesome CSS is imported

export default function DoctorSidebar() {
  return (
    <div className="flex flex-col h-screen bg-gray-800 text-white w-20">
      {/* Sidebar Header */}
      <div className="flex items-center justify-center h-16">
        {/* You can add your logo or title here */}
        {/* <h1 className="text-lg font-bold">DCP</h1> */}
      </div>

      {/* Navigation Links */}
      <nav className="flex flex-col space-y-4 mt-4">
        {/* Home */}
        <Link href="/dcp/home" passHref>
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '20px' }} />
            <span className="sr-only">Home</span>
          </div>
        </Link>

        {/* Patients */}
        <Link href="/dcp/patients" passHref>
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faUser} style={{ fontSize: '20px' }} />
            <span className="sr-only">Patients</span>
          </div>
        </Link>

        {/* Notifications */}
        <Link href="/dcp/notifications" passHref>
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faBell} style={{ fontSize: '20px' }} />
            <span className="sr-only">Notifications</span>
          </div>
        </Link>

        {/* Settings */}
        <Link href="/dcp/settings" passHref>
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faCog} style={{ fontSize: '20px' }} />
            <span className="sr-only">Settings</span>
          </div>
        </Link>

        {/* Sign Out */}
        <Link href="/dcp/logout" passHref>
          <div className="flex flex-col items-center justify-center py-2 hover:bg-gray-700 cursor-pointer">
            <FontAwesomeIcon icon={faSignOutAlt} style={{ fontSize: '20px' }} />
            <span className="sr-only">Sign Out</span>
          </div>
        </Link>
      </nav>
    </div>
  );
}

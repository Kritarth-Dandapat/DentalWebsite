import DoctorSidebar from '../../components/NavBar-doctor'

export default function DoctorLayout({ children }) {
  return (
    <div className="flex">
      <DoctorSidebar />
      <div className="flex-grow bg-gray-100 p-6">
        {children}
      </div>
    </div>
  );
}

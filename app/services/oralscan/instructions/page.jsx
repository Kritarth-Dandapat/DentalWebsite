import React from 'react';

const InstructionsPage = () => {
  return (
    <div className="p-8 md:p-16 max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        How to Use the Oral Scan App
      </h1>
      
      <ol className="space-y-12">
        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 1: Download the App</h2>
          <p className="text-lg text-gray-700">
            Download the Oral Scan app from the App Store or Google Play.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <p className="italic text-sm text-gray-500">[Placeholder for App Screenshot]</p>
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 2: Create an Account</h2>
          <p className="text-lg text-gray-700">
            Open the app and create a new account by entering your details.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <p className="italic text-sm text-gray-500">[Placeholder for App Screenshot]</p>
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 3: Follow On-Screen Instructions</h2>
          <p className="text-lg text-gray-700">
            Follow the on-screen instructions to set up your profile and start using the app.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <p className="italic text-sm text-gray-500">[Placeholder for App Screenshot]</p>
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 4: Scan Your Teeth</h2>
          <p className="text-lg text-gray-700">
            Use the app to scan your teeth by following the guided steps.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <p className="italic text-sm text-gray-500">[Placeholder for App Screenshot]</p>
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 5: Review Your Results</h2>
          <p className="text-lg text-gray-700">
            Once the scan is complete, review your results and follow any recommendations.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <p className="italic text-sm text-gray-500">[Placeholder for App Screenshot]</p>
          </div>
        </li>
      </ol>

      {/* Video Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold text-blue-600 text-center mb-4">
          Watch the App Tutorial Video
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                width="100%"
                height="100%"
                src="" // Replace with your actual video URL
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title="App Tutorial Video"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructionsPage;

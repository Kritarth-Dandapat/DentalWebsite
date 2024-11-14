import React from 'react';

const InstructionsPage = () => {
  return (
    <div className="p-8 md:p-16 max-w-3xl mx-auto bg-white text-gray-800 rounded-lg shadow-lg">
      <h1 className="text-4xl font-bold mb-8 text-center text-blue-600">
        How to Use the Oral Scan App
      </h1>

      {/* QR Code and Expo Go Link Section */}
      <div className="text-center mb-12">
        <h2 className="text-2xl font-semibold text-blue-600 mb-4">Try the App Now</h2>
        <p className="text-lg text-gray-700 mb-4">
          Scan the QR code below to preview the app or open it directly using the link.
        </p>
        <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 inline-block mb-4">
          <img
            src="/instructions/QRCode.png" // Replace with the actual path to QR code image
            alt="QR Code for App Preview"
            className="h-60 w-60 object-contain mx-auto"
          />
        </div>
        <p className="italic text-sm text-gray-500 mb-4">[QR code to preview the app]</p>
        
        {/* Expo Go Link */}
        <p className="text-lg text-blue-600 font-semibold">
          <a
            href="https://expo.dev/preview/update?message=Update%20MVP%20done&updateRuntimeVersion=1.0.0&createdAt=2024-11-14T00%3A05%3A54.319Z&slug=exp&projectId=a4bfc804-2586-47b4-b4a4-a788ff239d29&group=8fdc2363-1393-4185-a6a1-4646ef0167d3"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Open the app in Expo Go
          </a>
        </p>
        <p className="text-gray-700 mt-2">
          To use this link, download the <strong>Expo Go</strong> app from the App Store or Google Play, then scan the QR code or click the link to open the app directly.
        </p>
      </div>

      <ol className="space-y-12">
        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 1: Download the App</h2>
          <p className="text-lg text-gray-700">
            Download the Oral Scan app from the App Store or Google Play.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <img
              src="/instructions/AppScreenshot.png" // Replace with actual image path
              alt="App Screenshot"
              className="h-48 w-full object-contain mx-auto"
            />
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 2: Create an Account</h2>
          <p className="text-lg text-gray-700">
            Open the app and create a new account by entering your details.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <img
              src="/instructions/CreateAccount.png" // Replace with actual image path
              alt="Create Account Screenshot"
              className="h-48 w-full object-contain mx-auto"
            />
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 3: Follow On-Screen Instructions</h2>
          <p className="text-lg text-gray-700">
            Follow the on-screen instructions to set up your profile and start using the app.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <img
              // src="/instructions/HomeScreen.png" // Replace with actual image path
              alt="Home Screen Screenshot"
              className="h-40 w-full object-contain mx-auto"
            />
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 4: Scan Your Teeth</h2>
          <p className="text-lg text-gray-700">
            Use the app to scan your teeth by following the guided steps.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <img
              src="/instructions/Instructions.png" // Replace with actual image path
              alt="Instructions Screenshot"
              className="h-50 w-full object-contain mx-auto"
            />
          </div>
        </li>

        <li className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">Step 5: Review Your Results</h2>
          <p className="text-lg text-gray-700">
            Once the scan is complete, review your results and follow any recommendations.
          </p>
          <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 bg-blue-50 text-center">
            <img
              src="/instructions/ReportScreen.png" // Replace with actual image path
              alt="Report Screen Screenshot"
              className="h-50 w-full object-contain mx-auto"
            />
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

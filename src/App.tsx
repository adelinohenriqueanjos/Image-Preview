import React from 'react';
import logo from './logo.svg';
import './App.css';
import ImagePreview from './ImagePreview';

function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-xl font-bold mb-4">Image Preview App</h1>
        <ImagePreview />
    </div>
</div>
  );
}

export default App;

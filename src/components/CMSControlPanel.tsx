'use client';
import React, { useState } from "react";

export default function CMSControlPanel() {
  const [enabled, setEnabled] = useState(true);

  return (
    <div className="flex justify-end w-full mb-4">
      <label className="flex items-center space-x-2 text-sm text-gray-600">
        <input type="checkbox" checked={enabled} onChange={() => setEnabled(!enabled)} />
        <span>Enable Assistant Widget</span>
      </label>
    </div>
  );
}

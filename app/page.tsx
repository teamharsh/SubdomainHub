"use client";
import { useState, FormEvent } from "react";

export default function Home() {
  const [subdomain, setSubdomain] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const response = await fetch("/api/add-subdomain", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ subdomain }),
    });

    if (response.ok) {
      alert("Subdomain added successfully!");
    } else {
      alert("Failed to add subdomain");
    }

    setSubdomain("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-10 bg-gray-900">
      <div className="bg-gray-800 p-8 rounded shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center text-white">
          Add Subdomain
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="subdomain"
              className="block text-sm font-medium text-gray-300"
            >
              Subdomain:
            </label>
            <input
              type="text"
              id="subdomain"
              className="mt-1 block w-full p-2 border border-gray-600 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-gray-700 text-white"
              value={subdomain}
              onChange={(event) => setSubdomain(event.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Subdomain
          </button>
        </form>
      </div>
    </main>
  );
}

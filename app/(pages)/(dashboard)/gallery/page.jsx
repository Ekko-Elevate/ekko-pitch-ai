"use client";
import { useState, useEffect } from 'react';
import { createpresignedurl } from '@/app/_lib/S3/createpresignedurl';

export default function Gallery() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getcreations', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        console.log(result);
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data || !data.creations) return <div>No data found</div>;
    
  async function goToPresignedLink(s3id) {
    try {
      const url = await createpresignedurl(s3id);
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Error creating presigned URL:", error);
      alert("Failed to open the link. Please try again.");
    }
  }

  return (
    <div>
      <h1 className="text-black text-4xl font-bold">Your ADs</h1>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8 text-black">Gallery</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {data.creations.map((creation, index) => (
            <div
              key={index}
              className="flex flex-col items-center border p-4 rounded-lg shadow cursor-pointer"
              onClick={() => goToPresignedLink(creation.s3id)}
            >
              <h2 className="text-2xl font-semibold text-black">{creation.title}</h2>
              <p className="text-sm text-gray-600">{new Date(creation.createdAt).toLocaleString()}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
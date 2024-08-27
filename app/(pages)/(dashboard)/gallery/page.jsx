"use client";
import { useEffect, useState } from 'react';

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
        console.log('API response:', result); // Log the API response
        setData(result);
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  async function getPresignedUrl(s3id) {
    try {
      const response = await fetch('/api/createpresignedurl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ S3ID: s3id }),
      });
      
      if (!response.ok) {
        throw new Error('Failed to get presigned URL');
      }
      
      const data = await response.json();
      return data.url;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }

  async function goToPresignedLink(s3id) {
    try {
      const url = await getPresignedUrl(s3id);
      window.open(url, '_blank', 'noopener,noreferrer');
    } catch (error) {
      console.error("Error opening presigned URL:", error);
      alert("Failed to open the link. Please try again.");
    }
  }

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!data) return <div>No data found</div>;

  // Ensure data.creations is an array, if not, make it an empty array
  const creations = Array.isArray(data.creations) ? data.creations : [];

  return (
    <div>
      <h1 className="text-black text-4xl font-bold">Your ADs</h1>

      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center my-8 text-black">Gallery</h1>
        {creations.length === 0 ? (
          <p>No creations found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {creations.map((creation, index) => (
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
        )}
      </div>
    </div>
  );
}
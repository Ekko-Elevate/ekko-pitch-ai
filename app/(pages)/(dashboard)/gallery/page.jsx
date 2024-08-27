"use client";
import { useState, useEffect } from 'react';

export default function Gallery() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/getcreations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Include any authentication headers here, e.g.:
            // 'Authorization': `Bearer ${sessionStorage.getItem('token')}`
          },
          body: JSON.stringify({
            // Include any data you want to send to the server
            // For example:
            userId: 'user123', // This should come from your auth system
          })
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
  if (!data) return <div>No data found</div>;
    
  return (
    <div className="pt-16 px-[10px]">
      <h1 className="text-black text-4xl font-bold">Your ADs</h1>
      <h1 className="text-black text-4xl font-bold">{data.msg}</h1>
    </div>
  );
}
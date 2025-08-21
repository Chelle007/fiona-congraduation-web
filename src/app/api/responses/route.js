// File: /app/api/responses/route.js
import Papa from "papaparse";

export async function GET() {
  try {
    const csvUrl = "https://docs.google.com/spreadsheets/d/1AsQmqrZ1Mgr2iA3APGYOTU0MVf0HyEM_hZ7jOS5HuxI/export?format=csv&gid=767233180";
    const res = await fetch(csvUrl);
    const csvText = await res.text();

    // Parse CSV properly
    const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true });
    const data = parsed.data;

    return new Response(JSON.stringify({ responses: data }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

// HOW TO CALL:
// const response = await fetch("/api/responses");
// const data = await response.json();
// console.log(data.responses); // Your parsed responses here

// OUTPUT:
// {
//   "responses": [
//     {
//       "Timestamp": "8/21/2025 22:42:14",
//       "Your Name": "Michelle Chan",
//       "Your message": "Congratulations and happy graduation!!!👩‍🎓\nWishing you all the best in your life and career!💫💚"
//     }
//   ]
// }
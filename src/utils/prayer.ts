import axios from "axios";
import moment from "moment";

export async function getPrayerTimes(
  latitude: number | undefined,
  longitude: number | undefined,
  date: string
) {
  const url = `https://api.aladhan.com/v1/timings/${date}?latitude=${latitude}&longitude=${longitude}&method=2`; // Adjust method if needed

  try {
    const response = await fetch(url, {
      cache: "force-cache",
    });
    const data = await response.json();
    const timings = data?.data?.timings;

    console.log("api hitted");
    console.log({ data, timings });

    // Extract Iftar and Sehri timings
    const iftar = timings.Maghrib;
    const sehri = timings.Fajr;

    return { iftar, sehri };
  } catch (error) {
    console.error("Error fetching prayer times:", error);
    return null; // Handle errors gracefully (e.g., display a message to the user)
  }
}

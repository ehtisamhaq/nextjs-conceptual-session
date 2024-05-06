"use client";
import { getPrayerTimes } from "@/utils/prayer";
import moment from "moment";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

const DigitalClock = () => {
  const [currentTime, setCurrentTime] = useState(moment().format("LTS"));
  // const [iftarTime, setIftarTime] = useState<moment.Moment>(moment());
  // const [sehriTime, setSehriTime] = useState<moment.Moment>(moment());
  // const [timeLeftToIftar, setTimeLeftToIftar] = useState<string>();
  // const [timeLeftToSehri, setTimeLeftToSehri] = useState<string>();
  // const [loading, setLoading] = useState(false); // Added loading state
  // const [latLong, setLatLong] = useState<{
  //   latitude: number;
  //   longitude: number;
  // }>();

  // const getLocation = () => {
  //   if (navigator?.geolocation) {
  //     navigator.geolocation.getCurrentPosition(
  //       (position) => {
  //         const latitude = position.coords.latitude;
  //         const longitude = position.coords.longitude;
  //         setLatLong({ latitude, longitude });
  //       },
  //       (error) => {
  //         console.error("Error:", error.message);
  //       }
  //     );
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // };
  // getLocation();

  // useEffect(() => {
  //   getLocation();
  // }, []);

  // useEffect(() => {
  //   const getPrayerTime = async () => {
  //     const today = moment().format("YYYY-MM-DD");

  //     if (latLong) {
  //       const prayerTimes = await getPrayerTimes(
  //         latLong.latitude,
  //         latLong.longitude,
  //         today
  //       );

  //       // console.log({
  //       //   prayerTimes: moment(prayerTimes?.iftar).format("hh:mm A"),
  //       //   prayerTmes: moment(prayerTimes?.sehri).format("hh:mm A"),
  //       // });

  //       if (prayerTimes) {
  //         setIftarTime(prayerTimes.iftar);
  //         setSehriTime(prayerTimes.sehri);
  //       }
  //     } else {
  //       console.log("Geolocation is not supported by this browser.");
  //     }
  //   };
  //   getPrayerTime();
  // }, [latLong]);

  // console.log(latLong);

  // useEffect(() => {
  //   const updateClock = () => {
  //     setCurrentTime(moment());
  //   };

  // const refreshPrayerTimes = async () => {
  //   setLoading(true); // Set loading state to true

  //   // Calculate time left to Iftar and Sehri
  //   const timeToIftar = moment.duration(
  //     iftarTime && iftarTime.diff(currentTime)
  //   );
  //   setTimeLeftToIftar(
  //     timeToIftar.asHours() + "h " + timeToIftar.minutes() + "m"
  //   );

  //   const timeToSehri = moment.duration(
  //     sehriTime.add(1, "days").diff(currentTime)
  //   );
  //   setTimeLeftToSehri(
  //     timeToSehri.asHours() + "h " + timeToSehri.minutes() + "m"
  //   );

  //   setLoading(false); // Set loading state to false after update
  // };

  //   const intervalId = setInterval(() => {
  //     updateClock();
  //     refreshPrayerTimes();
  //   }, 1000); // Update every second

  //   return () => clearInterval(intervalId);
  // }, [currentTime, iftarTime, sehriTime]);

  return (
    <div>
      <h1>Ramadan Timer</h1>
      <h2>Current Time: {currentTime}</h2>
      {/* {loading ? (
        <p>Loading prayer times...</p>
      ) : (
        <>
          {iftarTime && (
            <div>
              <h3>Iftar: {iftarTime?.format("HH:mm")}</h3>
              {timeLeftToIftar && <p>Time Left to Iftar: {timeLeftToIftar}</p>}
            </div>
          )}
          {sehriTime && (
            <div>
              <h3>Sehri: {sehriTime.format("HH:mm")}</h3>
              {timeLeftToSehri && <p>Time Left to Sehri: {timeLeftToSehri}</p>}
            </div>
          )}
        </>
      )} */}
    </div>
  );
};

export default DigitalClock;

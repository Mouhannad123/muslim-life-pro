import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PrayerTimes = () => {
  const [times, setTimes] = useState({});

  useEffect(() => {
    fetch("https://api.aladhan.com/v1/timingsByCity?city=Mecca&country=Saudi%20Arabia")
      .then(response => response.json())
      .then(data => setTimes(data.data.timings));
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Prayer Times</Text>
      <Text>Fajr: {times.Fajr || "Loading..."}</Text>
      <Text>Dhuhr: {times.Dhuhr || "Loading..."}</Text>
    </View>
  );
};

export default PrayerTimes;

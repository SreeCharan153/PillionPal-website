"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PiggyBank, Fuel, RefreshCcw, Gauge, MapPin } from "lucide-react";

export default function SavingsCalculator() {
  const [distance, setDistance] = useState(5); // km
  const [mileage, setMileage] = useState(40); // km/l
  const [fuelPrice, setFuelPrice] = useState(110); // INR
  const [fairSplit, setFairSplit] = useState(50); // %
  const [tripsPerDay, setTripsPerDay] = useState(4);
  const [daysPerMonth, setDaysPerMonth] = useState(22);

  // CALCULATIONS
  const {
    costAlone,
    userShare,
    savingsPerTrip,
    dailySavings,
    monthlySavings,
  } = useMemo(() => {
    const costAlone =
      (distance / mileage) * fuelPrice;

    const userShare =
      costAlone * (fairSplit / 100); // FairSplit percentage

    const savingsPerTrip = costAlone - userShare;

    const dailySavings = savingsPerTrip * tripsPerDay;

    const monthlySavings = dailySavings * daysPerMonth;

    return {
      costAlone: Math.round(costAlone),
      userShare: Math.round(userShare),
      savingsPerTrip: Math.round(savingsPerTrip),
      dailySavings: Math.round(dailySavings),
      monthlySavings: Math.round(monthlySavings),
    };
  }, [distance, mileage, fuelPrice, fairSplit, tripsPerDay, daysPerMonth]);

  const reset = () => {
    setDistance(5);
    setMileage(40);
    setFuelPrice(110);
    setFairSplit(50);
    setTripsPerDay(4);
    setDaysPerMonth(22);
  };

  return (
    <section className="py-20 px-6 bg-white dark:bg-[#0B0F0E] transition-colors duration-300">
      <div className="max-w-5xl mx-auto">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100">
            Calculate Your{" "}
            <span className="text-[#008955] dark:text-[#3DD68C]">
              Monthly Savings
            </span>
          </h2>
          <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Find out how much you save every month by sharing rides instead of traveling alone.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10 items-stretch">

          {/* INPUT CARD */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-6 bg-white dark:bg-[#111A18] border-gray-200 dark:border-white/10 shadow-sm">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-lg flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <Fuel className="h-5 w-5 text-[#008955] dark:text-[#3DD68C]" />
                  Ride Inputs
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Tune these to match your daily travel patterns.
                </p>
              </CardHeader>

              <CardContent className="space-y-8 p-0 mt-6">

                <SliderField
                  label="Distance per trip (km)"
                  value={distance}
                  min={1}
                  max={30}
                  step={1}
                  onChange={setDistance}
                />

                <SliderField
                  label="Your bike mileage (km/l)"
                  value={mileage}
                  min={20}
                  max={80}
                  step={1}
                  onChange={setMileage}
                />

                <SliderField
                  label="Fuel price per litre (₹)"
                  value={fuelPrice}
                  min={80}
                  max={150}
                  step={1}
                  onChange={setFuelPrice}
                />

                <SliderField
                  label="FairSplit percentage (%)"
                  value={fairSplit}
                  min={20}
                  max={80}
                  step={5}
                  onChange={setFairSplit}
                />

                <SliderField
                  label="Trips per day"
                  value={tripsPerDay}
                  min={1}
                  max={15}
                  step={1}
                  onChange={setTripsPerDay}
                />

                <SliderField
                  label="Days per month"
                  value={daysPerMonth}
                  min={10}
                  max={30}
                  step={1}
                  onChange={setDaysPerMonth}
                />

                <Button
                  variant="ghost"
                  onClick={reset}
                  className="flex items-center gap-2 text-gray-700 dark:text-gray-300"
                >
                  <RefreshCcw className="h-4 w-4" />
                  Reset
                </Button>

              </CardContent>
            </Card>
          </motion.div>

          {/* OUTPUT CARD */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <Card className="p-6 bg-white dark:bg-[#111A18] border-gray-200 dark:border-white/10 shadow-sm flex flex-col justify-between h-full">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-lg flex items-center gap-2 text-gray-900 dark:text-gray-100">
                  <PiggyBank className="h-5 w-5 text-[#008955] dark:text-[#3DD68C]" />
                  Savings Estimate
                </CardTitle>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  These savings reflect how much you keep by sharing rides.
                </p>
              </CardHeader>

              <CardContent className="space-y-8 p-0 mt-6">

                {/* Cost Alone */}
                <OutputField
                  label="Your cost if traveling alone"
                  value={`₹${costAlone}`}
                />

                {/* Your Share */}
                <OutputField
                  label="Your cost using PillionPal"
                  value={`₹${userShare}`}
                />

                <OutputField
                  label="Savings per trip"
                  value={`₹${savingsPerTrip}`}
                  highlight
                />

                <OutputField
                  label="Daily savings"
                  value={`₹${dailySavings}`}
                />

                <OutputField
                  label="Monthly savings"
                  value={`₹${monthlySavings}`}
                  strong
                />
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// Reusable Components
function SliderField({ label, value, min, max, step, onChange }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between text-sm font-medium">
        <label className="text-gray-800 dark:text-gray-200">{label}</label>
        <span className="text-[#008955] dark:text-[#3DD68C] font-semibold">
          {value}
        </span>
      </div>
      <input
        type="range"
        className="w-full accent-[#008955] dark:accent-[#3DD68C]"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function OutputField({ label, value, strong = false, highlight = false }: any) {
  return (
    <div
      className={`
        rounded-xl p-4 
        ${highlight
          ? "border border-[#008955]/40 dark:border-[#3DD68C]/40 bg-[#F0FBF5] dark:bg-[#0F1E18]"
          : "border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#141D1A]"
        }
      `}
    >
      <p className="text-gray-600 dark:text-gray-400 text-sm">{label}</p>
      <p className={`
        mt-1 text-2xl 
        ${strong ? "font-extrabold" : "font-bold"}
        ${highlight ? "text-[#008955] dark:text-[#3DD68C]" : "text-gray-900 dark:text-gray-100"}
      `}>
        {value}
      </p>
    </div>
  );
}

import { useState } from "react";

export const PhoneNumberInput = () => {
  const [digits, setDigits] = useState("");

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    const len = cleaned.length;

    if (len === 0) return "";
    if (len < 4) return cleaned;
    if (len < 7) return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3)}`;
    return `(${cleaned.slice(0, 3)}) ${cleaned.slice(3, 6)}-${cleaned.slice(6)}`;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const onlyDigits = input.replace(/\D/g, "");
    setDigits(onlyDigits.slice(0, 10));
  };

  return (
    <div style={{ padding: "25px" }}>
      <input
        type="tel"
        value={formatPhoneNumber(digits)}
        onChange={handleChange}
        placeholder="Enter phone number"
      />
    </div>
  );
};


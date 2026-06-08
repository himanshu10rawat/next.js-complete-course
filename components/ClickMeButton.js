"use client";

export default function ClickMeButton() {
  return (
    <button type="button" onClick={() => console.log("Clicked")}>
      Click Me
    </button>
  );
}

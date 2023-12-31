import React from "react";

export interface FormikTextInputProps {
  name: string;
  type?: string;
  placeholder?: string;
  label: string;
  icon?: React.ReactNode;
  size?: "1" | "2" | "3";
  color?:
    | "tomato"
    | "red"
    | "ruby"
    | "crimson"
    | "pink"
    | "plum"
    | "purple"
    | "violet"
    | "iris"
    | "indigo"
    | "blue"
    | "cyan"
    | "teal"
    | "jade"
    | "green"
    | "grass"
    | "brown"
    | "orange"
    | "sky"
    | "mint"
    | "lime"
    | "yellow"
    | "amber"
    | "gold"
    | "bronze"
    | "gray";
  variant?: "classic" | "surface" | "soft";
  radius?: "none" | "small" | "medium" | "large" | "full";
}

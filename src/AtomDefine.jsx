import React from "react";
import { atom } from "recoil";

export const colorState = atom({
    key: 'colorState',
    default: 'blue',
});
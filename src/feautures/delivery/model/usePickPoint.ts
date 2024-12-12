'use client'

import { useState } from "react";

export const usePickupPoint = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedPoint, setSelectedPoint] = useState<string>("");

    const handleSelect = (point: string) => {
        setSelectedPoint(point);
        setIsOpen(false);
    };

    return {
        isOpen,
        setIsOpen,
        selectedPoint,
        handleSelect,
    };
};

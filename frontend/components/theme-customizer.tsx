"use client";

import { useState, useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface ThemeCustomizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const PRESET_THEMES = [
  {
    name: "Blue",
    primary: "#0070f3",
    accent: "#06b6d4",
    colors: { dark: "#1a1a1a", light: "#ffffff" },
  },
  {
    name: "Purple",
    primary: "#9333ea",
    accent: "#ec4899",
    colors: { dark: "#1a1a1a", light: "#ffffff" },
  },
  {
    name: "Green",
    primary: "#16a34a",
    accent: "#06b6d4",
    colors: { dark: "#1a1a1a", light: "#ffffff" },
  },
  {
    name: "Rose",
    primary: "#e11d48",
    accent: "#f97316",
    colors: { dark: "#1a1a1a", light: "#ffffff" },
  },
];

export function ThemeCustomizer({ isOpen, onClose }: ThemeCustomizerProps) {
  const { toast } = useToast();
  const [customTheme, setCustomTheme] = useState({
    primary: "#0070f3",
    accent: "#06b6d4",
  });

  useEffect(() => {
    const saved = localStorage.getItem("custom-theme");
    if (saved) {
      const theme = JSON.parse(saved);
      setCustomTheme(theme);
      applyTheme(theme);
    }
  }, []);

  const applyTheme = (theme: { primary: string; accent: string }) => {
    const root = document.documentElement;
    root.style.setProperty("--color-primary-custom", theme.primary);
    root.style.setProperty("--color-accent-custom", theme.accent);

    // Force re-render by triggering a style recalculation
    root.classList.add("theme-custom");
  };

  const handlePresetSelect = (preset: (typeof PRESET_THEMES)[0]) => {
    const newTheme = {
      primary: preset.primary,
      accent: preset.accent,
    };
    setCustomTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("custom-theme", JSON.stringify(newTheme));
    toast({
      title: "Theme Applied",
      description: `${preset.name} theme has been applied successfully.`,
    });
  };

  const handleColorChange = (key: "primary" | "accent", value: string) => {
    const newTheme = { ...customTheme, [key]: value };
    setCustomTheme(newTheme);
    applyTheme(newTheme);
    localStorage.setItem("custom-theme", JSON.stringify(newTheme));
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Customize Theme</DialogTitle>
          <DialogDescription>
            Choose a preset or customize colors to personalize your experience.
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-6">
          {/* Presets */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Preset Themes</Label>
            <div className="grid grid-cols-2 gap-2">
              {PRESET_THEMES.map((preset) => (
                <Button
                  key={preset.name}
                  variant="outline"
                  onClick={() => handlePresetSelect(preset)}
                  className="h-auto py-3"
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex gap-1">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: preset.primary }}
                      />
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: preset.accent }}
                      />
                    </div>
                    <span className="text-xs">{preset.name}</span>
                  </div>
                </Button>
              ))}
            </div>
          </div>

          {/* Custom Colors */}
          <div className="space-y-3 border-t pt-4">
            <Label className="text-sm font-medium">Custom Colors</Label>

            <div className="space-y-2">
              <Label htmlFor="primary-color" className="text-xs">
                Primary Color
              </Label>
              <div className="flex gap-2 items-center">
                <input
                  id="primary-color"
                  type="color"
                  value={customTheme.primary}
                  onChange={(e) => handleColorChange("primary", e.target.value)}
                  className="w-12 h-10 rounded cursor-pointer border"
                />
                <span className="text-sm font-mono">{customTheme.primary}</span>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="accent-color" className="text-xs">
                Accent Color
              </Label>
              <div className="flex gap-2 items-center">
                <input
                  id="accent-color"
                  type="color"
                  value={customTheme.accent}
                  onChange={(e) => handleColorChange("accent", e.target.value)}
                  className="w-12 h-10 rounded cursor-pointer border"
                />
                <span className="text-sm font-mono">{customTheme.accent}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-end gap-2 pt-4 border-t">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

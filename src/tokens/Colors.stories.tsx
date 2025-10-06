import type { Meta, StoryObj } from "@storybook/react";
import { colors } from "./colors";

const meta: Meta = {
  title: "Tokens/Colors",
  parameters: {
    layout: "padded",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj;

export const Palette: Story = {
  render: () => (
    <div className="space-y-8">
      {/* Primary Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Primary Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors)
            .filter(([key]) => key.startsWith("primary"))
            .map(([key, value]) => (
              <div key={key} className="text-center">
                <div
                  className="w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200"
                  style={{ backgroundColor: value as string }}
                />
                <code className="text-xs font-mono">{key}</code>
                <p className="text-xs text-gray-600 mt-1">{value as string}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Secondary Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Secondary Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors)
            .filter(([key]) => key.startsWith("secondary"))
            .map(([key, value]) => (
              <div key={key} className="text-center">
                <div
                  className="w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200"
                  style={{ backgroundColor: value as string }}
                />
                <code className="text-xs font-mono">{key}</code>
                <p className="text-xs text-gray-600 mt-1">{value as string}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Accent Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Accent Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors)
            .filter(([key]) => key.startsWith("accent"))
            .map(([key, value]) => (
              <div key={key} className="text-center">
                <div
                  className="w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200"
                  style={{ backgroundColor: value as string }}
                />
                <code className="text-xs font-mono">{key}</code>
                <p className="text-xs text-gray-600 mt-1">{value as string}</p>
              </div>
            ))}
        </div>
      </div>

      {/* Gray Scale */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Gray Scale</h3>
        <div className="grid grid-cols-5 md:grid-cols-10 gap-2">
          {Object.entries(colors.gray).map(([key, value]) => (
            <div key={key} className="text-center">
              <div
                className="w-16 h-16 rounded-lg mx-auto mb-2 border border-gray-200"
                style={{ backgroundColor: value as string }}
              />
              <code className="text-xs font-mono">{key}</code>
              <p className="text-xs text-gray-600 mt-1">{value as string}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Semantic Colors */}
      <div>
        <h3 className="text-lg font-semibold mb-4">Semantic Colors</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {Object.entries(colors)
            .filter(([key]) =>
              ["success", "warning", "error", "info"].includes(key)
            )
            .map(([key, value]) => (
              <div key={key} className="text-center">
                <div
                  className="w-20 h-20 rounded-lg mx-auto mb-2 border border-gray-200"
                  style={{ backgroundColor: value as string }}
                />
                <code className="text-xs font-mono">{key}</code>
                <p className="text-xs text-gray-600 mt-1">{value as string}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  ),
};

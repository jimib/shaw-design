import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "./Card";

const meta: Meta<typeof Card> = {
  title: "Components/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["default", "gradient", "vintage"],
    },
    compact: {
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Default Card</CardTitle>
          <CardDescription>
            This is a default card with basic styling.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Card content goes here. This is where you would put the main content
            of your card.
          </p>
        </CardContent>
      </>
    ),
    variant: "default",
  },
};

export const Gradient: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Gradient Card</CardTitle>
          <CardDescription>
            This card uses the Shaw Heritage gradient background.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This card features a beautiful gradient background that matches the
            Shaw Heritage design system.
          </p>
        </CardContent>
      </>
    ),
    variant: "gradient",
  },
};

export const Vintage: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Vintage Card</CardTitle>
          <CardDescription>
            This card uses the vintage gradient with elegant shadows.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            This card features the vintage gradient background with enhanced
            shadow effects for a more premium look.
          </p>
        </CardContent>
      </>
    ),
    variant: "vintage",
  },
};

export const Compact: Story = {
  args: {
    children: (
      <>
        <CardHeader>
          <CardTitle>Compact Card</CardTitle>
          <CardDescription>
            This card has reduced padding for a more compact layout.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            Perfect for dense layouts where you need to fit more content in less
            space.
          </p>
        </CardContent>
      </>
    ),
    variant: "default",
    compact: true,
  },
};

export const CompactComparison: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Normal Card</CardTitle>
          <CardDescription>Standard padding</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card uses the default padding of 24px.</p>
        </CardContent>
      </Card>

      <Card variant="default" compact>
        <CardHeader>
          <CardTitle>Compact Card</CardTitle>
          <CardDescription>Reduced padding</CardDescription>
        </CardHeader>
        <CardContent>
          <p>This card uses compact padding of 12px.</p>
        </CardContent>
      </Card>
    </div>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl">
      <Card variant="default">
        <CardHeader>
          <CardTitle>Default</CardTitle>
          <CardDescription>Basic card styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Standard card with clean design.</p>
        </CardContent>
      </Card>

      <Card variant="gradient">
        <CardHeader>
          <CardTitle>Gradient</CardTitle>
          <CardDescription>Shaw Heritage gradient</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with gradient background.</p>
        </CardContent>
      </Card>

      <Card variant="vintage">
        <CardHeader>
          <CardTitle>Vintage</CardTitle>
          <CardDescription>Premium vintage styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p>Card with vintage gradient and shadows.</p>
        </CardContent>
      </Card>
    </div>
  ),
};


import React from "react";
import {
  PageLayout,
  Sidebar,
  SidebarProvider,
  Main,
  Container,
} from "../layout";
import { Button, Card, CardContent, CardTitle } from "../";
import { FilePlus, Lightbulb, BookOpen, Layers } from "lucide-react";
import styled from "styled-components";
import { ExampleSidebar } from "./ExampleSidebar";


const CreateSection = styled(Card)`
  padding: 32px;
  text-align: center;
  margin-bottom: 48px;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 1rem;
  background: hsl(var(--primary) / 0.1);
  margin: 0 auto 24px;
`;

const InfoCard = styled(Card)`
  padding: 20px;
  margin: 0;
`;

const InfoIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 0.5rem;
  background: hsl(var(--secondary));
  margin-bottom: 12px;
`;

export const CurateNewArticleExample: React.FC = () => {
  return (
    <SidebarProvider>
      <PageLayout
        showSidebar={true}
        sidebar={<ExampleSidebar activePath="#" />}
        containerSize="full"
      >
        <div style={{ padding: "40px", maxWidth: "768px", margin: "0 auto" }}>
          {/* Header */}
          <div style={{ marginBottom: "40px" }}>
            <h1
              style={{
                fontSize: "24px",
                fontWeight: 600,
                margin: "0 0 4px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              New Article
            </h1>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: 0,
              }}
            >
              Create narrative content from archive materials
            </p>
          </div>

          {/* Create Article Section */}
          <CreateSection>
            <IconContainer>
              <FilePlus style={{ width: "40px", height: "40px", color: "hsl(var(--primary))" }} />
            </IconContainer>
            <h2
              style={{
                fontSize: "20px",
                fontWeight: 500,
                margin: "0 0 12px 0",
                color: "hsl(var(--foreground))",
              }}
            >
              Start a New Article
            </h2>
            <p
              style={{
                fontSize: "14px",
                color: "hsl(var(--muted-foreground))",
                margin: "0 auto 32px",
                maxWidth: "512px",
              }}
            >
              Create a new article by searching the archive for relevant content, themes, and narratives.
              Articles can span multiple pages and include various media types from the heritage collection.
            </p>
            <Button variant="primary" size="lg" icon={FilePlus} iconPosition="left">
              Create Article
            </Button>
          </CreateSection>

          {/* Info Cards */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "16px",
            }}
          >
            <InfoCard>
              <InfoIconContainer>
                <Lightbulb style={{ width: "20px", height: "20px", color: "hsl(38 92% 50%)" }} />
              </InfoIconContainer>
              <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>Search First</CardTitle>
              <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                Browse the archive to find content that supports your narrative before you begin writing.
              </p>
            </InfoCard>

            <InfoCard>
              <InfoIconContainer>
                <Layers style={{ width: "20px", height: "20px", color: "hsl(var(--primary))" }} />
              </InfoIconContainer>
              <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>Multi-Page</CardTitle>
              <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                Articles can consist of multiple pages, allowing for in-depth exploration of themes.
              </p>
            </InfoCard>

            <InfoCard>
              <InfoIconContainer>
                <BookOpen style={{ width: "20px", height: "20px", color: "hsl(142 76% 36%)" }} />
              </InfoIconContainer>
              <CardTitle style={{ fontSize: "14px", marginBottom: "4px" }}>Headless CMS</CardTitle>
              <p style={{ fontSize: "12px", color: "hsl(var(--muted-foreground))", margin: 0 }}>
                Content created here can be published to external domains via the Exhibition Assistant.
              </p>
            </InfoCard>
          </div>
        </div>
      </PageLayout>
    </SidebarProvider>
  );
};

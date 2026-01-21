import React, { useState } from "react";
import { Logo } from "../";
import {
  Archive,
  Upload,
  Search,
  Feather,
  FilePlus,
  FileText,
  Globe,
  Settings,
  Users,
  LogOut,
  ChevronDown,
  LayoutDashboard,
  Library,
} from "lucide-react";
import styled from "styled-components";

interface NavItem {
  label: string;
  icon: React.ElementType;
  href: string;
  storyTitle?: string; // Storybook story title for navigation
}

interface NavGroup {
  label: string;
  icon: React.ElementType;
  items: NavItem[];
}

// Helper function to convert Storybook title to story ID
const getStorybookPath = (title: string): string => {
  // Convert "Examples/Archive/Upload" to "examples-archive-upload--default"
  const storyId = title
    .toLowerCase()
    .replace(/\//g, "-")
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
  return `?path=/story/${storyId}--default`;
};

const navGroups: NavGroup[] = [
  {
    label: "Archive",
    icon: Archive,
    items: [
      { 
        label: "Upload", 
        icon: Upload, 
        href: getStorybookPath("Examples/Archive/Upload"),
        storyTitle: "Examples/Archive/Upload"
      },
      { 
        label: "My Workspace", 
        icon: Library, 
        href: getStorybookPath("Examples/Archive/Library"),
        storyTitle: "Examples/Archive/Library"
      },
      { 
        label: "Library", 
        icon: Search, 
        href: getStorybookPath("Examples/Archive/Edit"),
        storyTitle: "Examples/Archive/Edit"
      },
    ],
  },
  {
    label: "Curate",
    icon: Feather,
    items: [
      { 
        label: "New Article", 
        icon: FilePlus, 
        href: getStorybookPath("Examples/Curate/NewArticle"),
        storyTitle: "Examples/Curate/NewArticle"
      },
      { 
        label: "My Articles", 
        icon: FileText, 
        href: getStorybookPath("Examples/Curate/MyArticles"),
        storyTitle: "Examples/Curate/MyArticles"
      },
      { 
        label: "Articles", 
        icon: FileText, 
        href: getStorybookPath("Examples/Curate/Articles"),
        storyTitle: "Examples/Curate/Articles"
      },
    ],
  },
  {
    label: "Exhibition",
    icon: Globe,
    items: [
      { 
        label: "Exhibition Assistant", 
        icon: Globe, 
        href: getStorybookPath("Examples/Exhibition"),
        storyTitle: "Examples/Exhibition"
      },
    ],
  },
  {
    label: "Admin",
    icon: Settings,
    items: [
      { 
        label: "Tools & Resources", 
        icon: Settings, 
        href: getStorybookPath("Examples/Admin/Admin"),
        storyTitle: "Examples/Admin/Admin"
      },
      { 
        label: "Users", 
        icon: Users, 
        href: getStorybookPath("Examples/Admin/Users"),
        storyTitle: "Examples/Admin/Users"
      },
      { 
        label: "Universe", 
        icon: Globe, 
        href: getStorybookPath("Examples/Admin/Universe"),
        storyTitle: "Examples/Admin/Universe"
      },
    ],
  },
];

const dashboardHref = getStorybookPath("Examples/DashboardExample");

interface ExampleSidebarProps {
  activePath?: string;
  onNavigate?: (path: string) => void;
}

const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: hsl(var(--sidebar-background));
  color: hsl(var(--sidebar-foreground));
  border-right: 1px solid hsl(var(--sidebar-border));
`;

const LogoText = styled.div`
  h1 {
    font-size: 16px;
    font-weight: 600;
    margin: 0;
    color: hsl(var(--foreground));
  }

  p {
    font-size: 12px;
    margin: 0;
    color: hsl(var(--muted-foreground));
  }
`;

const DashboardLink = styled.a<{ $active: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  margin: 0 12px 8px;
  border-radius: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ $active }) =>
    $active
      ? "hsl(var(--sidebar-accent-foreground))"
      : "hsl(var(--sidebar-foreground))"};
  background: ${({ $active }) =>
    $active ? "hsl(var(--sidebar-accent))" : "transparent"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: hsl(var(--sidebar-accent));
    color: hsl(var(--sidebar-accent-foreground));
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const NavSection = styled.nav`
  flex: 1;
  overflow-y: auto;
  padding: 16px 12px;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const GroupButton = styled.button<{ $active: boolean; $isAdmin: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 10px 12px;
  border-radius: 0.5rem;
  border: none;
  background: ${({ $active, $isAdmin }) =>
    $active
      ? $isAdmin
        ? "hsl(38 92% 50% / 0.1)"
        : "hsl(var(--sidebar-accent) / 0.5)"
      : "transparent"};
  color: ${({ $active, $isAdmin }) =>
    $active
      ? $isAdmin
        ? "hsl(38 92% 50%)"
        : "hsl(var(--sidebar-accent-foreground))"
      : "hsl(var(--muted-foreground))"};
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: ${({ $isAdmin }) =>
      $isAdmin ? "hsl(38 92% 50%)" : "hsl(var(--foreground))"};
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const GroupIconContainer = styled.div<{ $active: boolean; $isAdmin: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;

  svg {
    color: ${({ $active, $isAdmin }) =>
      $active
        ? $isAdmin
          ? "hsl(38 92% 50%)"
          : "hsl(var(--primary))"
        : $isAdmin
          ? "hsl(38 92% 50% / 0.7)"
          : "inherit"};
  }
`;

const ChevronIcon = styled(ChevronDown)<{ $expanded: boolean }>`
  width: 14px;
  height: 14px;
  transition: transform 0.2s ease-in-out;
  transform: ${({ $expanded }) => ($expanded ? "rotate(180deg)" : "rotate(0deg)")};
`;

const SubMenuList = styled.ul`
  list-style: none;
  margin: 4px 0 0 0;
  padding: 0 0 0 16px;
  display: flex;
  flex-direction: column;
  gap: 2px;
`;

const SubMenuItem = styled.a<{ $active: boolean; $isAdmin: boolean }>`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  border-radius: 0.5rem;
  font-size: 14px;
  font-weight: 500;
  text-decoration: none;
  color: ${({ $active, $isAdmin }) =>
    $active
      ? $isAdmin
        ? "hsl(38 92% 50%)"
        : "hsl(var(--sidebar-accent-foreground))"
      : "hsl(var(--sidebar-foreground))"};
  background: ${({ $active, $isAdmin }) =>
    $active
      ? $isAdmin
        ? "hsl(38 92% 50% / 0.15)"
        : "hsl(var(--sidebar-accent))"
      : "transparent"};
  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${({ $isAdmin }) =>
      $isAdmin
        ? "hsl(38 92% 50% / 0.1)"
        : "hsl(var(--sidebar-accent))"};
    color: ${({ $isAdmin }) =>
      $isAdmin ? "hsl(38 92% 50%)" : "hsl(var(--sidebar-accent-foreground))"};
  }

  svg {
    width: 16px;
    height: 16px;
    color: ${({ $active, $isAdmin }) =>
      $active
        ? $isAdmin
          ? "hsl(38 92% 50%)"
          : "inherit"
        : $isAdmin
          ? "hsl(38 92% 50% / 0.6)"
          : "inherit"};
  }
`;

const AdminSeparator = styled.div`
  margin-top: 24px;
  padding-top: 16px;
  border-top: 1px solid hsl(var(--sidebar-border));
`;

const FooterSection = styled.div`
  padding: 16px 12px;
  border-top: 1px solid hsl(var(--sidebar-border));
`;

const SignOutButton = styled.button`
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  padding: 10px 12px;
  border-radius: 0.5rem;
  border: none;
  background: transparent;
  color: hsl(var(--sidebar-foreground));
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: hsl(var(--sidebar-accent));
    color: hsl(var(--sidebar-accent-foreground));
  }

  svg {
    width: 16px;
    height: 16px;
  }
`;

const UserProfile = styled.a`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px 12px;
  margin-top: 16px;
  border-radius: 0.5rem;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease-in-out;

  &:hover {
    background: hsl(var(--sidebar-accent));
  }
`;

const UserAvatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 9999px;
  background: hsl(var(--primary) / 0.1);
  font-size: 14px;
  font-weight: 500;
  color: hsl(var(--primary));
`;

const UserName = styled.p`
  font-size: 14px;
  font-weight: 500;
  margin: 0;
  color: hsl(var(--foreground));
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const VersionText = styled.p`
  font-size: 12px;
  color: hsl(var(--muted-foreground));
  margin: 12px 0 0 12px;
`;

export const ExampleSidebar: React.FC<ExampleSidebarProps> = ({
  activePath,
  onNavigate,
}) => {
  const [expandedGroups, setExpandedGroups] = useState<string[]>([]);
  
  // Use current hash if activePath not provided
  const currentPath = activePath || window.location.hash || "#";

  // Auto-expand groups containing active path
  // Check current Storybook query parameter or hash
  React.useEffect(() => {
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    const pathToCheck = currentPath;
    
    const activeGroup = navGroups.find((group) =>
      group.items.some((item) => {
        if (item.href === "#") return false;
        // Check if current query parameter matches the story path
        const storyId = item.href.replace("?path=/story/", "").replace("--default", "");
        const searchMatch = currentSearch.includes(`path=/story/${storyId}`);
        const hashStoryId = currentHash.replace("#/story/", "").replace("--default", "");
        return pathToCheck.includes(item.href) || 
               searchMatch ||
               hashStoryId === storyId ||
               (item.storyTitle && (currentSearch.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-")) || 
                                    currentHash.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-"))));
      })
    );
    if (activeGroup && !expandedGroups.includes(activeGroup.label)) {
      setExpandedGroups((prev) => [...prev, activeGroup.label]);
    }
  }, [currentPath, expandedGroups]);

  const toggleGroup = (label: string) => {
    setExpandedGroups((prev) =>
      prev.includes(label) ? prev.filter((g) => g !== label) : [...prev, label]
    );
  };

  const isGroupActive = (group: NavGroup) => {
    const currentSearch = window.location.search;
    const currentHash = window.location.hash;
    const pathToCheck = currentPath;
    return group.items.some((item) => {
      if (item.href === "#") return false;
      const storyId = item.href.replace("?path=/story/", "").replace("--default", "");
      const searchMatch = currentSearch.includes(`path=/story/${storyId}`);
      const hashStoryId = currentHash.replace("#/story/", "").replace("--default", "");
      return pathToCheck.includes(item.href) ||
             searchMatch ||
             hashStoryId === storyId ||
             (item.storyTitle && (currentSearch.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-")) ||
                                  currentHash.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-"))));
    });
  };

  const handleClick = (href: string, e: React.MouseEvent) => {
    // For Storybook navigation using query parameters
    if (href.startsWith("?path=/story/")) {
      // Use window.location to navigate with query parameter
      e.preventDefault();
      window.location.search = href.replace("?", "");
    } else if (onNavigate) {
      e.preventDefault();
      onNavigate(href);
    }
  };

  const contentGroups = navGroups.filter((group) => group.label !== "Admin");
  const adminGroup = navGroups.find((group) => group.label === "Admin");

  return (
    <SidebarContainer>
      <div style={{ padding: "20px 24px", borderBottom: "1px solid hsl(var(--sidebar-border))" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Logo variant="shaw" size={40} />
          <LogoText>
            <h1>Shaw Heritage</h1>
            <p>CMS</p>
          </LogoText>
        </div>
      </div>

      {/* Dashboard Link */}
      <DashboardLink
        href={dashboardHref}
        $active={currentPath === dashboardHref || currentPath === "#" || currentPath === "/" || 
                window.location.search.includes("examples-dashboardexample") ||
                window.location.hash.includes("examples-dashboardexample")}
        onClick={(e) => handleClick(dashboardHref, e)}
      >
        <LayoutDashboard />
        Dashboard
      </DashboardLink>

      {/* Navigation */}
      <NavSection>
        {/* Content Pillars */}
        <NavList>
          {contentGroups.map((group) => {
            const isExpanded = expandedGroups.includes(group.label);
            const groupActive = isGroupActive(group);

            return (
              <li key={group.label}>
                <GroupButton
                  $active={groupActive}
                  $isAdmin={false}
                  onClick={() => toggleGroup(group.label)}
                >
                  <GroupIconContainer $active={groupActive} $isAdmin={false}>
                    <group.icon />
                    {group.label}
                  </GroupIconContainer>
                  <ChevronIcon $expanded={isExpanded} />
                </GroupButton>

                {isExpanded && (
                  <SubMenuList>
                    {group.items.map((item) => {
                      const currentSearch = window.location.search;
                      const currentHash = window.location.hash;
                      const pathToCheck = currentPath;
                      const storyId = item.href.replace("?path=/story/", "").replace("--default", "");
                      const searchMatch = currentSearch.includes(`path=/story/${storyId}`);
                      const hashStoryId = currentHash.replace("#/story/", "").replace("--default", "");
                      const isActive = item.href !== "#" && (
                        pathToCheck.includes(item.href) ||
                        searchMatch ||
                        hashStoryId === storyId ||
                        (item.storyTitle && (currentSearch.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-")) ||
                                             currentHash.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-"))))
                      );
                      return (
                        <li key={item.label}>
                          <SubMenuItem
                            href={item.href}
                            $active={isActive}
                            $isAdmin={false}
                            onClick={(e) => handleClick(item.href, e)}
                          >
                            <item.icon />
                            {item.label}
                          </SubMenuItem>
                        </li>
                      );
                    })}
                  </SubMenuList>
                )}
              </li>
            );
          })}
        </NavList>

        {/* Admin Section - Separated */}
        {adminGroup && (
          <AdminSeparator>
            <NavList>
              <li>
                <GroupButton
                  $active={isGroupActive(adminGroup)}
                  $isAdmin={true}
                  onClick={() => toggleGroup(adminGroup.label)}
                >
                  <GroupIconContainer
                    $active={isGroupActive(adminGroup)}
                    $isAdmin={true}
                  >
                    <adminGroup.icon />
                    {adminGroup.label}
                  </GroupIconContainer>
                  <ChevronIcon
                    $expanded={expandedGroups.includes(adminGroup.label)}
                  />
                </GroupButton>

                {expandedGroups.includes(adminGroup.label) && (
                  <SubMenuList>
                    {adminGroup.items.map((item) => {
                      const currentSearch = window.location.search;
                      const currentHash = window.location.hash;
                      const pathToCheck = currentPath;
                      const storyId = item.href.replace("?path=/story/", "").replace("--default", "");
                      const searchMatch = currentSearch.includes(`path=/story/${storyId}`);
                      const hashStoryId = currentHash.replace("#/story/", "").replace("--default", "");
                      const isActive = item.href !== "#" && (
                        pathToCheck.includes(item.href) ||
                        searchMatch ||
                        hashStoryId === storyId ||
                        (item.storyTitle && (currentSearch.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-")) ||
                                             currentHash.toLowerCase().includes(item.storyTitle.toLowerCase().replace(/\//g, "-"))))
                      );
                      return (
                        <li key={item.label}>
                          <SubMenuItem
                            href={item.href}
                            $active={isActive}
                            $isAdmin={true}
                            onClick={(e) => handleClick(item.href, e)}
                          >
                            <item.icon />
                            {item.label}
                          </SubMenuItem>
                        </li>
                      );
                    })}
                  </SubMenuList>
                )}
              </li>
            </NavList>
          </AdminSeparator>
        )}
      </NavSection>

      {/* Footer */}
      <FooterSection>
        <SignOutButton type="button" aria-label="Sign out of your account">
          <LogOut />
          Sign Out
        </SignOutButton>

        <UserProfile href="#" onClick={(e) => handleClick("#", e)}>
          <UserAvatar>JL</UserAvatar>
          <UserName>James Liu</UserName>
        </UserProfile>

        <VersionText>v1.0.0</VersionText>
      </FooterSection>
    </SidebarContainer>
  );
};

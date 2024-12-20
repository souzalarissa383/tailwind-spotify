import React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import { SpriteCategories } from '@enums';

import { NavLink } from '../Sidebar/partials/NavLink';

export default {
  title: 'Layout/Sidebar/Partials/NavLink',
  component: NavLink,
} as Meta<typeof NavLink>;

const Template: StoryFn<typeof NavLink> = ({ children, ...props }) => (
  <div className="p-6 bg-zinc-950 rounded">
    <NavLink {...props}>{children}</NavLink>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  icon: { name: 'layers', category: SpriteCategories.MENU },
  href: '#',
  children: 'Your Library',
};
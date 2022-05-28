import { render, fireEvent, screen } from '@testing-library/react';
import BaseCheckDemo from '../demo/base';
import React from 'react';
import DisabledCheckbox from '@/checkbox/demo/disabled';
import ControlledDemo from '@/checkbox/demo/controlled';
import GroupDemo from '@/checkbox/demo/group';

test('check checkbox click', async () => {
  render(<BaseCheckDemo />);
  const el = screen.getByRole('checkbox');
  const elClassList = el?.parentElement?.classList;
  fireEvent.click(el);
  expect(elClassList)?.toContain('hong-checkbox-checked');
  fireEvent.click(el);
  expect(elClassList)?.not.toContain('hong-checkbox-checked');
});

test('check disabled', async () => {
  render(<DisabledCheckbox />);
  const el = screen.getByRole('disabledFalse').children[0];
  const elClassList = el?.classList;
  fireEvent.click(el);
  expect(elClassList)?.toContain('hong-checkbox-disabled');
  expect(elClassList)?.not.toContain('hong-checkbox-checked');
});

test('check controlled', async () => {
  render(<ControlledDemo />);
  const el = screen.getByRole('controlledCheckbox').children[0];
  const elClassList = el?.classList;
  const disabledButton = screen.getByRole('disabledButton');
  const checkButton = screen.getByRole('checkButton');
  fireEvent.click(disabledButton);
  fireEvent.click(el);
  expect(elClassList)?.toContain('hong-checkbox-checked');
  fireEvent.click(checkButton);
  expect(elClassList)?.not.toContain('hong-checkbox-checked');
});

test('check group', async () => {
  render(<GroupDemo />);
  const plainGroup = screen.getByRole('plainGroup');
  expect(plainGroup.children.length).toEqual(3);
  const el = plainGroup.children[1].children[0];
  fireEvent.click(el);
  expect(el.classList)?.toContain('hong-checkbox-checked');
  fireEvent.click(el);
  expect(el.classList)?.not.toContain('hong-checkbox-checked');
  const Group = screen.getByRole('Group');
  expect(Group.children.length).toEqual(3);
  const disabledGroup = screen.getByRole('disabledGroup');
  expect(disabledGroup.children[2].children[0].classList).toContain(
    'hong-checkbox-disabled',
  );
});

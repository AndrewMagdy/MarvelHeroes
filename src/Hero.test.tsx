import React from 'react';
import { mount as _mount } from 'enzyme';

import flushPromises from './utils/flushPromises';
import mockRouteComponentProps from './utils/mockRouteComponentProps';
import Hero, { Props, QueryParams } from './Hero';

jest.mock('./http/Marvel');

const mount = (node: React.ReactElement<Props>) => _mount<Props>(node);

test('render()', async () => {
  const wrapper = mount(
    <Hero {...mockRouteComponentProps<QueryParams>({ match: { params: { id: '1011334' } } })} />
  );

  const pleaseWait = '<p>Please wait...</p>';

  expect(wrapper.html()).toEqual(pleaseWait);

  await flushPromises();
  expect(wrapper.html()).toMatch(/^<div class="hero">.*<h3>3-D Man<\/h3>.*<\/div>$/);

  wrapper.setProps({
    ...mockRouteComponentProps<QueryParams>({ match: { params: { id: '1017100' } } })
  });
  expect(wrapper.html()).toEqual(pleaseWait);
  await flushPromises();
  expect(wrapper.html()).toMatch(/^<div class="hero">.*<h3>A-Bomb \(HAS\)<\/h3>.*<\/div>$/);

  wrapper.setProps({
    ...mockRouteComponentProps<QueryParams>({ match: { params: { id: '1009144' } } })
  });
  expect(wrapper.html()).toEqual(pleaseWait);
  await flushPromises();
  expect(wrapper.html()).toMatch(/^<div class="hero">.*<h3>A\.I\.M\.<\/h3>.*<\/div>$/);

  wrapper.unmount();
});

import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Flex, useFlexProps } from '../Flex';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Flex>Hello world</Flex>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Flex position="absolute" top="0">
        Hello world
      </Flex>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Flex use="p">Hello world</Flex>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Flex props', () => {
      const { result } = renderHook(() => useFlexProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Flex>{FlexProps => <div {...FlexProps}>Hello world</div>}</Flex>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Flex.base should render correctly', () => {
    const { container } = render(<Flex>hello world</Flex>, {
      theme: { Flex: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Tooltip } from '../Tooltip';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Tooltip content="This is content">Hello world</Tooltip>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Tooltip color="primary" content="This is content">
        Hello world
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Tooltip use="p" content="This is content">
          Hello world
        </Tooltip>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Tooltip props', () => {
      const { result } = renderHook(() => Tooltip.useProps({ content: 'This is content' }));
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Tooltip content="This is content">{TooltipProps => <div {...TooltipProps}>Hello world</div>}</Tooltip>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Tooltip.Content.base should render correctly', () => {
    const { container } = render(
      <Tooltip content="This is content" overrides={{ Tooltip: { Content: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tooltip.Reference.base should render correctly', () => {
    const { container } = render(
      <Tooltip content="This is content" overrides={{ Tooltip: { Reference: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </Tooltip>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Tooltip.Content.base should render correctly', () => {
    const { container } = render(<Tooltip content="This is content">hello world</Tooltip>, {
      // @ts-ignore
      theme: { Tooltip: { Content: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tooltip.Reference.base should render correctly', () => {
    const { container } = render(<Tooltip content="This is content">hello world</Tooltip>, {
      // @ts-ignore
      theme: { Tooltip: { Reference: { base: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Tooltip content="This is content">hello world</Tooltip>, {
      // @ts-ignore
      theme: { Tooltip: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

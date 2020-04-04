import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { DropdownMenu } from '../index';
import { Button } from '../../Button';
import { Link } from '../../Link';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
        visible
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an invisible dropdown menu', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for CSS props', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        backgroundColor="red"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with groups', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
        visible
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('DropdownMenu.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { css: { root: { backgroundColor: 'red' } } } }}
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Popover.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Popover: { css: { root: { backgroundColor: 'red' } } } } }}
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Button.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Button: { css: { root: { backgroundColor: 'red' } } } } }}
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Divider.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Divider: { css: { root: { backgroundColor: 'red' } } } } }}
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Group.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Group: { css: { root: { backgroundColor: 'red' } } } } }}
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Item.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        overrides={{ DropdownMenu: { Item: { css: { root: { backgroundColor: 'red' } } } } }}
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('DropdownMenu.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      {
        theme: { DropdownMenu: { css: { root: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Popover.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Popover: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Button.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Button: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Divider.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Divider: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Group.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Group: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('DropdownMenu.Item.css.root should render correctly', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Group title="Actions">
              <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
              <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
                Delete
              </DropdownMenu.Item>
            </DropdownMenu.Group>
            <DropdownMenu.Divider />
            <DropdownMenu.Group title="Links">
              <DropdownMenu.Item>Test</DropdownMenu.Item>
            </DropdownMenu.Group>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      { theme: { DropdownMenu: { Item: { css: { root: { backgroundColor: 'red' } } } } } }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <DropdownMenu
        baseId="test"
        content={
          <React.Fragment>
            <DropdownMenu.Item iconBefore="solid-pen">Edit</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-share">Share</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-file-signature">Rename</DropdownMenu.Item>
            <DropdownMenu.Item iconBefore="solid-trash-alt" color="danger">
              Delete
            </DropdownMenu.Item>
          </React.Fragment>
        }
      >
        <Button iconAfter="chevron-down">Actions</Button>
      </DropdownMenu>,
      {
        theme: { DropdownMenu: { defaultProps: { className: 'test', color: 'primary' } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
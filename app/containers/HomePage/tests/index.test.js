import React from 'react';
import { shallow, mount } from 'enzyme';

import { HomePage, mapDispatchToProps } from '../index';
import LastString from '../LastString';
import { changeString } from '../actions';

describe('<HomePage />', () => {
  it('should render the <LastString /> component on load', () => {
    const renderedComponent = shallow(<HomePage />);
    expect(renderedComponent.contains(<LastString />)).toEqual(true);
  });

  it('should not call onSubmitForm if form submitted is an empty string', () => {
    const submitSpy = jest.fn();
    mount(<HomePage onChangeUsername={() => {}} onSubmitForm={submitSpy} />);
    expect(submitSpy).not.toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeString', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeString).toBeDefined();
      });

      it('should dispatch changeString when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const string = 'dmi';
        result.onChangeString({ target: { value: string } });
        expect(dispatch).toHaveBeenCalledWith(changeString(string));
      });
    });

    describe('onSubmitForm', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onSubmitForm).toBeDefined();
      });

      it('should preventDefault if called with event', () => {
        const preventDefault = jest.fn();
        const result = mapDispatchToProps(() => {});
        const e = { preventDefault };
        result.onSubmitForm(e);
        expect(preventDefault).toHaveBeenCalledWith();
      });
    });
  });
});

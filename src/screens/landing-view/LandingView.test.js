import React from 'react';
import { shallow } from 'enzyme';
import AboutView from './AboutView';

jest.mock('react-i18next');

describe('AboutView', () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(<AboutView />)
                .find('div.about-view')
                .exists()
        ).toBe(true);
    });
});

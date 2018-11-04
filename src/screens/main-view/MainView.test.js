import React from 'react';
import { shallow } from 'enzyme';
import MainView from './MainView';

jest.mock('react-i18next');

describe('AboutView', () => {
    it('should render without throwing an error', () => {
        expect(
            shallow(<MainView />)
                .find('div.about-view')
                .exists()
        ).toBe(true);
    });
});

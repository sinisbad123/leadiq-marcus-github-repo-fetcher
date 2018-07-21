import React from 'react';
import { shallow } from 'enzyme';

import Footer from '../index';

describe('<Footer />', () => {
  it('should render the addressing of LeadIQ devs', () => {
    const renderedComponent = shallow(<Footer />);
    expect(
      renderedComponent.contains(
        <section>This project is made for LeadIQ and its developers and testers only</section>
      )
    ).toBe(true);
  });
});

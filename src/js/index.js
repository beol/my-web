import React from 'react';
import ReactDOM from 'react-dom';

import '../scss/main.scss';

const App = () => (
  <article>
    <header>
      <h1>Lorem Ipsum</h1>
    </header>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus convallis diam in tristique. Nunc varius erat a urna fermentum blandit. Sed nec facilisis diam. Pellentesque ut nibh mattis, eleifend nulla a, mollis magna. Aliquam non condimentum urna. Vestibulum tempus massa nec leo consequat, nec hendrerit arcu convallis. In hac habitasse platea dictumst. Suspendisse potenti. Phasellus dictum pellentesque posuere. Nunc placerat augue ut iaculis ultricies. Nam non egestas enim. Suspendisse potenti.</p>

    <footer>
      <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</small>
    </footer>
  </article>
);

ReactDOM.render(<App />, document.getElementById('app'));
